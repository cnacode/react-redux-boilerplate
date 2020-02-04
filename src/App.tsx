import React from 'react';
import './App.css';
const AuthenticatedApp = React.lazy(() => import('./Pages/authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./Pages/unauthenticated-app'))

export type AppProps = {
  authentication: {
    authenticated: boolean,
  }
}

const App = ({authentication: { authenticated }}: AppProps) => {
  return authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
