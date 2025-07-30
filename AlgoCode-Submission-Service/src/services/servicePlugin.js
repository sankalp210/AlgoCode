const SubmissionRepository = require('../repositories/submissionRepository');
const SubmissionService = require('./submissionService'); // adjust if needed
const fastifyPlugin = require('fastify-plugin');

async function servicePlugin(fastify, options) {
    const submissionRepository = new SubmissionRepository(); // ✅ create instance here
    const submissionService = new SubmissionService(submissionRepository); // ✅ pass it

    fastify.decorate('submissionService', submissionService); // ✅ decorate correctly
}

module.exports = fastifyPlugin(servicePlugin);
