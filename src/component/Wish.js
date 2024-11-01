import React, { Component } from 'react'

export default class Wish extends Component {
  render() {
    return (
      <>
      <h2>   {this.props.adjectiv},{this.props.time}!</h2>
      </>
    )
  }
}
