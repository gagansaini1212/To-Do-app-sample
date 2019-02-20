import React from 'react';
import { View, Text ,Button} from 'react-native';
import {withNavigation} from  "react-navigation"

class Dashboard extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  
    /* render function, etc */
    render() {
      
        return(
            <View >
                <Text>
                    vcvkdcsgrtgrtrtg
                </Text>
                <Button
                   onPress={()=>this.props.navigation.navigate('About')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
/>
            </View>
        );
    }
  }

export default withNavigation(Dashboard);