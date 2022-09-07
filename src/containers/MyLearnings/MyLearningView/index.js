import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

import moment from "moment";
import { DATE_SHORT_FORMAT } from "../../../constants/appConstants";
import AssignModal from "../../../components/Modal/assignModal";

const MyLearningView = ({ route, navigation }) => {
  const { product } = route.params;
  const [visible, setVisible] = React.useState(false);

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <ScrollView style={styles.courseInfo}>
      <Text style={styles.ProductTitle}>{product.Course_name}</Text>
      <Image
        style={styles.imageBox}
        resizeMode="cover"
        source={require("../../../../public/assets/images/course_name.jpg")}
      ></Image>
      <Text style={styles.courseDescription}>
        {product?.defaultLanguage?.description}
      </Text>
      <View style={styles.flexRowBox}>
        <View style={styles.expBlock}>
          <Text style={styles.label}>Expiration Date</Text>
          <Text style={styles.labelValue}>
            {moment(product.CourseSeat_expiration_date).format(
              DATE_SHORT_FORMAT
            )}
          </Text>
        </View>
        <View style={styles.expBlock}>
          <Text style={styles.label}>Seats</Text>
          <Text style={styles.labelValue}>0 / 10</Text>
        </View>
      </View>
      <View style={styles.courseAction}>
        <View style={styles.courseActionElement}>
          <Text style={styles.label}>Exam Attempt: 0 / 10</Text>
        </View>
        <View style={{ width: "100%" }}>
          <Button
            mode="contained"
            compact={true}
            uppercase={false}
            style={styles.courseActionElement}
            onPress={() => console.log("Start course")}
          >
            {" "}
            Start{" "}
          </Button>
          <Button
            mode="outlined"
            style={[styles.courseActionElement, styles.assignButton]}
            uppercase={false}
            onPress={() => setVisible(true)}
          >
            {" "}
            Assign
          </Button>
        </View>
      </View>

      {visible && <AssignModal visibleProp={true} onCloseClick={hideModal} />}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardSpace: {
    padding: 10,
  },
  courseType: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.6)",
  },
  ProductTitle: {
    fontSize: 24,
    color: "rgba(255, 255, 255, 0.87)",
    flexShrink: 1,
    marginBottom: 10,
  },
  imageBox: {
    width: "100%",
    height: 200,
    marginTop: 0,
  },
  courseInfo: {
    padding: 5,
    backgroundColor: "#121212",
    flex: 1,
  },
  startButton: {
    color: "#fff",
    marginTop: 15,
    textAlign: "center",
    padding: 0,
    flex: 1,
  },
  expDateCard: {
    backgroundColor: "#353535",
    textAlign: "center",
    padding: 5,
  },
  expDate: {
    color: "white",
    textAlign: "center",
  },
  courseDescription: {
    marginTop: 5,
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.87)",
  },
  label: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.6)",
  },
  labelValue: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.7)",
  },
  expBlock: {
    alignSelf: "flex-start",
    width: "50%",
  },
  flexRowBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  courseAction: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  courseActionElement: {
    marginTop: 15,
  },
  assignButton: {
    borderWidth: 1,
    borderColor: "#ffc700",
  },
});
export default MyLearningView;
