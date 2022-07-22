import queryString from "query-string";
import { HttpHeader, HttpMethod } from "../common/enums";
import { RequestArgs } from "../common/types";
import { env } from "../env";

const getInitHeaders = (
  hasContent = false,
  _headers: Record<string, string>,
  contentType = "application/json"
) => {
  const headers: HeadersInit = new Headers();
  if (hasContent) {
    headers.set(HttpHeader.CONTENT_TYPE, contentType);
  }

  if (_headers) {
    Object.entries(_headers).forEach(([key, value]) => {
      headers.set(key, value);
    });
  }

  return headers;
};
const deleteHeaders = (body: Record<string, string>) => {
  const newBody = JSON.parse(JSON.stringify(body));
  if (newBody && newBody.headers) {
    delete newBody.headers;
  }
  return newBody;
};

const getOptions = (method: HttpMethod, { params }: RequestArgs) => {
  const isBodyExist = params && method !== HttpMethod.GET;

  const headers = getInitHeaders(isBodyExist, params?.headers);
  const body = isBodyExist
    ? {
        body: JSON.stringify(params ? deleteHeaders(params) : {}),
      }
    : {};

  return {
    method,
    headers,
    ...body,
  };
};

const getUrlWithQuery = (url: string, query?: Record<string, any>): string =>
  `${url}${query ? `?${queryString.stringify(query)}` : ""}`;

const getUrl = (
  method: HttpMethod,
  { url, params, config }: RequestArgs
): string => {
  if (config?.isExternal) {
    if (params && method === HttpMethod.GET) {
      return getUrlWithQuery(url, params);
    }

    return url;
  }

  const fullUrl = `${env.server.url}/${url}`;

  if (params && method === HttpMethod.GET) {
    return getUrlWithQuery(fullUrl, params);
  }

  return fullUrl;
};

const makeRequest =
  (method: HttpMethod) =>
  async <T>(args: RequestArgs) => {
    const url = getUrl(method, args);
    const options = getOptions(method, args);

    let response = await fetch(url, options);

    let result: T & { statusCode?: number } = await response.json();
    if (result?.statusCode && result?.statusCode === 400) {
      throw new Error("Bad request");
    }
    return result;
  };

export const api = {
  get: makeRequest(HttpMethod.GET),
  post: makeRequest(HttpMethod.POST),
  delete: makeRequest(HttpMethod.DELETE),
  put: makeRequest(HttpMethod.PUT),
};
