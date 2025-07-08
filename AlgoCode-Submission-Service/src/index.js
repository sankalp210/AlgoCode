const fastify = require('fastify')({ logger: false });

const serverConfig = require('./config/serverConfig');

const app = require('./app');
const connectToDB = require('./config/dbConfig');

fastify.register(app);

fastify.listen({ port: serverConfig.PORT }, async (err) => {
    if (err) {
        console.error("❌ Error during server.listen:", err);
        process.exit(1);
    }
    await connectToDB();
    console.log(`✅ Server is running on port ${serverConfig.PORT}`);
});
