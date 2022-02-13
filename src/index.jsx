import React from "react"
import {render} from "react-dom"
// Styles
import {GlobalStyles} from "./globalStyles"
// Root Component
import App from "./App"

// Render Components
render(
    <>
        <GlobalStyles/>
        <App/>
    </>,
    document.getElementById("root")
)
