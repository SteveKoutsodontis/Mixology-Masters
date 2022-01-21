import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import LandingPage from './pages/LandingPage';
import Home from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav/index.js';
import Footer from './components/Footer'
import Header from './components/Header'
// import Cart from './Cart/index';
// import { StoreProvider } from './utils/GlobalState';
// import Success from './pages/Success/index.js';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header/>
          <Nav />
          <div className= "content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            {/* <Route exact path="/Cart">
                  <Cart/>
                </Route> */}
            {/* <Route exact path="/success" component={Success} /> */}
            {/* <Route exact path="/products/:id" component={Detail} /> */}
            {/* <Route component={NoMatch} /> */}

            
          </Switch>
          </div>
        </div>
      </Router>
      <Footer />

    </ApolloProvider>
  );
}

export default App;
