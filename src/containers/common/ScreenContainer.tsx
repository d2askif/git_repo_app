import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Spinner from '../../components/common/spinner';
import Error from '../../components/common/Error';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
  },
});

interface Props {
  appLoading: boolean;
  appError: string;
}

export default class ScreenContainer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.renderAppError = this.renderAppError.bind(this);
    this.renderAppLoading = this.renderAppLoading.bind(this);
    this.renderMain = this.renderMain.bind(this);
  }
  renderAppLoading() {
    return <Spinner />;
  }
  renderAppError(message: string) {
    return <Error message={message} />;
  }

  renderMain() {
    const {appLoading, appError} = this.props;
    if (appLoading) {
      return this.renderAppLoading();
    }
    if (appError !== '') {
      return this.renderAppError(appError);
    }
    return this.props.children;
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>{this.renderMain()}</SafeAreaView>
    );
  }
}
