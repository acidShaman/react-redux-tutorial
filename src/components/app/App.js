import React, { Component } from 'react';
import '../../styles/app.css';
import Header from '../header'
import ToDoList from '../todo-list'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'

export default class App extends Component {

  maxId = 100

  state = {
    toDoData: [
      {id: 1, label: 'Drink cofee', important: false},
      {id: 2, label: 'Sve the World!', important: true},
      {id: 3, label: 'Do smth else!', important: false}
    ]
  }

  deleteItem = (id) => {
    this.setState(({toDoData}) => {
      const index = toDoData.findIndex((el) => el.id === id)
      const newArray = [...toDoData.slice(0, index), ...toDoData.slice(index + 1)]
      return {
        toDoData: newArray
      }
    })
  }

  addItem = (text) => {
    console.log('Added', text)

    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    } 

    this.setState(({toDoData}) => {
      const newData = [...toDoData, newItem]
      return {
        toDoData: newData
      }
    })


  }

  render () {
    return (
      <div>
        <Header done={3} toDo={2}/>
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList 
          todos={this.state.toDoData} 
          onDeleted={this.deleteItem}
        />

        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }

}
