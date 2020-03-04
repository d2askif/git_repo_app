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
  },
  header: {
    marginTop: 20,
  },
});

type Props = {
  data: Array<any>;
  renderItem: Function;
  ListFooterComponent: Function;
  loadMore: () => void;
  style?: any;
  refresh: boolean;
  onRefresh: Function;
};

const SelectList = ({
  data,
  renderItem,
  loadMore,
  ListFooterComponent,
  refresh,
  onRefresh,
}: Props) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({item, index}) => renderItem(item, index)}
      keyExtractor={(_val, index) => index.toString()}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={() => <View style={styles.header} />}
      ListFooterComponent={ListFooterComponent()}
      scrollEnabled
      refreshing={refresh}
      onRefresh={() => onRefresh()}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      contentContainerStyle={[styles.content]}
      onEndReached={({distanceFromEnd}) => {
        if (distanceFromEnd > 0) {
          loadMore();
        }
      }}
      onEndReachedThreshold={0.1}
      removeClippedSubviews
    />
  </View>
);

export default SelectList;
