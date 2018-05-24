import React from 'react';
import './PersonStyle.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.8) {
        //throw new Error("Something went wrong");
    }
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change}/>
            <button onClick={props.delete}>delete</button>
        </div>
    );
};

export {person};
