import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'
import {changeColorShade} from "./util";

const Button = (props) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const colors = {
        background: props.colors && props.colors.background ? props.colors.background : '#5938fb',
        color: props.colors && props.colors.color ? props.colors.color : '#ffffff',
        boxShadow:  props.colors && props.colors.boxShadow ? props.colors.boxShadow : '#888888',
    };
    colors.hoverBackground = props.colors && props.colors.hoverBackground ? props.colors.hoverBackground : changeColorShade(colors.background , 20);
    colors.clickedBackground = props.colors && props.colors.clickedBackground ? props.colors.clickedBackground : changeColorShade(colors.background , -20);

    const btnStyles = {
        padding: '10px 20px',
        margin: '10px 20px',
        color: colors.color,
        border: 'none',
        outline: 'none',
        cursor: hovered ? 'pointer' : 'auto',
    };

    const hoverAnimation = useSpring({
        transform: hovered ? clicked ? 'scale(1.1)' : 'scale(1.22)' : 'scale(1)',
        borderRadius: hovered ? clicked ? '7px' : '10px' : '5px',
        boxShadow: hovered ? clicked ? `3px 3px 8px ${colors.boxShadow}` : `5px 5px 8px ${colors.boxShadow}` : `1px 1px 8px ${colors.boxShadow}`,
        background: hovered ? clicked ? colors.clickedBackground : colors.hoverBackground : colors.background,
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
                setClicked(false);
                if (props.events && props.events.onMouseOut) props.events.onMouseOut();
            }}
            onMouseDown={(e) => {
                setClicked(true);
                if (props.events && props.events.onMouseDown) props.events.onMouseDown();
            }}
            onMouseUp={(e) => {
                setClicked(false);
                if (props.events && props.events.onMouseUp) props.events.onMouseUp();
            }}
        >
            {props.children}
        </animated.button>
    );
};

export default Button;