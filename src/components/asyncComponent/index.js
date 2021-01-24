import React, { Component } from 'react';

const AsyncComponent = (importComponent) => {

  return class extends Component {
    state = {
      component: null
    }

    componentDidMount() {
      importComponent()
        .then(comp => {
          this.setState({ component: comp.default })
        })
    }
    render() {
      const Comp = this.state.component
      return Comp ? <Comp {...this.props} /> : null
    }
  }

}

export default AsyncComponent;
