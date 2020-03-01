/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Button} from 'react-native-elements';

interface Props {
  filterTitle: String;
  search: string;
  onFilter: () => void;
  updateSearch: (text: string) => void;
  onPressFilter?: () => {};
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F7FE',
  },
  searchBar_container: {
    marginHorizontal: 10,
    backgroundColor: '#F2F7FE',
    borderWidth: 0,
    borderColor: 'red',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    padding: 0,
    borderRadius: 4,
    shadowOpacity: 0.1,
    shadowRadius: 0.84,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  end: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#424144',
  },
  title_container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F2F7FE',
    padding: 8,
  },
});

const header = ({updateSearch, search, onFilter, filterTitle}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <View style={{flex: 1}} />
        <View style={styles.center}>
          <Text style={styles.title}>Repo</Text>
        </View>
        <View style={styles.end}>
          <Button
            // eslint-disable-next-line react-native/no-inline-styles
            icon={{
              name: 'star',
              size: 20,
              color: '#424144',
            }}
            type="clear"
            iconRight
            title={filterTitle.toString()}
            onPress={onFilter}
          />
        </View>
      </View>
      <SearchBar
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBar_container}
        inputStyle={{backgroundColor: 'white', borderWidth: 0}}
        inputContainerStyle={{backgroundColor: 'white', borderWidth: 0}}
      />
    </SafeAreaView>
  );
};

export default header;
