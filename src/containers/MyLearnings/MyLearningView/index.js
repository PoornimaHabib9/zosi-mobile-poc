import React from "react";
import { Image, Text, View } from "react-native";

import moment from 'moment'
import { DATE_SHORT_FORMAT } from '../../../constants/appConstants';

const MyLearningView = ({product})=>{
    const isExpired = (date) => moment().isAfter(date);

    return(
        // <View style={{backgroundColor:'#121212'}}>
        //     <HeaderTitle>{product.Course_name}</HeaderTitle>
        //     <Image source={{uri:product.ThumbnailUrl}}></Image>
        //     <Description>{product?.defaultLanguage?.description}</Description>
        //     <View style={{flexDirection:'row'}}>
        //         <View>
        //             <Text>Expiration Date</Text>
        //             <Text style={{ color: isExpired(CourseSeat_expiration_date) ? "#e61c41" : "#fff" }}>{moment(product.CourseSeat_expiration_date).format(DATE_SHORT_FORMAT)}</Text>
        //         </View>
        //         <View>
                    <Text>Seats</Text>
        //             <Text>{}</Text>
        //         </View>
        //     </View>
        // </View>
    )
}
export default MyLearningView;