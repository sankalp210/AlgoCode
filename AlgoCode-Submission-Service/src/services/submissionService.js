const { fetchProblemDetails } = require('../apis/problemAdminApi');

const submissionQueueProducer = require("../producers/submissionQueueProducer");

class submissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async addSubmission(submissionPayload) {
    const problemId = submissionPayload.problemId;
    const userId = submissionPayload.userId;
    console.log("[🔍] Received submission for problemId:", problemId);

    const problemAdminApiResponse = await fetchProblemDetails(problemId);

    if (!problemAdminApiResponse) {
        console.error("[❌] Failed to fetch problem details from Admin API.");
        throw new SubmissionCreationError('Failed to create a submission in the repository');
    }

    console.log("[✅] Fetched problem details successfully");

    const codeStubs = problemAdminApiResponse.data.codeStubs || [];
    console.log("[ℹ️] Available code stubs:", codeStubs.map(stub => stub.language));

    const submissionLang = submissionPayload.language?.toLowerCase();
    console.log("[📝] Submission language:", submissionLang);

    const languageCodeStub = codeStubs.find(
        codeStub => codeStub.language?.toLowerCase() === submissionLang
    );

    if (!languageCodeStub) {
        console.error("[⚠️] No matching code stub found for language:", submissionPayload.language);
        throw new Error("No matching code stub found for the specified language");
    }

    console.log("[✅] Matched language code stub for:", languageCodeStub.language);

    submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;

    console.log("[📦] Final submission code prepared. Creating submission...");

    const submission = await this.submissionRepository.createSubmission(submissionPayload);

    if (!submission) {
        console.error("[❌] Failed to create submission in DB");
        throw { message: "Not able to create submission" };
    }

    console.log("[✅] Submission created with ID:", submission._id);

    const response = await submissionQueueProducer({
        [submission._id]: {
            code: submission.code,
            language: submission.language,
            inputCase: problemAdminApiResponse.data.testCases[0].input,
            outputCase: problemAdminApiResponse.data.testCases[0].output,
            userId,
            submissionId : submission._id
        }
    });

    console.log("[📤] Submission sent to queue. Queue response:", response);

    return { queueResponse: response, submission };
}

}

module.exports = submissionService;