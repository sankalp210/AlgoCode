class submissionService{
    constructor(submissionRespository){
        this.submissionRespository = submissionRespository;
    }

    async addSubmission(submissionData) {
        const submission = this.submissionRepository.createSubmission(submissionData);
        if(!submission) {
            // TODO: Add error handling here
            throw {messgae: "Not able to create submission"};
        }
        console.log(submission);
        const response = await SubmissionProducer(submission);
        return {queueResponse: response, submission};
    }
}

module.exports = submissionService;