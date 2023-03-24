import React from 'react';
import {debugData} from "../utils/debugData";
import Main from './Main';

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: 'setVisible',
    data: true,
  }
])

const App: React.FC = () => {
  return (
    <Main />
  );
}

export default App;
