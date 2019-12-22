<div align="center">
    <p align="center">
            <img src="https://raw.githubusercontent.com/profghost/react-profghost-components/master/src/assets/logo/logo-with-background.png" alt="React Hook Form Logo - React hook custom hook for form validation" width="300px" />
    </p>
</div>

<p align="center">Fluid , Animated , Good Looking Components to use with react</p>

<a href='https://www.npmjs.com/package/react-profghost-components'>
 <img src="https://img.shields.io/npm/dm/react-profghost-components?style=flat-square)(https://www.npmjs.com/package/react-profghost-components" />
</a>
<a href="https://www.npmjs.com/package/react-profghost-components" >
 <img src="https://img.shields.io/bundlephobia/minzip/react-profghost-components?style=flat-square)(https://www.npmjs.com/package/react-profghost-components" />
</a>

![Twitter Follow](https://img.shields.io/twitter/follow/ShashiSrinath?style=social)

## Features

- high quality fluid animations
- customizable

## Install

    $ npm install react-profghost-components

## Example

<h3>Button</h3>

```jsx
import React from 'react';
import  {Button} from 'react-profghost-components';

const App = () => {

const colors = {
        boxShadow: '#101010',
        background: '#ffaaaa',
        color: '#ffffff',
        
        //below values will generate automatically based on background color if not provided
        hoverBackground: '#ffffff',
        clickedBackground: '#ffffff'
    };

const events = {
    onMouseDown: () => console.log('mouse pressed') 
}

  return (
        <Button> Click Me! </Button>

        <Button onClick={() => console.log('clicked')}> Click Me! </Button>

        <Button colors={colors}> Click Me! </Button>

        <Button events={events}> Click Me! </Button>
  );
}
```