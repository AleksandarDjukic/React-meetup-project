import {Route,  Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <AllMeetupsPage/>
            </Route>
            <Route path="/new-meetup">
              <NewMeetupPage/>
            </Route>
            <Route path="/favorites">
              <Favorites/>
            </Route>
          </Switch>
        </Layout>
    </div>
  );
}

export default App;
