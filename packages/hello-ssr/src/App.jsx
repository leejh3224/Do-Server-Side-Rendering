import React, { Component } from 'react'
import styled from 'styled-components'
import { IS_BROWSER } from './constants'

class App extends Component {
    componentDidMount() {
        console.log('mounted!')
    }

    render() {
        const FancyBackground = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            padding: 16px;
            background: radial-gradient(
                circle at bottom center,
                #ffc837 15px,
                #ff8008
            );
        `

        return (
            <FancyBackground>
                hello world from
                {IS_BROWSER ? 'browser' : 'server'}
            </FancyBackground>
        )
    }
}

export default App
