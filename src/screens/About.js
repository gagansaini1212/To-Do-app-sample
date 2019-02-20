import  React from 'react';
import { View, Text } from 'react-native';

class About extends React.Component {
    static navigationOptions = {
      title: 'About',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  
    render() {
        return(
            <View>
                <Text>
                    About
                </Text>
            </View>
        );
    }
  }

export default About;