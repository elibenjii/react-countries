import React, { useState } from 'react';

const Count = ({
  count, setCount
}) => {

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Count