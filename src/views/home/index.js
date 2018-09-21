import React, { Component } from 'react'
import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch)
  return {
    onIncreaseClick: () => dispatch({ type: 'increase' })
  }
}

// Action Creator
// const increaseAction =

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>
          123+
          {value}
        </span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
