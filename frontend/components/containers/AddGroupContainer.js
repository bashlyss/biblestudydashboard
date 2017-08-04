/**
 * Created by James on 8/4/2017.
 */
import React from 'react';
import AltContainer from 'alt-container';
import GroupStore from '../../stores/GroupStore';
import UserStore from '../../stores/UserStore';
import AddGroupPage from '../groups/AddGroupPage';
import GroupActions from '../../actions/GroupActions';
import UserActions from '../../actions/UserActions';

class GroupContainer extends React.Component {
    componentDidMount() {
        GroupActions.fetch();
        UserActions.fetch();
    }
    render() {
        return (
            <AltContainer stores={{ groups: GroupStore, users: UserStore }}>
                <AddGroupPage />
            </AltContainer>
        );
    }
}

export default GroupContainer;