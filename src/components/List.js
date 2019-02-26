import React, { Component, Fragment } from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
}
from 'react-sortable-hoc';
import { connect } from 'react-redux';
import { listItems, createItem, updateSortOrder } from '../actions/items.actions';

const SortableItem = SortableElement(({ value }) => <div className='item-div'>{value.name}</div>);

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

  constructor(props){
    super(props);
    this.addItemButtonClick = this.addItemButtonClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.state = {
      inputValue: null,
    }
  }

  componentDidMount() {
    const { listItems } = this.props;
    listItems();
  }

  inputChange = (event) => {
    this.setState({inputValue: event.target.value});
  }

  addItemButtonClick = (event) => {
    const { createItem, listItems, items } = this.props;
    debugger
    const sort_number = items[items.length -1] ? (items[items.length -1].sort_number + 1) : 0
    debugger
    createItem(this.state.inputValue, sort_number)
    .then(() => listItems());
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const {items, updateSortOrder} = this.props;
    debugger
    const newItemArray = arrayMove([...items], oldIndex, newIndex);
    debugger
    updateSortOrder( oldIndex, newIndex, newItemArray);
    debugger
  };

  render() {
      const { items } = this.props;
      return (
      <Fragment>
        <h4>ToDo</h4>
        <div className='input-div'>
          <input type='text' onChange={this.inputChange} />
          <button onClick={this.addItemButtonClick}>Add</button>
        </div>
        <SortableList items={items} onSortEnd={this.onSortEnd.bind(this)} />
      </Fragment>
      )
  }
}

const mapStateToProps = (state) => {
  const { items } = state.items;
  return { items };
}

export default connect(mapStateToProps, { listItems, createItem, updateSortOrder })(List);