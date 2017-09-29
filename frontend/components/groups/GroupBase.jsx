import React from 'react';
import Radium from 'radium';
import _ from 'lodash';
import GroupHeaderLink from './GroupHeaderLink';
import GroupActions from '../../actions/GroupActions';

class GroupBase extends React.Component {
    get styles() {
        return {
            header: {
                background: '#a1a6b4',
                marginBottom: '15px',
                padding: '5px',
            },
        };
    }
    get linkAddDocument() {
        return _.replace('/mygroups/:groupid/document/', ':groupid', this.props.group.id);
    }
    get linkGroupHome() {
        return _.replace('/mygroups/:groupid/', ':groupid', this.props.group.id);
    }
    render() {
        return (
          <div style={this.styles.header}>
            <GroupHeaderLink to={this.linkGroupHome} name="Group Home" />
            <GroupHeaderLink to={this.linkAddDocument} name="Add Document" />
            { this.props.group.is_admin && this.props.group.active &&
              <GroupHeaderLink
                name="Close Group"
                action={GroupActions.closeGroup}
                id={this.props.group.id}
              />}
            { this.props.group.is_admin && !this.props.group.active &&
              <GroupHeaderLink
                name="Enable Group"
                action={GroupActions.enableGroup}
                id={this.props.group.id}
              />}
          </div>
        );
    }
}

GroupBase.contextTypes = {
    router: React.PropTypes.object,
};

export default Radium(GroupBase);
