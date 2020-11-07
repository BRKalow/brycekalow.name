import React from 'react';

export const ToggleSwitch = ({ onChange, checked = false, label }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, checked: boolean, label: string }) => (
  <>
    <style jsx>{`
      .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        transition: all 0.3s;
        vertical-align: middle;
        cursor: pointer;
      }
      .switch::after {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: white;
        top: 1px;
        left: 1px;
        transition: all 0.3s;
      }

      .checkbox:checked + .switch::after {
        left: 20px;
      }
      .checkbox:checked + .switch {
        background-color: #7983ff;
      }
      .checkbox {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      .checkbox:focus + .switch {
        outline: 1;
      }
    `}</style>
    <input type="checkbox" id="toggle" className="checkbox" onChange={onChange} checked={checked} aria-label={`toggle for ${label}, currently ${checked ? 'active' : 'disabled'}`}/>
    <label htmlFor="toggle" className="switch" />
  </>
);

export default ToggleSwitch;
