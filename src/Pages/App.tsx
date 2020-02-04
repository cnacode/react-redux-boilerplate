import React, { FC, Suspense} from 'react';
import '../Theme/App.css';
import { AuthenticationState } from '../Components/authentication'
import { connect } from 'react-redux';
import { ThemeProvider } from 'emotion-theming'
import {IntlProvider, IntlConfig} from 'react-intl';
import Loading from '../Components/loading';
import theme from '../Theme';


const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))


export type AppProps = {
  authentication: AuthenticationState,
  theme: any,
  i18n: IntlConfig,
}


const App: FC<AppProps> = (
  {
  authentication: {
    authenticated = false, 
    inProgress = false,
  },
  i18n: {locale}
}) => {
  if(inProgress) return <ThemeProvider theme={theme}><Loading/></ThemeProvider>;

  return (
  <Suspense fallback={Loading}>
    <IntlProvider locale={locale}>
      <ThemeProvider theme={theme}>
      { authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
      </ThemeProvider>
    </IntlProvider>
  </Suspense>
  );
}

const mapStateToProps = (state: AppProps) => ({
  ...state
})


const connectedApp = connect(mapStateToProps)(App)
export default connectedApp;
