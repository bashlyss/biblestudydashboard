import _ from 'lodash';
import dispatcher from '../dispatcher/Dispatcher';
import RESTStore from './RESTStore';
import DocActions from '../actions/DocActions';
import GroupActions from '../actions/GroupActions';

class DocStore extends RESTStore {
    constructor() {
        super(DocActions);

        this.byGroup = {};

        this.bindListeners({
            handleUpdateFromGroup: GroupActions.UPDATE,
            handleUpdateForGroups: DocActions.ADD_ONE,
        });
    }

    handleUpdateFromGroup(groups) {
        this.byGroup = _.zipObject(_.map(groups, 'id'), _.map(groups, 'document_set'));
    }

    handleUpdateForGroups(doc) {
        this.byGroup[doc.group].push(doc.id);
    }

    static getForGroup(groupId) {
        const state = this.getState();
        return _.pick(state.objects, state.byGroup[groupId]);
    }

    static getFor(id) {
        return _.find(this.getState().objects, obj => obj.id === id) || {};
    }
}

export default dispatcher.createStore(DocStore, 'DocStore');
