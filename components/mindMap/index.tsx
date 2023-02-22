import React, { FC } from "react";
import Tree, { TreeProps } from "react-d3-tree";

interface MindMapProps {
  data: object;
}

const MindMap: FC<MindMapProps> = ({ data }) => {
  const containerStyles: React.CSSProperties = {
    width: "100%",
    height: "600px",
  };

  const translate: TreeProps["translate"] = {
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
