import React from 'react';
import Radium from 'radium';

@Radium
class ViewDocument extends React.Component {
    componentDidMount() {
        let url = '/groups/:groupId/docs/:id';
        url = _.replace(url, ':groupId', this.props.params.groupId);
        url = _.replace(url, ':id', this.props.params.id);
        $.get(url, {}, doc => { this.setState(doc) });
    }
    get url() {
        return _.replace('/docs/:id', ':id', this.props.params.id)
    }
    get styles() {
        return {
            base: {
            },
        };
    }
    render() {
        return (
          <div style={this.styles.base}>
            <h2>{this.state.title}</h2>
            <h4>{this.state.description}</h4>
            <h4><a href={this.url} target="_blank" rel="noopenner noreferrer">View</a></h4>
          </div>
        );
    }
}

export default ViewDocument;
