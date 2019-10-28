import React from 'react'

const App() => {
    const styles = {
        display: 'flex',
    }
    const h1Styles = {
        color: '#666',
    }
    const greeting = 'hello world'
    return (
        <div style={styles}>
            <h1>{greeting}</h1>
        </div>
    );
}


