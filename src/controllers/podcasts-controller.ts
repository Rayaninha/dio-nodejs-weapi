import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};

export const filterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceFilterEpisodes("ABC DO SOCIALISMO");

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};
