import React from "react";

const AppInput = (props) => {
  const { className, placeholder, onChange, value } = props;
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

export default AppInput;
