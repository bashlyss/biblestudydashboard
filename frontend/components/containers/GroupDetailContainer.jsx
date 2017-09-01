import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import UserStore from '../../stores/UserStore';
import DocStore from '../../stores/DocStore';
import CommentStore from '../../stores/CommentStore';
import GroupActions from '../../actions/GroupActions';
import GroupDashboard from '../groups/GroupDashboard';

class GroupDetailContainer extends React.Component {
    componentDidMount() {
        GroupActions.fetchOne(this.props.params.groupId);
    }
    render() {
        return (
          <AltContainer groupId={this.props.params.groupId} stores={{
              group: props => ({
                  store: GroupStore,
                  value: GroupStore.getFor(props.groupId),
              }),
              comments: CommentStore,
              docs: DocStore,
              users: UserStore,
            }}
          >
            <GroupDashboard />
          </AltContainer>
        );
    }
}

export default GroupDetailContainer
