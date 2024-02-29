import React from 'react';
import Tree from 'react-d3-tree';

const myTreeData = {
  name: 'Root',
  children: [
    {
      name: 'Node 1',
      attributes: {
        description: 'This is Node 1',
      },
      children: [
        { name: 'Leaf 1', attributes: { type: 'Leaf' } },
        { name: 'Leaf 2', attributes: { type: 'Leaf' } },
      ],
    },
    {
      name: 'Node 2',
      attributes: {
        description: 'This is Node 2',
      },
      children: [
        { name: 'Leaf 3', attributes: { type: 'Leaf' } },
        { name: 'Leaf 4', attributes: { type: 'Leaf' } },
      ],
    },
    {
      name: 'Node 3',
      attributes: {
        description: 'This is Node 3',
      },
      children: [
        { name: 'Leaf 5', attributes: { type: 'Leaf' } },
        { name: 'Leaf 6', attributes: { type: 'Leaf' } },
      ],
    },
  ],
};

const MindMap = () => {
  const nodeSvgShape = {
    shape: 'circle',
    shapeProps: {
      r: 10,
      fill: 'lightblue',
    },
  };

  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 20,
      height: 20,
      fill: 'lightgreen',
    },
  };

  const nodeLabelStyle = {
    fontSize: '0.8em',
    fill: 'white',
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Tree
        data={myTreeData}
        orientation="horizontal"
        translate={{ x: 200, y: 250 }}
        nodeSvgShape={nodeSvgShape}
        separation={{ siblings: 2, nonSiblings: 2 }}
        nodeLabelComponent={{
          render: <span style={nodeLabelStyle} />,
          foreignObjectWrapper: {
            width: 200,
            x: 12,
          },
        }}
      />
    </div>
  );
};

export default MindMap;
