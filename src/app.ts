import * as http from "http";
import {
  filterEpisodes,
  listEpisodes,
} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await listEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await filterEpisodes(request, response);
  }
};
