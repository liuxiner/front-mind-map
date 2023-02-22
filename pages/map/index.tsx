import React, { FC } from "react";
import MindMap from "components/MindMap";

interface Node {
  name: string;
  children?: Node[];
}

const data: Node = {
  name: "Mind Map",
  children: [
    {
      name: "Level 1 Node 1",
      children: [
        {
          name: "Level 2 Node 1",
        },
        {
          name: "Level 2 Node 2",
        },
      ],
    },
    {
      name: "Level 1 Node 2",
      children: [
        {
          name: "Level 2 Node 3",
          children: [
            {
              name: "Level 3 Node 1",
            },
          ],
        },
      ],
    },
  ],
};

const Home: FC = () => {
  return (
    <div>
      <h1>My Mind Map App</h1>
      <MindMap data={data} />
    </div>
  );
};

export default Home;
