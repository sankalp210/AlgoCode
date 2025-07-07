const fastifyPlugin = require('fastify-plugin');
const cors = require('@fastify/cors');

async function app(fastify, opts) {
    
    await fastify.register(cors);

}

module.exports = fastifyPlugin(app);
