import React, { Component } from 'react'
// import logo from './logo.svg'
import { connect } from 'react-redux'
// import { addTodo } from '../../store/actions'
// import { GetStoreSum } from '../../store/selectors'
import './App.scss'
const addTodo = content => {
  // console.log(content)
  return {
    type: 'INCREMENT',
    payload: {
      content
    }
  }
}
const ShowSum = ({ sum }) => {
  return <div>{sum}</div>
}
class App extends Component {
  constructor(props, sum) {
    super(props, sum)
    console.log('constructor', sum, this.sum)
    this.state = {
      sum: 1
    }
  }
  add = () => {
    console.log('add', this.props, this.sum)
    this.props.addTodo(this.state.sum)
    this.setState({ sum: this.state.sum + 1 })
    // console.log('this.props.sum', this.props.sum)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.add}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">
            {this.state.sum}
            Welcome to home
            {this.props.sum}
          </h1>
        </header>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('state', state)
  // let sum = GetStoreSum(state)
  return { sum: state.sum }
}
// console.log(App)
// export default App
export default connect(
  mapStateToProps,
  { addTodo }
)(App)
