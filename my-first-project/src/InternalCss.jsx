import React from 'react';

const InternalCss = () => {
  const child ={
        color:"White",
        backgroundColor:"red",
    }
    return (
        <div>
            <h1 style={child}>There is always a way</h1>
        </div>
    );
};

export default InternalCss;