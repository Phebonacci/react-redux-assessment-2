import React from 'react';

const Dropdown = ({ id, value, options, placeholder, onSelect }) => {
  const renderOption = (option) => {
    return (
      <option
        key={option.value}
        value={option.value}>
          {option.name}
      </option>
    )
  };

  return (
    <select
      id={id}
      value={value}
      onChange={e => onSelect(e.target.value)}
      className="ui fluid normal dropdown">
      { placeholder && renderOption({ name: placeholder, value: '' }) }
      { options.map(renderOption) }
    </select>
  );
};

export default Dropdown;
