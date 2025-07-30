const fastifyPlugin = require('fastify-plugin');
const cors = require('@fastify/cors');
const servicePlugin = require('./services/servicePlugin');
const repositoryPlugin = require('./repositories/repositoryPlugin');


async function app(fastify, opts) {
    
    await fastify.register(cors);

    await fastify.register(servicePlugin);
    await fastify.register(repositoryPlugin);


    // register test routes
    await fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});


}

module.exports = fastifyPlugin(app);
