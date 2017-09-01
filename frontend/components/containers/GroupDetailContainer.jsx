import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import UserStore from '../../stores/UserStore';
import DocStore from '../../stores/DocStore';
import CommentStore from '../../stores/CommentStore';
import GroupActions from '../../actions/GroupActions';
import GroupDashboard from '../groups/GroupDashboard';

const GroupDetailContainer = props =>
  <AltContainer groupId={props.params.groupId} stores={{
      group: sprops => ({
          store: GroupStore,
          value: GroupStore.getFor(sprops.groupId),
      }),
      // TODO getForGroup for comments, docs
      comments: CommentStore,
      docs: DocStore,
      users: sprops => ({
          store: UserStore,
          value: UserStore.getForGroup(sprops.groupId),
      }),
    }}
  >
    <GroupDashboard />
  </AltContainer>;

export default GroupDetailContainer
