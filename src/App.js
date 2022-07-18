import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import WelcomeScreen from './screens/WelcomeScreen';
import AuctionScreen from './screens/AuctionScreen';
import Entry from './screens/Entry';
import NotFound from './screens/NotFound';
import MyAuctions from './screens/MyAuctions';
import Auctions from './screens/Auctions';
import Settings from './screens/Settings';
import AdminNavigationBar from './components/AdminNavigatorBar';
import Resolve from './screens/admin/Resolve';

function App() {
  return (

    <BrowserRouter basename='/'>
      <main className='flex flex-row h-auto min-h-screen bg-gray-900'>
        {/* <NavigationBar />
        <Switch>
          <Route path='/' component={WelcomeScreen} exact />
          <Route path='/auctions/:id' component={AuctionScreen} />
          <Route path='/login' component={Entry} />
          <Route path='/myAuctions' component={MyAuctions} />
          <Route path='/auctions' component={Auctions} />
          <Route path='/settings' component={Settings} />
        </Switch> */}


        {/* <Route path='/404' component={NotFound} />
        <Redirect to='/404' /> */}

        <AdminNavigationBar />
        <Switch>
          <Route path='/resolve' component={Resolve} />
          <Route path='/login' component={Entry} />
          <Redirect to='/resolve' />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
