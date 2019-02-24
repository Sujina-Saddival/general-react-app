import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  SortableContainer,
  SortableElement,
  arrayMove,
} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <div className='item-div'>{value}</div>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    };
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    debugger
    this.setState(({items}) => {
      debugger
      return {
      items: arrayMove(items, oldIndex, newIndex),
    }});
    debugger
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd.bind(this)} />;
  }
}

export default Card;