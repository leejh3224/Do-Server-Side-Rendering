/**
 * Your main app, uses styled components for styling
 */
import React, { Component } from 'react'
import styled from 'styled-components'

class App extends Component {
    componentDidMount() {
        console.log('mounted!')
    }

    render() {
        const isBrowser = () =>
            typeof window !== 'undefined' && window.document !== 'undefined'
        const FancyBackground = styled.div`
            height: 300px;
            padding: 16px;
            background: radial-gradient(
                circle at bottom center,
                #ffc837 15px,
                #ff8008
            );
        `

        return (
            <FancyBackground>
                hello world from {isBrowser() ? 'browser' : 'server'}
            </FancyBackground>
        )
    }
}

export default App
