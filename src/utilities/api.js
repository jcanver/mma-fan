import axios from 'axios';


const baseURL = 'http://ufc-data-api.ufc.com/api/v3/iphone/';
let authorizationOutgoingHeaders;

const apiClient = axios.create({
  baseURL,
  timeout: 30000
});

apiClient.defaults.headers.post['Content-Type'] = 'application/json';
apiClient.defaults.headers.put['Content-Type'] = 'application/json';
apiClient.defaults.headers.common.fromApp = 'v1.0.2';

/**
 * Function to set outgoing headers
 * @param {string} token
 * @param {string} uuid
 * @return {function}
 */
export function setOutgoingHeaders(token: string, uuid: string) {
  logger.log({ token, uuid }, 'request.js');
  return function set(config: {headers: Object, url: string, method: string, data: *}) {
    if (token && uuid) {
      config.headers.Authorization = decodeURIComponent(token); //eslint-disable-line
      config.headers.uuid = uuid; //eslint-disable-line
    } else {
      logger.warn('No token and/or uuid', 'utilities/request.js');
    }
    logger.log({
      headers: config.headers,
      url: config.url,
      method: config.method,
      data: config.data
    }, 'request - outgoingheaders');
    return config;
  };
}

/**
 * **Add authentication headers to outgoing requests**
 * @param {string} token Authentication bearer token
 * @param {string} uuid User unique identifier
 */
export function manualSetOutgoingHeaders(token: string, uuid: string) {
  logger.log('Manually setting outgoing headers', 'request.js');
  if (!authorizationOutgoingHeaders) {
    authorizationOutgoingHeaders = apiClient.interceptors
      .request
      .use(setOutgoingHeaders(token, uuid), (err) => Promise.reject(err));
  }
  logger.log(apiClient.interceptors);
}


/**
 * Set the token and uuid if they come in
 * @param {Object} param0
 * @param {*} param0.data Data from the server
 * @param {Headers} param0.headers Headers from the server
 * @param {string} param0.status Status code from the server
 */
export function setIncomingHeaders({ data, headers, status, ...rest }: {data: *, headers: Object, status: number}) {
  logger.log({ data, headers, status, ...rest }, 'utilities/request.js');
  // if ((headers.authorization && headers.uuid)) {
  //   logger.log('Setting now outgoing headers');
  //   authorizationOutgoingHeaders = apiClient.interceptors
  //     .request
  //     .use(setOutgoingHeaders(headers.authorization, headers.uuid), (err) => Promise.reject(err));
  // }

  return { data, status, headers };
}

export function handleRequestError({ response, ...rest }: {response: {data?: *, message: string}}): Promise<*> {
  let toSend = response;
  logger.error({ response, ...rest });
  if (toSend && toSend.data) {
    logger.warn(
      JSON.stringify(toSend.data).replace(/\\n/g, '').replace(/\\/g, ''), 'utilities/request.js#handleRequestError'
    );
  }
  if (response && response.message && !response.data) {
    toSend = response.message;
  }
  logger.warn(toSend, 'utilities/request.js#handleRequestError');
  return Promise.reject(toSend);
}

export function ejectAuthHeader() {
  apiClient.interceptors.request.handlers = [];
}

apiClient.interceptors.response.use(setIncomingHeaders, handleRequestError);

export default apiClient;
