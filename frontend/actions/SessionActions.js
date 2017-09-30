/* globals sessionStorage */
import dispatcher from '../dispatcher/Dispatcher';

class SessionActions {
  setUser(userId) {
    sessionStorage.setItem('user', userId);
  }

  unsetUser() {
    sessionStorage.removeItem('user');
  }

  getUser() {
    return sessionStorage.getItem('user');
  }

  clear() {
    sessionStorage.clear();
  }
}

export default dispatcher.createActions(SessionActions);
