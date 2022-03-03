import React, { useContext } from 'react';
import {
  SafeAreaViewContainer,
  HeadingTitle,
  SubHeading,
  ListContainer,
} from './index.style';
import CourseInfoCard from '../../../components/ProductCard/index';
import { ActivityIndicator } from 'react-native-paper';
import { View, TouchableOpacity, Text } from 'react-native';

const MyLearningList = ({ navigation }) => {
  //   const { courses, isLoading, error } = useContext(RestaurantContext);
  const courses = [];
  const isLoading = false;
  const error = 'No items found';
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaViewContainer>
        <HeadingTitle>My Learning</HeadingTitle>
        <SubHeading>
          To play your course, select the Start button. To assign a course you
          have purchased to another user visit My Orders page
        </SubHeading>
        {isLoading && (
          <ActivityIndicator animating={true} size={'large'} color={'tomato'} />
        )}
        {courses && courses.length > 0 && (
          <ListContainer
            data={courses}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('My Learning View')}>
                  <CourseInfoCard course={item} key={index} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}
        {error && <Text variant="error">{error}</Text>}
      </SafeAreaViewContainer>
    </View>
  );
};

export default MyLearningList;
