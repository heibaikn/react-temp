import React, { Component } from 'react'
// import logo from './logo.svg'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'
import { GetStoreSum } from '../../store/selectors'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sum: 0
    }
  }
  add = () => {
    // console.log(this.state.sum)

    // this.setState({ sum: this.state.sum + 1 })
    this.props.addTodo(1)
    console.log('this.props.sum', this.props.sum)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" onClick={this.add}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to home</h1>
        </header>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  let sum = GetStoreSum(state)
  return { sum }
}
// export default App
export default connect(
  mapStateToProps,
  { addTodo }
)(App)
