import { IncomingMessage, ServerResponse } from "http";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify([
      {
        podcastName: "É possível imaginar o fim do capitalismo?",
        episode: "ABC DO SOCIALISMO #01",
        videoId: "PIdUa54WVTY",
        categories: ["politics"],
      },
      {
        podcastName: "Produção de Consenso",
        episode: "ABC DO SOCIALISMO #02",
        videoId: "z4d_GyRz7eA",
        categories: ["politics"],
      },
    ])
  );
};
