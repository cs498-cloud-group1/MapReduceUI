import React from 'react';

const Result = props => {
  const { resultId } = props.match.params;

  return (
    <div>{`Welcome to Result page ${
      resultId ? `for result ${resultId}` : ''
    }`}</div>
  );
};

export default Result;
