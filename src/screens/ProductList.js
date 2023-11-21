import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function ProductList({navigation}) {
return (
<View style={styles.container}>
<Text>Tela Lista der Produtos</Text>
<Text>Olá, você está na lista de produtos!</Text>
</View>
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