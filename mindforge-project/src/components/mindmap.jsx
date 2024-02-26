import React from 'react';
import Tree from 'react-d3-tree';
import NodeLabelComponent from './NodeLabelComponent';
import './MindMap.css';

const MindMap = () => {
  const containerWidth = '100%';
  const containerHeight = 500;
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const translate = { x: centerX, y: centerY };

const myTreeData = {
  name: 'Root',
  children: [
    {
      name: 'Node 1',
      children: [
        { name: 'Leaf 1',customProperty: 'value1' },
        { name: 'Leaf 2',customProperty: 'value1'},
      ],
    },
    
    {
      name: 'Node 2',
      children: [
        { name: 'Leaf 3',customProperty: 'value1' },
        { name: 'Leaf 4',customProperty: 'value1' },
      ],
    },
  ],
};

const customNodeStyles = {
  shape: 'circle',
  shapeProps: {
    className: 'node-circle', // Apply the node styles
    r: 10, // radius
  },
};


return (
  <div className="mind-map-container">
    <Tree
      data={myTreeData}
      translate={translate}
      nodeSvgShape={customNodeStyles}
      separation={{ siblings: 0.5, nonSiblings: 0.5 }} // Adjust separation between nodes
      orientation="vertical"
      pathFunc="straight"
      collapsible={false} // Disable collapsing nodes for simplicity
      zoomable={false} // Disable zooming for simplicity
      nodeLabelComponent={{
        render: <NodeLabelComponent />,
        foreignObjectWrapper: {
          y: 24, // Adjust vertical position of text
        },
      }}
      styles={{ links: 'link', nodes: 'tree-container', texts: 'node-text' }}
    />
  </div>
);
};

export default MindMap;