import React from 'react';

import { Animated } from 'react-native';


class FadeIn extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        duration: 500,
        toValue: 1,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={{...this.props.style, opacity: this.state.opacity}}>
        {this.props.children}
      </Animated.View>
    )
  }
};

export default FadeIn;