import './App.css';
import Chat from './components/Chat';
import io from "socket.io-client"
import React, { useEffect, useState } from "react"
import {BrowserRouter as Router,Route, Redirect, useHistory} from 'react-router-dom';


import JoinGroup from './components/JoinGroup';
import AdminDashboard from './components/admin/AdminDashboard';
import MemberDashboard from './components/member/MemberDashboard';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    const [socket, setSocket] = useState();
    const [code, setCode] = useLocalStorage("code");
    const [isAdmin, setIsAdmin] = useLocalStorage("isAdmin", false)

    const history = useHistory();
    
    // initialize socket connection
    useEffect(() => {
        // setSocket(io("http://localhost:4000"));
	      // console.log(`Connecting socket...`);
    }, []) 

    // redirect to correct pages
    const redirectToDashboard = () => {
      console.log("redirect")
      if (isAdmin) {
        return ( <Redirect to={`../${code}/admin/dashboard`} />)
      } else {
        return ( <Redirect to={`../${code}/member/dashboard`} />)
      }
    }

    console.log(code)

  return (
    <Router >
      <div className="App">
        {code ? redirectToDashboard() : <Redirect to="/join/group" />}

          {/* routes */}
          {/* redirect to join page if url is invalid */}
          <Route render={() => <Redirect to={{pathname: "/join/group"}} />} />
          <Route path="/join/group">
            <JoinGroup onCodeSubmit={setCode} setIsAdmin={setIsAdmin} />
          </Route>
          <Route path="/:code/member/dashboard" component={MemberDashboard} />
          <Route path="/:code/admin/dashboard" component={AdminDashboard} />
      </div>
    </Router>
  );
}

// TODO: add routing

export default App;
