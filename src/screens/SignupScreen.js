import React from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignupScreen = ({ navigation }) => {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data); // Add signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="Enter your email" />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Text style={styles.label}>Password:</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="Enter your password" secureTextEntry />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Text style={styles.label}>Confirm Password:</Text>
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} onChangeText={onChange} value={value} placeholder="Confirm your password" secureTextEntry />
        )}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

      <Button title="Signup" onPress={handleSubmit(onSubmit)} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  label: { marginBottom: 5 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15 },
  error: { color: 'red', marginBottom: 10 },
});

export default SignupScreen;
