class RESTStore {
    constructor(actionCreator) {
        this.objects = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdate: actionCreator.UPDATE,
            handleFetch: actionCreator.FETCH,
            handleFailed: actionCreator.FAILED,
            handleAddOne: actionCreator.ADD_ONE
        })
    }

    handleUpdate(objects) {
        this.objects = objects;
        this.errorMessage = null;
    }

    handleFetch() {
        this.objects = [];
    }

    handleFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }

    handleAddOne(object) {
        this.objects.push(object);
        this.errorMessage = null;
    }
}

export default RESTStore;
