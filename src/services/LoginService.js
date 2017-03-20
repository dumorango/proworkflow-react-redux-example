/**
 * Created by dumorango on 20/03/17.
 */
import { getUrl, appendAuthHeader } from './API';
import 'whatwg-fetch';

export function login(loginDetails) {
  return fetch(getUrl('/me', loginDetails),{
    headers: appendAuthHeader(loginDetails)
  }).then((response) => {
    if(response.status === 200) {
      return response.json();
    }else {
      let error = new Error(response.statusText)
      error.response = response;
      throw error
    }
  })
  .then(me => me.contact)
  .catch(err => { throw(err); });
}
