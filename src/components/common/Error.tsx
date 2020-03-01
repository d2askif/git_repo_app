import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
interface Props {
  message: string;
}

const Error = ({message}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default Error;
