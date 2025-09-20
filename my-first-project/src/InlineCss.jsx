import React from 'react';

const InternalCss = () => {
    // <style>
    //     .int
    // </style>
    const int ={
        backgroundColor:'yellow',
        color:"red",
        margin:"10px",
        padding:"10px",

    }
    return (
       <div>
  <h1 classname="int" style={int}>My Inline Css Practice</h1>
  <p style={{backgroundcolor: "red"}}>Ox Cart Man
By Donald Hall
In October of the year,
he counts potatoes dug from the brown field,   
counting the seed, counting   
the cellar’s portion out,   
and bags the rest on the cart’s floor.

He packs wool sheared in April, honey
in combs, linen, leather   
tanned from deerhide,   
and vinegar in a barrel
hooped...</p>
</div>

    );
};

export default InternalCss;