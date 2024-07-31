import { FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import { CreateKeyController } from "./controllers/CreateKeyController";

//Creating my routes for the creation of key and testing whatever
export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true };
    });

    fastify.get("/create_key", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateKeyController().handle(request, reply)
    })
   
}