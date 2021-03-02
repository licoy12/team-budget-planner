import React from 'react';

function Header({totalIncome}) {
    return (
        <div className="topnav">
            <h1>Team Budget Planner</h1>
            <a class="active" href="/">Manager</a>
            <a href="">Finance</a>
            <div className="total-income">Total: ${totalIncome}</div>
        </div>
        
    )
}

export default Header;
