import { FastifyReply, FastifyRequest } from "fastify";
import { CreateKey } from "../services/CreateKey";

//This will deal with the front request of an encryption key.
class CreateKeyController {

    async handle(request: FastifyRequest, reply: FastifyReply) {
        try {

            const createKey = new CreateKey();
            const { exportedKey } = await createKey.generateKey();
            reply.send({ key: exportedKey });

        } catch (err) {

            console.error(err);
            reply.status(500).send({ error: 'Erro na geração da chave' });
        }
    }
}

export { CreateKeyController };

//To be added the wrap key here and the unwrap key in the front
