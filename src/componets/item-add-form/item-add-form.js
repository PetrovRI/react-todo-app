import React, {Component} from 'react';

import './item-add-form.scss';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLableChange = (e) => {
        this.setState(
            {label: e.target.value}
            )
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.label === '') return alert('необходимо ввести название задачи');
        this.props.onItemAdded(this.state.label)
        this.setState({label: ''})
    }
    
    render() {
        return (
                <form className="add-form" onSubmit={this.onSubmit}>

                    <input className="add-form__input" 
                        type="text" 
                        onChange={this.onLableChange}
                        placeholder="напишите задачу"
                        value={this.state.label}/>
                    
                    <button className="add-form__btn btn">Добавить</button>
                </form> 
        )
    }
}