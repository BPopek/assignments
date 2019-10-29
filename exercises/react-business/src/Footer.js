import React from 'react';

const Footer = () => {
    const styles = {
        display: 'flex',
        padding: '10px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#d1e5e1',
        fontSize: '16px',
        fontWeight: 'bold',
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

