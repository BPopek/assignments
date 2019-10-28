import React from 'react';

const Footer = () => {
    const styles = {
        display: 'flex',
        height: '50px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#d1e5e1',
    }
    return (
        <div className='footer'>
            <ul style={styles}>
                <li>Phone (800)588-3647</li>
                <li>123 Main Street Dogville, USA</li>
            </ul>
        </div>
    )
}
export default Footer

