/**
 * Created by dumorango on 20/03/17.
 */
import base64 from 'base-64';

export function getUrl(path, { apikey }) {
  return `https://api.proworkflow.net/${path}?apikey=${apikey}`;
}

export function appendAuthHeader({ headers, email, password}) {
  let newHeaders = headers ? Object.assign({}, headers ) : new Headers();
  newHeaders.append("Authorization", "Basic " + base64.encode(`${email}:${password}`));
  return newHeaders;
}
