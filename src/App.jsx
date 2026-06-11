import React from 'react'

import Read from './components/Read.jsx';
import Create from  './components/Create.jsx'


const App = () => {



  const [todos,settodos] = React.useState([
    {
      id:1,
      title:"kaam krr lee",
      iscompleted:false,
    }
  ]);
  return (
    <div className="text-white flex  w-screen h-screen bg-gray-800 colour-white">
       <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
     
    </div>
  )
}


export default App
