
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import Details from './components/Details';
import ErrorPage from './components/ErrorPage';


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads..(dynamic IF statement of react)
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS>>>>', authUser);

      if(authUser) {
        //the user just logged in Or the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        //user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
      
        <Routes>
          <Route exact path= "/login" element={(
              <>
                <Login />
              </>
            )}
          />
          <Route exact path="/checkout" element={(
            <>
              <Header />
              <Checkout />
            </>
            )}
          />
          <Route exact path="/payment" element={(
            <>
              <Header />
              <Payment />
            </>
          )}
          />
          <Route exact path="/details" element={(
            <>
              <Header />
              <Details />
            </>
          )}/>
          <Route exact path="/" element={(
            <>
              <Header />
              <Home/>
            </>
          )} 
          />
          <Route path="*" element={(
            <>
              <ErrorPage />
            </>
          )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
