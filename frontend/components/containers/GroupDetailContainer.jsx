import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import UserStore from '../../stores/UserStore';
import DocStore from '../../stores/DocStore';
import GroupCommentStore from '../../stores/GroupCommentStore';
import GroupDashboard from '../groups/GroupDashboard';

const GroupDetailContainer = props =>
  (<AltContainer
    groupId={props.params.groupId}
    stores={{
      group: sprops => ({
          store: GroupStore,
          value: GroupStore.getFor(sprops.groupId),
      }),
      comments: sprops => ({
          store: GroupCommentStore,
          value: GroupCommentStore.getForGroup(sprops.groupId),
      }),
      docs: sprops => ({
          store: DocStore,
          value: DocStore.getForGroup(sprops.groupId),
      }),
      users: sprops => ({
          store: UserStore,
          value: UserStore.getForGroup(sprops.groupId),
      }),
    }}
  >
    <GroupDashboard />
  </AltContainer>);

export default GroupDetailContainer;
