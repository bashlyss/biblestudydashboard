import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import $ from 'jquery';
import GroupItem from './groups/GroupItem';

@Radium
class Home extends React.Component {
    componentDidMount() {
        $.get('/groups', {}, groups => { this.setState({ groups }) });
    }
    get groups() {
        if (!_.isUndefined(this.state.groups)) {
            return this.state.groups;
        }
        return [];
    }
    render() {
        return (
          <div>
            <ul>
              {_.map(this.groups, group => <GroupItem {...group} />)}
            </ul>
          </div>
        );
    }
}


export default Home;
