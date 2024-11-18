import React from "react";

type ButtonProps = {
    onclick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({onclick, label}) => {
    return (
      <button
      type="submit"
      onClick={onclick}
      style={{
          padding: '8px 16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
      }}
      >
          {label}
      </button>
    );
};

export default Button;