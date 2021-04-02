
import React from 'react'

const Messages = ({ messages }) => {
    return (
        <div>
            {messages.map((message) => (
                <div>
                    <span>{message.level}: </span>
                    <span>{message.message}</span>
                </div>
            ))}
        </div>
    )
};

export default Messages