/**
 * Created by dumorango on 20/03/17.
 */
import { getUrl, appendAuthHeader } from './API';
import 'whatwg-fetch';

export function getMessages(loginDetails) {
  return fetch(getUrl('/messages', loginDetails),{
    headers: appendAuthHeader(loginDetails)
  }).then((response) => {
    if(response.status === 200) {
      return response.json().then(payload => payload.messages);
    }else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
  .then(messages => messages)
  .catch(err => { throw(err); });
}

export function removeMessage(loginDetails, message) {
  return fetch(getUrl(`/messages/${message.id}`, loginDetails),{
    headers: appendAuthHeader(loginDetails),
    method: 'DELETE'
  }).then((response) => {
    if(response.status === 200) {
      return response.json().then(payload => payload.messages);
    }else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  })
    .then(messages => messages)
    .catch(err => { throw(err); });
}
