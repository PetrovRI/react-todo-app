import React, {Component} from 'react';

import './item-status-filter.scss';


export default  class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'Все' },
        {name: 'active', label: 'Активные' },
        {name: 'done', label: 'Завершенные' },
    ]

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const activeBtn = filter === name;
            const clazz = activeBtn ? 'btn--active' : 'btn'

            return(
                <button type="button" 
                        className={`btn btn--status ${clazz}`}
                        key={name}
                        onClick={() => onFilterChange(name)}>
                    {label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
