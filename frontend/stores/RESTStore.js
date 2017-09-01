import _ from 'lodash';

class RESTStore {
    constructor(actionCreator) {
        this.objects = [];
        this.errorMessage = null;
        this.fetching = false;
        this._actionCreator = actionCreator;

        this.bindListeners({
            handleUpdate: actionCreator.UPDATE,
            handleFetch: actionCreator.FETCH,
            handleFetchOne: actionCreator.FETCH_ONE,
            handleFailed: actionCreator.FAILED,
            handleAddOne: actionCreator.ADD_ONE
        })

    }

    static config = {
        getState: function () {
            function getState(state) {
                console.log(state, this);
                if (Array.isArray(state)) {
                    return state.slice();
                } else if (_.isObject(state)) {
                    if (state.objects.length === 0 && !this.state.fetching) {
                        setTimeout(this.state._actionCreator.fetch, 100);
                    }
                    return _.assign({}, state);
                }

                return state;
            }

            return getState;
        }()
    }

    handleUpdate(objects) {
        this.objects = objects;
        this.fetching = false;
        this.errorMessage = null;
    }

    handleFetch() {
        this.objects = [];
        this.fetching = true;
    }

    handleFetchOne(object) {
        _.remove(this.objects, item => item.id === object.id);
        this.fetching = true;
    }

    handleFailed(errorMessage) {
        this.errorMessage = errorMessage;
        this.fetching = false
    }

    handleAddOne(object) {
        this.objects.push(object);
        this.fetching = false;
        this.errorMessage = null;
    }
}

export default RESTStore;
