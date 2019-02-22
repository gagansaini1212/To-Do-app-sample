import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styled from 'styled-components';

const icon = <FontAwesome5 name={'caret-down'} solid  size={20} color="#fff" />;
const IconSearch = <FontAwesome5 name={'search'} solid  size={20} color="#fff" />;
const IconEllipsis = <FontAwesome5 name={'ellipsis-v'} solid  size={20} color="#fff" />;

const Container = styled.View`
    padding-vertical: 15;
    flex-direction: row;
    background-color: #1C8AC8;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
`;

const ContainerLeft = styled.View`
    flex-direction: row;
    flex-grow: 1;
`;

const ContainerRight = styled.View`
    flex-direction: row;
    padding-horizontal: 15;

`;
const ImageStyled = styled.Image`
    height: 30;
    width: 30;
    margin-horizontal: 10;
    resize-mode: contain;
`;

const DropdownContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const DropdownLeft = styled.Text`
    font-size: 20;
    font-weight: 600;
    margin-right: 35;
    color: #fff;
`;

const Search = styled.View`
    padding-horizontal: 25;
`;

const ListContainer = styled.View`
    position: absolute;
    background-color: green;
    width: 150;
    align-items: center;
    top: 40;
    z-index: 1000;
`;

class Header extends React.Component {
    state = {
        listVisible: false
    } 
    
    handleToggleList = () => {
        const {listVisible} = this.state;
        this.setState({
            listVisible: !listVisible
        }); 
    }
    render() {
        const {listVisible} = this.state;
        return(
            <Container>
                 {listVisible &&  
                  <ListContainer>
                        <Text>jguyhuy</Text>
                        <Text>jguyhuy</Text> 
                        <Text>jguyhuy</Text> 
                        <Text>jguyhuy</Text>
                    </ListContainer>}
                <ContainerLeft>
               
                    <ImageStyled source={require('../assets/logo.jpeg')} />
                    <DropdownContainer onPress={this.handleToggleList}>
                
                        <DropdownLeft>
                            
                                All Lists
                            
                        </DropdownLeft>
                        {icon}
                    </DropdownContainer>
                </ContainerLeft>
                <ContainerRight>
                    <Search>
                        {IconSearch}
                    </Search>
                    <View>
                        {IconEllipsis}
                    </View>
                </ContainerRight>
            </Container>
        );
    }
}

export default Header;