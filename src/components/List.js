import React, { Component } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { listItems } from '../actions/items.actions';

const SortableItem = SortableElement(({ value }) => <div className='item-div'>{value}</div>);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class List extends Component {

  componentDidMount(){
    const { listItems } = this.props;
    listItems();
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => {
      return {
        items: arrayMove(items, oldIndex, newIndex),
      }
    });
  };
  render() {
    const { items } = this.props;
    return <SortableList items={items} onSortEnd={this.onSortEnd.bind(this)} />;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { listItems })(List);