import React, {useState} from 'react';
import generateRandom from './helpers';
import './EightBall.css';

const EightBall = (({answers}) => {
    const [eightBall, setEightBall] = useState(
                                    { msg: "Think of a Question", color: "black" }
                                    );
    return (
        <>
            <div className="EightBall" style={{backgroundColor: eightBall.color}}>
                <p>
                {eightBall.msg}
                </p>
                </div>
            <button onClick={() => setEightBall(generateRandom(answers))}className="EightBall__btn">Click me</button>
        </>
    );
});

export default EightBall;