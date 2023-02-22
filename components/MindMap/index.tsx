import React from "react";
import Tree from "react-d3-tree";

const MindMap = ({ data }) => {
  const containerStyles = {
    width: "100%",
    height: "600px",
  };

  const translate = {
    x: 50,
    y: 300,
  };

  return (
    <div style={containerStyles}>
      <Tree data={data} translate={translate} />
    </div>
  );
};

export default MindMap;
