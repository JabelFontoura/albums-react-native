import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
);

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    borderColor: '#DDD',

    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
};

export { CardSection };
