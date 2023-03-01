import React, { useEffect } from 'react';
import Component1 from './Component1'
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component41 from './Component41';
import Component5 from './Component5';

const Components = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Component1 />
      <Component2/>
      <Component3/>
      <Component4/>
      <Component41/>
      <Component5/>
    </div>
  )
}

export default Components