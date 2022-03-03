import React from "react";
import { SafeAreaView, Text, View, StatusBar } from "react-native";
import {
  Button,
  Caption,
  Card,
  Divider,
  Headline,
  TextInput,
  Title,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import {
  SafeAreaViewContainer,
  LoginBackground,
  LoginBox,
  LoginCard,
  HyperLink,
  SignupSuggestBox,
} from "./login.style";

const getTextFieldValidation = {
  email: { required: `Email is required` },
  password: { required: `Password is required` },
};

const initialFormValues = {
  email: "",
  password: "",
};

const Login = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: initialFormValues,
  });

  const onSubmit = (data) => {
    console.log(data)
    navigation.navigate("My Learnings")
  };

  const RenderTextField = ({ fieldName, label, validation, icon }) => (
    <View>
      <Controller
        name={fieldName}
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Field is required!'
          }
        }}
        render={({ field: { name, onChange, onBlur, value } }) => (
          <TextInput
            value={value}
            name={name}
            id={`${name}-input`}
            onBlur={onBlur}
            onChangeText={onChange}
            label={label}
            mode="outlined"
            error={errors[name]}
            left={<TextInput.Icon name={icon} />}
          />
        )}
      />
      {errors[fieldName] && <Text>{errors[fieldName]?.message}</Text>}
    </View>
  );

  return (
    <SafeAreaViewContainer>
      <LoginBackground>
        <LoginCard elevation={5}>
          <LoginBox>
            <Title style={{textAlign:'center'}}>Welcome</Title>
            <Caption style={{textAlign:'center'}}>Login in to Alchemy to continue</Caption>
            <View>
              <RenderTextField
                fieldName={"email"}
                label={"Email Address"}
                icon={"email"}
                validation={getTextFieldValidation.email}
              />
              <RenderTextField
                fieldName={"password"}
                label={"Password"}
                icon={"lock-outline"}
                validation={getTextFieldValidation.password}
              />
              <HyperLink style={{marginTop:10,marginBottom:15}}>Forgot your Password?</HyperLink>
              <Button mode="contained" disabled={!isValid} onPress={handleSubmit(onSubmit)}>Continue</Button>
            </View>
          </LoginBox>
          <SignupSuggestBox>
            <Text>Don't have an account?</Text>
            <HyperLink style={{marginLeft:5}}>Sign Up</HyperLink>
          </SignupSuggestBox>
        </LoginCard>
      </LoginBackground>
    </SafeAreaViewContainer>
  );
};
export default Login;
