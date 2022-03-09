import React, { useState } from "react";
import {
  Portal,
  Button,
  Provider,
  TextInput,
  Dialog,
} from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { useForm, Controller } from 'react-hook-form';

const getTextFieldValidation = {
  email: { required: `Email is required` },
};

const initialFormValues = {
  email: "",
};

const AssignModal = ({ onCloseClick, visibleProp }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: initialFormValues,
  });

  const onSubmit = async (data) => {
		onCloseClick();
	};

  const RenderTextField = ({ fieldName, label, validation }) => (
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
            mode="outlined"
            error={errors[name]}
          />
        )}
      />
      {errors[fieldName] && <Text>{errors[fieldName]?.message}</Text>}
    </View>
  );

  const containerStyle = { backgroundColor: "#383838", padding: 20 };
  return (
    <Provider>
      <Portal>
        <Dialog
          visible={visibleProp}
          onDismiss={onCloseClick}
          style={{ backgroundColor: "#383838" }}
          contentContainerStyle={containerStyle}
        >
          <Dialog.Title style={styles.modalTitle}>
            Assign Enrollment
          </Dialog.Title>
          <Dialog.Content>
            <RenderTextField
              fieldName={"email"}
              label={"Email Address"}
              validation={getTextFieldValidation.email}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Dialog.Actions>
              <Button
                mode="outlined"
                compact={true}
                color="#ffc700"
                style={[styles.modalButton, styles.cancelButton]}
                onPress={onCloseClick}
              >
                Cancel
              </Button>
              <Button
                mode="contained"
                compact={true}
                color="#fff"
                style={[styles.modalButton, styles.startButton]}
                disabled={!isValid}
								onPress={handleSubmit(onSubmit)}
              >
                Assign
              </Button>
            </Dialog.Actions>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    color: "rgba(255,255,255,0.87)",
    fontSize: 20,
  },
  modalButton: {
    marginLeft: 5,
  },
  startButton: {
    textAlign: "center",
    backgroundColor: "#ffc700",
  },
  cancelButton: {
    textAlign: "center",
    borderColor: "#ffc700",
    borderWidth: 1,
  },
  dropdownInput: {
    borderWidth: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
});

export default AssignModal;
