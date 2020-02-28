import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';

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
    return <Button type="clear" loading />;
  }
  renderAppError() {}

  renderMain() {
    const {appLoading, appError} = this.props;
    if (appLoading) {
      return this.renderAppLoading();
    }
    if (appError !== '') {
      this.renderAppError();
    }
    return this.props.children;
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>{this.renderMain()}</SafeAreaView>
    );
  }
}
