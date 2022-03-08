import React, { useState } from "react";
import {
  Portal,
  Button,
  Provider,
  TextInput,
  Dialog,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AssignModal = ({ onCloseClick, visibleProp }) => {
  // const [visible, setVisible] = React.useState(visibleProp);

  // const hideModal = () => setVisible(false);
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState();

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
            <Picker
              style={styles.dropdownInput}
              mode="dropdown"
              selectedValue={selectedLanguage}
              dropdownIconColor={'#fff'}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item
                // color="rgba(255, 255, 255, 0.87)"
                label="Johndoe01@ABC.com"
                value="Johndoe01@ABC.com"
              />
              <Picker.Item
                // color="rgba(255, 255, 255, 0.87)"
                label="Johndoe@ABC.com"
                value="Johndoe@ABC.com"
              />
              <Picker.Item
                // color="rgba(255, 255, 255, 0.87)"
                label="Johndoe02@ABC.com"
                value="Johndoe02@ABC.com"
              />
              <Picker.Item
                // color="rgba(255, 255, 255, 0.87)"
                label="Johndoe03@ABC.com"
                value="Johndoe03@ABC.com"
              />
            </Picker>
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
                onPress={() => console.log("Ok")}
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
    backgroundColor:'#121212',
    padding: 20,
  },
});

export default AssignModal;
