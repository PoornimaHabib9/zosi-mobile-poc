import React from "react";
import {
  CourseCard,
  CourseDetailContainer,
  ExpDateText,
  ExpDateBox,
  ImageBox,
  CourseDetails,
  ProductType,
  ProductTitle,
  StatusButton
} from "./index.style";
import moment from moment
import { DATE_SHORT_FORMAT } from '../../constants/appConstants';

const CourseInfoCard = ({ product = {} }) => {
  const {
    ThumbnailUrl = "https://images.pexels.com/photos/415708/pexels-photo-415708.jpeg?cs=srgb&dl=pexels-pixabay-415708.jpg&fm=jpg",
    Course_type = "Course",
    Course_name = "PCQI Blended eLearning Course",
    courseStatus = "Start",
    CourseSeat_expiration_date = "07/25/2021",
    isExpired = false,
    CourseSeat_subscription_id=1,
    Course_id=1

  } = product;

  const isExpired = (date) => moment().isAfter(date);

  return (
    <>
      <CourseCard elevation={5} key={Course_id}>
        <CourseDetailContainer>
          <ImageBox source={{uri:ThumbnailUrl}}></ImageBox>
          <CourseDetails>
            <ProductType>{Course_type.replace(/\b\w/g, (l) => l.toUpperCase())}</ProductType>
            <ProductTitle>{Course_name}</ProductTitle>
            <StatusButton>{courseStatus==='start'?'Start Course >':'Resume Course >'}</StatusButton>
          </CourseDetails>
        </CourseDetailContainer>
        <ExpDateBox elevation={5}>
          <ExpDateText style={{ color: isExpired(CourseSeat_expiration_date) ? "#e61c41" : "#fff" }}>
            Exp Date: ${moment(CourseSeat_expiration_date).format(DATE_SHORT_FORMAT)}
          </ExpDateText>
        </ExpDateBox>
      </CourseCard>
    </>
  );
};

export default CourseInfoCard;
