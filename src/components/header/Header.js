import React from 'react';
import '../../styles/header.css'

const Header = ({done, toDo}) => {
    return (
        <div className="app-header d-flex">
            <h1>My todo list</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

export default Header;