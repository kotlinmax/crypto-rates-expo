import React, {Component, ErrorInfo} from 'react';
import s from './ErrorBoundaryStyles';

import {View, Text} from 'react-native';
import {ErrorBoundaryProps, ErrorBoundaryState} from './IErrorBoundary';

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {error: null, errorInfo: null};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // log to other services (Sentry, Bugsnag, Firebase Crashlytics)
    console.log({error, errorInfo});
    this.setState({error: error, errorInfo: errorInfo});
  }

  render() {
    if (this.state.error) {
      return (
        <View style={s.errorPage}>
          <Text style={s.title}>Произошла ошибка. Свяжитесь со службой поддержки.</Text>
          <Text style={s.description}>{this.state.error.toString() + '\n' + this.state.errorInfo?.componentStack}</Text>
        </View>
      );
    }

    return this.props.children || <View />;
  }
}
