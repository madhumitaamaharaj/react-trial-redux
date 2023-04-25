import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const buttonData = useSelector((state) => state.buttonData);

  return (
    <table>
      <thead>
        <tr>
          <th>Button Name</th>
          <th>Click Count</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(buttonData).map((buttonName) => (
          <tr key={buttonName}>
            <td>{buttonName}</td>
            <td>{buttonData[buttonName].clickCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
