import React from 'react';
import _ from 'lodash';
import ListItem from './ListItem';

class List extends React.Component {
    get objects() {
        return [];
    }
    get title() {
        return '';
    }
    render() {
        return (
          <div>
            <h3>{this.title}</h3>
            <ul>
              {_.map(this.objects, object => <ListItem key={object.id} {...object} />)}
            </ul>
          </div>
        );
    }
}


export default List;
