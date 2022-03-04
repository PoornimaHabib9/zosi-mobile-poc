import React from "react";
import {
  Portal,
  Button,
  Provider,
  TextInput,
  Dialog,
} from "react-native-paper";
import {StyleSheet} from 'react-native'

const AssignModal = ({visibleProp}) => {
  const [visible, setVisible] = React.useState(visibleProp);

  // const showModal = () => setVisible(true);
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
          <Dialog.Title style={styles.modalTitle}>Assign Enrollment</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Email"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Dialog.Actions>
              <Button mode="outlined" onPress={() => hideModal()}>
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

const styles=StyleSheet.create({
  modalTitle:{
    color:'rgba(255,255,255,0.87)',
    fontSize:20
  }
})

export default AssignModal;
