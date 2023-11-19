import React, { useRef } from 'react';
import useRipple from './use-ripple';

const Button = () => {
  //create a ref to reference the button
  const ref = useRef<HTMLButtonElement>(null);
  //pass the ref to the useRipple hook
  const ripples = useRipple(ref);
  return (
    <button
      ref={ref}
      style={{
        padding: 16,
        backgroundColor: '#1e293b',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {ripples}
      Button
    </button>
  );
};

export default Button;
