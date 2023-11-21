function handleLogin() {
  if (email.length !== 0 && password.length !== 0) {
    if (email === registeredState.email && password === registeredState.password) {
      setPassword('');
      global.nameLogin = registeredState.name; //Variável global
      navigation.replace('BottomStack');
    } else {
      Alert.alert(
        'Erro ao tentar efetuar o login:',
        'Informe o e-mail e a senha corretos'
      );
    }
  } else {
    Alert.alert(
      'Erro ao tentar efetuar o login:',
      'Informe o e-mail e a senha corretos!'
    );
  }
}