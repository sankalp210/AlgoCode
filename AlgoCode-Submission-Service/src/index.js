const fastify = require('fastify')({ logger: false });

const serverConfig = require('./config/server.config');

const app = require('./app');

fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, (err) => {
    if (err) {
        console.error("❌ Error during server.listen:", err);
        process.exit(1);
    }
    console.log(`✅ Server is running on port ${serverConfig.PORT}`);
});
