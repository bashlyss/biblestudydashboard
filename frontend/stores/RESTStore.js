import _ from 'lodash';

class RESTStore {
  constructor(actionCreator) {
    this.objects = {};
    this.errorMessage = null;
    this.fetching = false;
    this.fetched = false;
    this.actionCreator = actionCreator;

    this.bindListeners({
      handleUpdate: actionCreator.UPDATE,
      handleFetch: actionCreator.FETCH,
      handleFetchOne: actionCreator.FETCH_ONE,
      handleFailed: actionCreator.FAILED,
      handleAddOne: actionCreator.ADD_ONE,
    });
  }

    static config = {
      getState: (state) => {
        if (Array.isArray(state)) {
          return state.slice();
        } else if (_.isObject(state)) {
          if (!state.fetching && !state.fetched) {
            setTimeout(state.actionCreator.fetch, 100);
          }
          return _.assign({}, state);
        }

        return state;
      },
    }

    handleUpdate(objects) {
      this.objects = _.zipObject(_.map(objects, 'id'), objects);
      this.fetching = false;
      this.fetched = true;
      this.errorMessage = null;
    }

    handleFetch() {
      this.objects = {};
      this.fetching = true;
    }

    handleFetchOne(object) {
      delete this.objects[object.id];
      this.fetching = true;
    }

    handleFailed(errorMessage) {
      this.errorMessage = errorMessage;
      this.fetching = false;
      this.fetched = true;
    }

    handleAddOne(object) {
      this.objects[object.id] = object;
      this.fetching = false;
      this.fetched = true;
      this.errorMessage = null;
    }
}

export default RESTStore;
