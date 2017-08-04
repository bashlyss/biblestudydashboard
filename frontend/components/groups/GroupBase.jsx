import React from 'react';
import Radium from 'radium';
import GroupHeaderLink from './GroupHeaderLink';
import GroupActions from '../../actions/GroupActions';
import $ from 'jquery';

@Radium
class GroupBase extends React.Component {
    componentDidMount() {
        GroupActions.fetch();
    }
    get styles() {
        return {
            header: {
                background: '#a1a6b4',
                marginBottom: '15px',
                padding: '5px',
            },
        }
    }
    get linkAddDocument() {
        return _.replace('/mygroups/:groupid/document/', ':groupid', this.props.params.groupId);
    }
    get linkGroupHome() {
        return _.replace('/mygroups/:groupid/', ':groupid', this.props.params.groupId);
    }
    get linkCloseGroup() {
        return _.replace('/groups/:groupId', ':groupId', this.props.params.groupId);
    }
    navigateHome() {
        this.context.router.push('/');
    }
    resetActive() {
        this.setState({ active: true });
    }
    render() {
        return (
          <div>
            <div style={this.styles.header}>
              <GroupHeaderLink to={this.linkGroupHome} name="Group Home" />
              <GroupHeaderLink to={this.linkAddDocument} name="Add Document" />
              { this.state.isOwner && this.state.active &&
              <GroupHeaderLink
                to={this.linkCloseGroup}
                name="Close Group"
                api
                type="DELETE"
                onComplete={this.navigateHome.bind(this)}
              />}
              { this.state.isOwner && !this.state.active &&
              <GroupHeaderLink
                to={this.linkCloseGroup}
                name="Enable Group"
                api
                type="PUT"
                data={{activate: true}}
                onComplete={this.resetActive.bind(this)}
              />}
            </div>
            <div>
              {this.props.children}
            </div>
          </div>
        );
    }
}
GroupBase.contextTypes = {
    router: React.PropTypes.object,
}

export default GroupBase;
