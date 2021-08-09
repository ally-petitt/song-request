import './App.css';
import Chat from './components/Chat';
import io from "socket.io-client"
import React, { useEffect, useState } from "react"
import JoinGroup from './components/JoinGroup';

function App() {
    const [socket, setSocket] = useState();
    const [code, setCode] = useState();
    
    // initialize socket connection
    // useEffect(() => {
    //     setSocket(io("http://localhost:4000"));
	  //     console.log(`Connecting socket...`);
    // }, [])

  return (
    <div className="App">
      <JoinGroup onCodeSubmit={setCode} />
      {code}
    </div>
  );
}

export default App;
