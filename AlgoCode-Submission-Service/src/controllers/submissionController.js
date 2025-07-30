async function createSubmission(req, res) {
    try {
        console.log('Body:', req.body);
        const response = await this.submissionService.addSubmission(req.body);
        return res.code(201).send({
            error: {},
            data: response,
            success: true,
            message: 'Created submission successfully'
        });
    } catch (err) {
        console.error("Error creating submission:", err);
        return res.code(500).send({
            error: err.message || 'Internal Server Error',
            data: null,
            success: false,
            message: 'Failed to create submission'
        });
    }
}


module.exports =  {
    createSubmission
};