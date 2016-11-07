import React from 'react';
import AltContainer from 'alt-container';

class StoreContainer extends React.Component {
    get stores() {
        return [];
    }
    get actions() {
        return [];
    }
    render() {
        return (
          <AltContainer stores={this.stores} actions={this.actions}>
            {this.props.children}
          </AltContainer>
        );
    }
}
