import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function LoginScreen() {
  const  [username, setUsername] = useState("");
  const  [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />
      <Button
        title="Login"
        onPress={() => Alert.alert("Credentials", `${username} + ${password}`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
});
