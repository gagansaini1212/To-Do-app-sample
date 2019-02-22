import React from 'react';
import { View } from 'react-native';
import Header from './Header';

const Layout = ({children}) => (
<View>
    <Header />
    {children}
</View>
);

export default Layout;