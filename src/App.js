import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import WelcomeScreen from './screens/WelcomeScreen';
import AuctionScreen from './screens/AuctionScreen';
import Entry from './screens/Entry';
import NotFound from './screens/NotFound';
import Auctions from './screens/Auctions';
import Settings from './screens/Settings';
import AdminNavigationBar from './components/AdminNavigatorBar';
import Resolve from './screens/admin/Resolve';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAuctionsScreen from './screens/MyAuctionsScreen';

function App() {

  return (

    <BrowserRouter basename='/'>
      {localStorage.getItem('userInfo') && JSON.parse(localStorage.getItem('userInfo')).role != 'ADMIN' ?
        <main className='flex flex-row h-auto min-h-screen bg-gray-900 scrollbar-none'>
          <NavigationBar />
          <Switch>
            <Route path='/' component={WelcomeScreen} exact />
            <Route path='/auctions/:id' component={AuctionScreen} />
            <Route path='/entry' component={Entry} />
            <Route path='/myAuctions' component={MyAuctionsScreen} />
            <Route path='/auctions' component={Auctions} />
            <Route path='/settings' component={Settings} />
            <Route path='/404' component={NotFound} />
            <Redirect to='/404' />
          </Switch>

          <ToastContainer
            position='bottom-right'
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />
        </main> :
        <main className='flex flex-row h-auto min-h-screen bg-gray-900 scrollbar-none'>
          <AdminNavigationBar />
          <Switch>
            <Route path='/resolve' component={Resolve} />
            <Route path='/entry' component={Entry} />
            <Redirect to='/resolve' />
          </Switch>
        </main>
      }


    </BrowserRouter>
  );
}

export default App;
