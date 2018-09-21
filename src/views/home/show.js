import React from 'react'

import { connect } from 'react-redux'
function mapStateToProps(store) {
  return { sum: store.counter.count }
}
const showSumFun = ({ sum }) => {
  console.log('showSumFun', sum)
  return (
    <div>
      sum:
      {sum}
    </div>
  )
}

export default connect(mapStateToProps)(showSumFun)
