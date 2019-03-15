import React from 'react';

import './app-header.scss';

const AppHeader = ({todo, done}) => {
    return (
        <div className="header">
            <span className="header__item">Активных: {todo}</span>
            <span className="header__item">Выполненых: {done}</span>
        </div>

    )
}

export default AppHeader;