import React, {Suspense} from 'react';
import './Theme/App.css';
import { AuthenticationState } from './Components/authentication'
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Loading from './Components/loading';
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
  <Suspense fallback={Loading}>
     <ThemeProvider theme={theme}>
     { authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
     <Loading/>
     </ThemeProvider>
  </Suspense>
  );
}

const mapStateToProps = (state: AppProps) => ({
  ...state
})


const connectedApp = connect(mapStateToProps)(App)
export default connectedApp;
