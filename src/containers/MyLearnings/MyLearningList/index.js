import React, { useContext } from 'react';
import {
  SafeAreaViewContainer,
  ListContainer,
} from './index.style';
import CourseInfoCard from '../../../components/ProductCard/index';
import { ActivityIndicator, Text, Headline, Subheading } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { response } from './apidata';


const MyLearningList = ({ navigation }) => {
  const { data } = response;
  const courses = data.rows;
  const isLoading = false;
  const error = 'No items found';
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaViewContainer>
        <Headline style={styles.headLine}>My Learning</Headline>
        <Subheading style={styles.subHeadLine}>
          To play your course, select the Start button. To assign a course you
          have purchased to another user visit My Orders page
        </Subheading >
        {isLoading && (
          <ActivityIndicator animating={true} size={'large'} color={'tomato'} />
        )}
        {courses && courses.length > 0 && (
          <ListContainer
            data={courses}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('My Learning View',{
                    product: item,
                  })}>
                  <CourseInfoCard course={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.CourseSeat_id + ""}
          />
        )}
        {courses && courses.length === 0 && <Text variant="error">{error}</Text>}
      </SafeAreaViewContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  headLine:{
    fontSize:20,
    color: 'rgba(255, 255, 255, 0.87)',
  },
  subHeadLine:{
    fontSize:14,
    color: 'rgba(255, 255, 255, 0.6)',
  }
})

export default MyLearningList;
