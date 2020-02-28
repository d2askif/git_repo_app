// @flow
import * as React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#444',
    marginTop: 0,
  },
  content: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderBottomColor: '#444',
    marginBottom: 8,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#aaa',
  },
  header: {
    marginTop: 20,
  },
});

type Props = {
  data: Array<any>;
  renderItem: Function;
  ItemSeparatorComponent?: Function;
  ListHeaderComponent?: Function;
  ListFooterComponent?: Function;
  style?: any;
};

const SelectList = ({
  data,
  renderItem,
}: /* ItemSeparatorComponent,
  ListHeaderComponent,
  ListFooterComponent,
  style, */
Props) => (
  <View style={styles.container}>
    {/* <FlatList
      data={data}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={(_val, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorComponent}
      vertical
      scrollEnabled
      horizontal={false}
      contentContainerStyle={[styles.content, style]}
      ListFooterComponent={ListFooterComponent}
    /> */}
    <FlatList
      data={data}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={(_val, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <View style={styles.header} />}
      scrollEnabled
      horizontal={false}
      contentContainerStyle={[styles.content]}
    />
  </View>
);

SelectList.defaultProps = {
  ItemSeparatorComponent: () => <View style={styles.separator} />,
  ListHeaderComponent: () => <View style={styles.header} />,
  ListFooterComponent: () => null,
  style: {},
};

export default SelectList;
