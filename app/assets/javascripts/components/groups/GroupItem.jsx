import React from 'react';
import Radium from 'radium';

@Radium
class GroupItem extends React.Component {
    render() {
        return (
            <li>
              <div>{this.props.name}</div>
              <div>{this.props.description}</div>
            </li>
        );
    }
}

export default GroupItem;
