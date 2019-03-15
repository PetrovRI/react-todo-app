import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemAddForm from '../item-add-form/item-add-form';

import './app.scss';

export default class App extends Component {

    maxId = 0;

    state = {
        todoData: [
            this.createItem('Приготовить завтрак'),
            this.createItem('Сходить в магазин'),
            this.createItem('Практиковать React')
        ],
        term: '',
        filter: 'all'
    }

    createItem (label) {

        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id == id);
            const newArray = [
                ...todoData.slice(0, idx), 
                ...todoData.slice(idx + 1)
            ];
 
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {
        const newItem = this.createItem(text);
        
        this.setState(({todoData}) => {

            const newArr= [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        })
    }

    toggleProperty(arr, id, nameProp) {
        const idx = arr.findIndex((el) => el.id == id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem, 
            [nameProp]: !oldItem[nameProp]
        };
        
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')}
        })
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')}
        })
    };

    onSearchChange = (term) => {
        this.setState({term}) 
    }

    onFilterChange = (filter) => {
        this.setState({filter}) 
    }

    search(items, term) {
        if(term.length == 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1;
        })
    }

    filter(items, filter) {
 
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, term, filter} = this.state;
        const doneCount = todoData.filter((elem) => elem.done).length;
                    
        const visibleItems = this.filter(
            this.search(todoData, term), filter);
        const todoCount = todoData.length - doneCount;

        return (
            <div className="app">
                <div className="container">
                    <AppHeader todo = {todoCount} done = {doneCount}/>
                    <div className="search-container">
                        <SearchPanel
                        onSearchChange = {this.onSearchChange}/>
                        <ItemStatusFilter 
                        filter={filter}
                        onFilterChange = {this.onFilterChange}/>
                    </div>
                    <TodoList todos={visibleItems}
                        onDeleted = {this.deleteItem}
                        onToggleImportant = {this.onToggleImportant}
                        onToggleDone = {this.onToggleDone}/>
                    <ItemAddForm onItemAdded = {this.addItem}/>
                </div>
            </div>
        );
    }
}

