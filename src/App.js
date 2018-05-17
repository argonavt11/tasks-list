// @flow

import React from 'react';
import TasksList from "./component";

const data = [
  {
    id: 0,
    name: "Jon",
    timeLine: [
      {
        start: "120000",
        end: "150000"
      },
      {
        start: "170000",
        end: "174500"
      }
    ]
  },
  {
    id: 1,
    name: "Bob",
    timeLine: [
      {
        start: "091000",
        end: "112000"
      }
    ]
  },
  {
    id: 2,
    name: "Kate",
    timeLine: [
      {
        start: "142000",
        end: "190000"
      }
    ]
  }
];

class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <TasksList tasks={data} />
      </div>
    );
  }
}

export default App;