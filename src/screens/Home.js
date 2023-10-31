import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//expo install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Home({ navigation, route }) {
    async function handleProductsDelete() {
        try {
            await AsyncStorage.clear();
            Alert.alert(
                'Cadastro de Produtos:',
                'Todos os produtos foram excluídos com sucesso!'
            );
        } catch (error) {
            Alert.alert(
                'Erro na exclusão de produtos:',
                error
            );
        }
    }
    return (
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Text>Olá {global.nameLogin}, seja bem-vindo!</Text>
            <TouchableOpacity style={styles.saveButton} onPress={handleProductsDelete}>
                <Text>Deletar Todos os Produtos</Text>
            </TouchableOpacity>
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