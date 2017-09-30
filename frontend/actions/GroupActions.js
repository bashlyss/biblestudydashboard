import axios from 'axios';
import dispatcher from '../dispatcher/Dispatcher';
import RESTActions from './RESTActions';

class GroupActions extends RESTActions {
  constructor() {
    super('groups');
  }

  enableGroup(id) {
    return (dispatch) => {
      dispatch(id);
      return axios.patch(`${this.baseRoute}${id}/`, { active: true }).then(
        (response) => { this.addOne(response.data); },
      ).catch(
        (errorMessage) => { this.failed(errorMessage); },
      );
    };
  }

  closeGroup(id) {
    return (dispatch) => {
      dispatch(id);
      return axios.patch(`${this.baseRoute}${id}/`, { active: false }).then(
        (response) => { this.addOne(response.data); },
      ).catch(
        (errorMessage) => { this.failed(errorMessage); },
      );
    };
  }
}

export default dispatcher.createActions(GroupActions);
