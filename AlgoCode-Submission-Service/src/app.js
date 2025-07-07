const fastifyPlugin = require('fastify-plugin');
const cors = require('@fastify/cors');
const servicePlugin = require('./services/servicePlugin');

async function app(fastify, opts) {
    
    await fastify.register(cors);

     fastify.register(servicePlugin);


    // register test routes
    fastify.register(require('./routes/api/apiRoutes'), {prefix: '/api'});


}

module.exports = fastifyPlugin(app);
