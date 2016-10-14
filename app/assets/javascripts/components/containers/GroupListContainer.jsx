import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import GroupList from '../groups/GroupList';
import GroupActions from '../../actions/GroupActions';

class GroupContainer extends React.Component {
    componentDidMount() {
        GroupActions.fetch();
    }
    render() {
        return (
          <AltContainer stores={{ groups: GroupStore }}>
            <GroupList />
          </AltContainer>
        );
    }
}

export default GroupContainer;
