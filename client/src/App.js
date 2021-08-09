import './App.css';
import Chat from './components/Chat';
import io from "socket.io-client"
import React, { useEffect, useState } from "react"

function App() {
    const [socket, setSocket] = useState();
    
    // initialize socket connection
    useEffect(() => {
        setSocket(io("http://localhost:4000"));
	      console.log(`Connecting socket...`);
    }, [])

  return (
    <div className="App">
      <h1>app</h1>
      <Chat />
    </div>
  );
}

export default App;
