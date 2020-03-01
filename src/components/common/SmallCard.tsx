import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {
  title: string;
  icon: string;
  label: string;
}

const styles = StyleSheet.create({
  container: {},
  label_container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#6D7195',
    opacity: 0.8,
  },
  label: {
    marginLeft: 4,
    color: '#999BB1',
  },
});
const SmallCard = ({title, icon, label}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.label_container}>
        <Icon name={icon} size={15} color="#D7BFB6" />
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default SmallCard;
