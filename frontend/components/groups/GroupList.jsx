import _ from 'lodash';
import List from '../common/List';

class GroupList extends List {
    get objects() {
        return _.values(this.props.groups.objects);
    }
    get title() {
        return 'My Groups';
    }
}


export default GroupList;
