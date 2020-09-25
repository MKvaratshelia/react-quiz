import React from 'react';
import './Input.css';

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const InputType = props.type || 'text';
  const cls = ['Input'];
  const htmlFor = `${InputType}-${Math.random()}`;

  if (isInvalid(props)) {
    cls.push('invalid');
  }
  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={InputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      ></input>

      {isInvalid(props) ? (
        <span>{props.errorMessage || 'Введите верное значени'}</span>
      ) : null}
    </div>
  );
};

export default Input;
