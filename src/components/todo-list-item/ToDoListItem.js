import React, { Component } from 'react'
import '../../styles/todo-list-item.css'

export default class ToDoListItem extends Component {

    constructor(){
        super()

        this.state = {
            done: false,
            important: false
        }
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({important}) => { //if async state
            return {
                important: !important
            }
        })
    }

    render() {
        const {label} = this.props
        const { done, important } = this.state;

        // const style = {
        // color: important ? "steelblue" : "black",
        // fontWeight: important ? "bold" : "normal",
        // }

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'
        }
        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames} >
                <span 
                    className='todo-list-item-label'
                    onClick={this.onLabelClick.bind(this)}>
                     { label }
                </span>

             <button 
                type="button" 
                className="btn btn-outline-success"
                onClick={this.onMarkImportant}>
                    Important
             </button>
             <button 
                type="button" 
                className="btn btn-outline-danger"
                onClick={this.props.onDeleted}>
                    Delete
             </button>
         </span>
    )
    }
}
