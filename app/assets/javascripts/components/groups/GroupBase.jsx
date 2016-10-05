import React from 'react';
import Radium from 'radium';
import GroupHeaderLink from './GroupHeaderLink';

@Radium
class GroupBase extends React.Component {
    get styles() {
        return {
            header: {
                background: '#a1a6b4',
                marginBottom: '15px',
            }
        }
    }
    get linkAddDocument() {
        return _.replace('/mygroups/:groupid/document/', ':groupid', this.props.params.groupId);
    }
    get linkGroupHome() {
        return _.replace('/mygroups/:groupid/', ':groupid', this.props.params.groupId);
    }
    render() {
        return (
          <div>
            <div style={this.styles.header}>
              <GroupHeaderLink to={this.linkGroupHome} name="Group Home" />
              <GroupHeaderLink to={this.linkAddDocument} name="Add Document" />
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        );
    }
}

export default GroupBase;
