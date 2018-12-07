import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { counterActions } from './reducers/actions'

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

        const Count = styled.h1`
            color: white;
            font-size: 56px;
            margin: 16px;
        `

        const CounterButton = styled.button`
            background-color: white;
            border: 0;
            border-radius: 8px;
            padding: 8px 16px;
            font-size: 16px;
            margin: 0 8px;
        `

        const { counter, increment, decrement, incrementAsync } = this.props

        return (
            <FancyBackground>
                <h1>React Router Redux SSR</h1>
                <Count>{counter}</Count>
                <div>
                    <CounterButton onClick={increment}>+</CounterButton>
                    <CounterButton onClick={decrement}>-</CounterButton>
                    <CounterButton onClick={incrementAsync}>
                        Async +
                    </CounterButton>
                </div>
            </FancyBackground>
        )
    }
}

const mapStateToProps = ({ counter }) => ({ counter })
const mapDispatchToProps = counterActions

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)
