import React, { FC, Suspense } from "react"
import { AuthenticationState } from "../core/authentication"
import { connect } from "react-redux"
import { ThemeProvider } from "@emotion/react"
import Loading from "components/loading"
import theme from "core/theme"

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"))
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"))

export type AppProps = {
    authentication: AuthenticationState
    theme: any
}

const App: FC<AppProps> = ({
    authentication: { authenticated = false, inProgress = false },
}) => {
    if (inProgress)
        return (
            <ThemeProvider theme={theme}>
                <Loading />
            </ThemeProvider>
        )

    return (
        <Suspense fallback={Loading}>
            <ThemeProvider theme={theme}>
                {authenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
            </ThemeProvider>
        </Suspense>
    )
}

const mapStateToProps = (state: AppProps) => ({
    ...state,
})

const connectedApp = connect(mapStateToProps)(App)
export default connectedApp
