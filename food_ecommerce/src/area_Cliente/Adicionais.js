import React, { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Checkbox
      </label>

      {isChecked ? <div>O checkbox está marcado!</div> : <div>O checkbox não está marcado.</div>}
    </div>
  );
}

export default CheckboxExample;
