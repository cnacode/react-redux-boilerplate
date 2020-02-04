import React, {Suspense} from 'react';
import './App.css';
import { AuthenticationState } from './Components/authentication'
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';


const AuthenticatedApp = React.lazy(() => import('./Pages/authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./Pages/unauthenticated-app'))


export type AppProps = {
  authentication?: AuthenticationState,
  theme: any,
}


const App = (props: AppProps) => {
  const authenticated = (props && props.authentication && props.authentication.authenticated) ? props.authentication.authenticated : false;
  
  return (
  <Suspense fallback={<div>Loading...</div>}>
     <ThemeProvider theme={theme}>
     { authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
     </ThemeProvider>
  </Suspense>
  );
}

const mapStateToProps = (state: AppProps) => ({
  ...state
})


const connectedApp = connect(mapStateToProps)(App)
export default connectedApp;
