import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import GroupBase from '../groups/GroupBase';

const GroupBaseContainer = props =>
  (<AltContainer
    groupId={parseInt(props.params.groupId, 10)}
    stores={{
      group: sprops => ({
        store: GroupStore,
        value: GroupStore.getFor(sprops.groupId),
      }),
    }}
  >
    <GroupBase />
    {props.children}
  </AltContainer>);

export default GroupBaseContainer;
