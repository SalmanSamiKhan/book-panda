import React from 'react'
import Alert from 'react-bootstrap/Alert';

function MessageBox(props) {
    const { variant, msg } = props
    return (
        <Alert key={variant} variant={variant || 'info'}>
            {msg || props.error }
        </Alert>
    )
}

export default MessageBox