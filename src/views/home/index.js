import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'
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
    // console.log(Component, this.Gloab)
    this.props.onIncreaseClick()
    this.setState({ value: this.state.value + 2 })
  }
  sendAjax = () => {
    this.$http({ ac: 'getSysInfo' })
  }
  render() {
    // const { value } = this.props
    return <div className="home">banner</div>
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App
