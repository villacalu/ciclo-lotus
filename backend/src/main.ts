import fastify from "fastify";

const server = fastify();

server.get("/", async (request, reply) => {
  return { hello: "world" };
});

server
  .listen({ port: 4000, host: "0.0.0.0" })
  .then((address) => console.log(`Server is listening on ${address}`));
