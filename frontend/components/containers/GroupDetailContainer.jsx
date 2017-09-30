import React from 'react';
import AltContainer from 'alt-container';
import UserStore from '../../stores/UserStore';
import DocStore from '../../stores/DocStore';
import GroupCommentStore from '../../stores/GroupCommentStore';
import GroupDashboard from '../groups/GroupDashboard';

const GroupDetailContainer = props =>
  (<AltContainer
    groupId={props.group.id}
    stores={{
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
    <GroupDashboard group={props.group} />
  </AltContainer>);

export default GroupDetailContainer;
