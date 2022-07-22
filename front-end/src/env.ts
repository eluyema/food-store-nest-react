import { getEnv } from "./helpers/env";

export const env = {
  server: {
    url: getEnv("REACT_APP_SERVER_URL"),
  },
};
