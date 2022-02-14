import React from "react"
import {render} from "react-dom"
// Styles
import {GlobalStyles} from "./globalStyles"
// Root Component
import App from "./App"
import {AppProvider} from "./content/AppContext"

// Render Components
render(
    <>
        <GlobalStyles/>
        <AppProvider>
            <App/>
        </AppProvider>
    </>,
    document.getElementById("root")
)
