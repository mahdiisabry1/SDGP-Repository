// NodeLabelComponent.js

import React from 'react';

const NodeLabelComponent = ({ nodeData }) => {
  return (
    <text x="0" y="0" textAnchor="middle" fill="#555" fontSize="12px">
      {nodeData.name}
    </text>
  );
};

export default NodeLabelComponent;
