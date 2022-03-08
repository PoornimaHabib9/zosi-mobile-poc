import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import {
	Button,
	Caption,
	Card,
	Divider,
	Headline,
	TextInput,
	Title,
} from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import {
	SafeAreaViewContainer,
	LoginBackground,
	LoginBox,
	LoginCard,
	HyperLink,
	SignupSuggestBox,
} from './login.style';

import Auth0 from 'react-native-auth0';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context as AuthContext } from '../../services/AuthContext';

const auth0 = new Auth0({
	domain: 'zosi-neeraj.us.auth0.com',
	clientId: 'Zd21bBpnMl7SKBK3EUV5R47vnlZ2PDpU',
});

const getTextFieldValidation = {
	email: { required: `Email is required` },
	password: { required: `Password is required` },
};

const initialFormValues = {
	email: '',
	password: '',
};

const Login = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		mode: 'onBlur',
		reValidateMode: 'onBlur',
		defaultValues: initialFormValues,
	});

	const { signin } = React.useContext(AuthContext);

	const onSubmit = async (data) => {
		signin(data)
	};

	const RenderTextField = ({ fieldName, label, validation, icon, type }) => (
		<View>
			<Controller
				name={fieldName}
				control={control}
				rules={{
					required: {
						value: true,
						message: validation,
					},
				}}
				render={({ field: { name, onChange, onBlur, value } }) => (
					<TextInput
						value={value}
						name={name}
						id={`${name}-input`}
						onBlur={onBlur}
						onChangeText={onChange}
						label={label}
						mode='outlined'
						error={errors[name]}
						left={<TextInput.Icon name={icon}  />}
						secureTextEntry={type === 'password'}
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
						<Title style={{ textAlign: 'center' }}>Welcome</Title>
						<Caption style={{ textAlign: 'center' }}>
							Login in to Alchemy to continue
						</Caption>
						<View>
							<RenderTextField
								fieldName={'email'}
								label={'Email Address'}
								icon={'email'}
								validation={getTextFieldValidation.email}
								type='email'
							/>
							<RenderTextField
								fieldName={'password'}
								label={'Password'}
								icon={'lock-outline'}
								validation={getTextFieldValidation.password}
								type='password'
							/>
							<HyperLink style={{ marginTop: 10, marginBottom: 15 }}>
								Forgot your Password?
							</HyperLink>
							<Button
								mode='contained'
								disabled={!isValid}
								onPress={handleSubmit(onSubmit)}
							>
								Continue
							</Button>
						</View>
					</LoginBox>
					<SignupSuggestBox>
						<Text> do not have an account?</Text>
						<HyperLink style={{ marginLeft: 5 }}>Sign Up</HyperLink>
					</SignupSuggestBox>
				</LoginCard>
			</LoginBackground>
		</SafeAreaViewContainer>
	);
};
export default Login;
