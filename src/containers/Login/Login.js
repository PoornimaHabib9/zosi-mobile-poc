import React from 'react';
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

	const onSubmit = async (data) => {
		console.log(data);
		// await auth0.webAuth
		// 	.authorize({ scope: 'openid email profile' })
		// 	.then((credentials) => console.log(credentials))
		// 	.catch((error) => console.log(error));
		navigation.navigate('Root', { screen: 'MyLearnings' });
	};

	const RenderTextField = ({ fieldName, label, validation, icon }) => (
		<View>
			<Controller
				name={fieldName}
				control={control}
				rules={{
					required: {
						value: true,
						message: 'Field is required!',
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
						left={<TextInput.Icon name={icon} secureTextEntry />}
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
							/>
							<RenderTextField
								fieldName={'password'}
								label={'Password'}
								icon={'lock-outline'}
								validation={getTextFieldValidation.password}
							/>
							{/* <TextInput
							style={{backgroundColor: 'white'}}
								label='Email Address'
								name="email"
								left={<TextInput.Icon name='email'
								// mode='f'
								/>}
							/>
							<TextInput
							style={{backgroundColor: 'white'}}
								name="password"
								label='Password'
								secureTextEntry
								right={<TextInput.Icon name='eye'
								// mode='outlined'
								/>}
							/> */}
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
