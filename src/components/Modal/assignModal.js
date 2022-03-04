import React from "react";
import {
  Portal,
  Button,
  Provider,
  TextInput,
  Dialog,
} from "react-native-paper";

const AssignModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [text, setText] = React.useState("");

  const containerStyle = { backgroundColor: "#383838", padding: 20 };
  return (
    <Provider>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Dialog.Title>Assign Enrollment</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Dialog.Actions>
              <Button mode="outlined" onPress={() => console.log("Cancel")}>
                Cancel
              </Button>
              <Button onPress={() => console.log("Ok")}>Assign</Button>
            </Dialog.Actions>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default AssignModal;
