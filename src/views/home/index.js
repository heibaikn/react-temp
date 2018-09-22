import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({ type: 'increase' })
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 1
    }
  }
  increase = () => {
    this.props.onIncreaseClick()
    this.setState({ value: this.state.value + 2 })
  }
  render() {
    const { value } = this.props
    return (
      <div>
        <h3>
          <Link to="/page1">page1</Link>
        </h3>
        <span>
          store:
          {value}
        </span>
        <div>
          component:
          {this.state.value}
        </div>
        <button onClick={this.increase}>Increase</button>
      </div>
    )
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
