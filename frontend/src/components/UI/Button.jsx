import React from 'react';

const Button = ({ text, onClick, className="" }) => {
     return (
          <div>
               <button className={className} onClick={onClick}>{text}</button>
          </div>
     );
}

export default Button;
