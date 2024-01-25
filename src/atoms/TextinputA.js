import React from 'react';
import "../asset/css/atom/textinputA.css"
const TextinputA = (props) => {
  const { onChange = () => {} } = props;
  return (
    <div className="textinput-container">
      <label  className={`textinput-text-heder ${props.className1}`}>{props.label} </label>
      <input
        {...props}
        style={{ width: '450px', height: '2.5rem' }}
        type="text"
        value={props.value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className={`form-control_text_input  ${props.className}`}
      />
    </div>
  );
}

export default TextinputA;
