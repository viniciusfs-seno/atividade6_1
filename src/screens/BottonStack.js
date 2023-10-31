import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//npm install @react-navigation/bottom-tabs
//npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; //Novo Produto
import { MaterialIcons } from '@expo/vector-icons'; //Listar Produtos
import Home from './Home';
import Product from './Product';
import ProductList from './ProductList';
const Tab = createMaterialBottomTabNavigator();
export default function BottomStack({ navigation, route }) {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#FFFFFF"
            inactiveColor="#FFC300"
            barStyle={{ backgroundColor: '#E37D00' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Product"
                component={Product}
                options={{
                    tabBarLabel: 'Novo',
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="plus-box-outline" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="ProductList"
                component={ProductList}
                options={{
                    tabBarLabel: 'Listar',
                    tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" color={color} size={26} />,
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFC300',
    },
});