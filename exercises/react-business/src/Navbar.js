import React from 'react';

const Nav = () => {
        const styles = {
            'display': 'flex',
            'height': '50px',
            'flex-direction': 'row',
            // 'grid-columns': '3fr', 
            'justify-content': 'space-evenly',
            'background-color': '#d1e5e1',
            
            }
        return (
        <div className='navbar'>
            <ul style={styles}>
                <li>Home</li>
                <li>Info</li>
                <li>Products</li>
            </ul>
        </div>
    )
}
export default Nav