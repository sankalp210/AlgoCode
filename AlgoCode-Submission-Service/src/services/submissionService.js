const submissionQueueProducer = require("../producers/submissionQueueProducer");

class submissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    async addSubmission(submissionData) {
        const submission = await this.submissionRepository.createSubmission(submissionData); // ✅ now works
        if (!submission) {
            throw { message: "Not able to create submission" };
        }
        console.log(submission);
        const response = await submissionQueueProducer(submission);
        return { queueResponse: response, submission };
    }
}

module.exports = submissionService;