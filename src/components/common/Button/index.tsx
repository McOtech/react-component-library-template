import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className='btn btn-md btn-outline-success rounded'
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
