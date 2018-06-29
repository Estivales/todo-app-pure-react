import React from 'react'


export default props => (
    <nav className='navbar navbar-expand navbar-dark bg-dark'>

        <a className='navbar-brand' href='#'><i className='fa fa-calendar-check-o'></i> TodoApp</a>

        <div className='collapse navbar-collapse' id="navbars">
            <ul className='navbar-nav mr-auto'>
                <li className='nav-item' ><a class="nav-link" href='#/todos'>Tarefas</a></li>
                <li className='nav-item' ><a class="nav-link" href='#/about'>Sobre</a></li>
            </ul>
        </div>
    </nav>
)