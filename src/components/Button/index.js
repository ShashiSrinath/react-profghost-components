import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'

const Button = (props) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const btnStyles = {
        padding: '10px 20px',
        background: '#5938fb',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: hovered ? 'pointer' : 'auto',
    };

    const hoverAnimation = useSpring({
        transform: hovered ? clicked ? 'translateZ(0) scale(1.1)' : 'translateZ(0) scale(1.2)' : 'translateZ(0) scale(1)',
        borderRadius: hovered ? '15px' : '5px',
        boxShadow: hovered ? clicked ? '3px 3px 8px #888888' : '5px 5px 8px #888888' : '1px 1px 8px #888888',
    });

    return (
            <animated.button
                style={{...btnStyles, ...props.styles, ...hoverAnimation}}
                className={props.className}

                {...props.events}
                onClick={props.onClick ? props.onClick : props.events && props.events.onClick ? props.events.onClick : undefined}
                onMouseEnter={() => {
                    setHovered(true);
                    if (props.events && props.events.onMouseEnter) props.events.onMouseEnter();
                }}
                onMouseOut={() => {
                    setHovered(false);
                    if (props.events && props.events.onMouseOut) props.events.onMouseOut();
                }}
                onMouseDown={() => {
                    setClicked(true);
                    if (props.events && props.events.onMouseDown) props.events.onMouseDown();
                }}
                onMouseUp={() => {
                    setClicked(false);
                    if (props.events && props.events.onMouseUp) props.events.onMouseUp();
                }}
            >
                {props.children}
            </animated.button>
    );
};

export default Button;