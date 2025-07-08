const SubmissionRepository = require('../repositories/submissionRespository');
const SubmissionService = require('../services/submissionService');
const fastifyPlugin = require('fastify-plugin');
async function servicePlugin(fastify, options) {

    fastify.decorate('submissionService', new SubmissionService(this.submissionRepository));
}

module.exports = fastifyPlugin(servicePlugin);