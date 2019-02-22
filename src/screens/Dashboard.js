import React from 'react';
import { View, Text,Button} from 'react-native';
import {withNavigation} from  'react-navigation';

// import Header from '../components/Header';
import Layout from '../components/Layout';


class Dashboard extends React.Component {
    static navigationOptions = {
      title: 'Dashboard',
      header: null
    };
  
    render() {
      return(
        <Layout>
            <View >
                <Text>
                    vcvkdcsgrtgrtrtg
                </Text>
                {/* <Button
                  onPress={()=>this.props.navigation.navigate('About')}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  /> */}
            </View>
            {/* <Header /> */}
          </Layout>
        );
    }
  }

export default withNavigation(Dashboard);