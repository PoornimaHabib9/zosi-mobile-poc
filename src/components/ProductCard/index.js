import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { Link } from '@react-navigation/native';
import moment from 'moment'
import { DATE_SHORT_FORMAT } from '../../constants/appConstants';
import { Card, Subheading, Button } from "react-native-paper";

const CourseInfoCard = ({ course = {} }) => {
  // const {
  //   ThumbnailUrl = "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?cs=srgb&dl=pexels-pixabay-415708.jpg&fm=jpg",
  //   Course_type = "Course",
  //   Course_name = "PCQI Blended eLearning Course",
  //   courseStatus = "Start",
  //   CourseSeat_expiration_date = "07/25/2021",
  //   CourseSeat_subscription_id=1,
  //   Course_id=1

  // } = product;
  const { Course_name, Course_id, CourseSeat_id, Course_type , ThumbnailUrl, CourseSeat_expiration_date } = course;
  const isExpired = (date) => moment().isAfter(date);

  // return (
  //   <>
  //   <Card key={CourseSeat_id}>
  //     <Subheading style={{color: 'white'}}>
  //       {Course_name}
  //     </Subheading>
  //   </Card>
  //   </>
  // )
  return (
    <>
      <Card style={styles.cardSpace} elevation={5} key={Course_id}>
        <View style={{ flexDirection: "row", alignItems:'center' }}>
          <Image style={styles.imageBox} source={require("../../../public/assets/images/course_name.jpg")}></Image>
          <View style={styles.cardInfo}>
            <Text style={styles.courseType}>{Course_type.replace(/\b\w/g, (l) => l.toUpperCase())}</Text>
            <Text style={styles.ProductTitle}>{Course_name}</Text>
            <Button style={styles.startButton}
              mode='text'
              compact={true}
              uppercase= {false}
              labelStyle={{textAlign:'left'}}
              onPress={() => console.log("Start course")}
            > {`Start Course >`} </Button>
          </View>
        </View>
        <Card elevation={5} style={styles.expDateCard}>
          <Text style={styles.expDate}>
            Exp Date : {moment(CourseSeat_expiration_date).format(DATE_SHORT_FORMAT)}
          </Text>
        </Card>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  cardSpace: {
    padding: 10,
  },
  courseType: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  ProductTitle: {
    fontSize: 12,
    color: 'white',
   flexShrink: 1,
  },
  imageBox: {
    height: 90,
    width: 140,
  },
  cardInfo: {
    padding: 5,
    backgroundColor: '#1d1d1d',
    flex: 1,
  },
  startButton: {
    color: '#fff',
    marginTop: 15,
    textAlign: "left",
    padding:0
  },
  expDateCard: {
    backgroundColor: '#353535',
    textAlign: 'center',
    padding:5
  },
  expDate: {
    color: 'white',
    textAlign:'center'
  }

})
export default CourseInfoCard;
