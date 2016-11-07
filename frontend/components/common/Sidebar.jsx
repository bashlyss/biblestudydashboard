import React from 'react';
import Radium from 'radium';
import SidebarLink from './SidebarLink';

@Radium
class Sidebar extends React.Component {
    get styles() {
        return {
            base: {
                display: 'table-cell',
                background: '#0d0221',
                color: '#ffffff',
                padding: '30px 10px',
                width: '200px',
                height: '500px',
                verticalAlign: 'top',
            },
            list: {
                padding: 0,
                borderTop: '1px solid #ffffff',
            },
        }
    }
    render() {
        return (
          <div style={this.styles.base}>
            <div>Use these links to navigate through the site!</div>
            <ul style={this.styles.list}>
              <SidebarLink to="/" name="My Groups" />
              <SidebarLink to="/addgroup/" name="Form a new group" />
            </ul>
          </div>
        )
    }    
}

export default Sidebar;
