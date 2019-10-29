import React from 'react';

const Nav = () => {
        const styles = {
            'display': 'flex',
            'height': '50px',
            'flex-direction': 'row',
            'justify-content': 'space-evenly',
            'background-color': '#d1e5e1',
            fontSize: '20px',
            fontWeight: 'bold',
            
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