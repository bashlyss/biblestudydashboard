import React from 'react';
import Radium from 'radium';
import { Link, IndexLink } from 'react-router';

@Radium
class Sidebar extends React.Component {
    render() {
        return (
          <div>
            <div>Use these links to navigate through the site!</div>
            <ul>
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="/addgroup/">Form a new group</Link></li>
            </ul>
          </div>
        )
    }    
}

export default Sidebar;
