// import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RootNavigation from '../../src/navigationRef';


const authReducer =  (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { ...state, errorMessage: "", token: action.payload };
    case "signout":
      return { ...state, token: null };  
    default:
      return state;
  }
};

// const signup = (dispatch) => async ({ email, password }) => {
//   try {
//     const response = await trackerApi.post("/signup", { email, password });
//     await AsyncStorage.setItem("token", response.data.token);
//     dispatch({ type: "signup", payload: response.data.token });

//     navigate("TrackList");
//   } catch (err) {
//     dispatch({
//       type: "add_error",
//       payload: "Something went wrong with sign up",
//     });
//   }
// };

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // Try to signin
    await AsyncStorage.setItem("token", `token:${email}`);
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
    dispatch({ type: "signin", payload: `token:${email}` });
    // RootNavigation.navigate('Root', { screen: 'MyLearning' });
    setTimeout(()=>{
      RootNavigation.navigate('MyLearning');
    }, 100)
    
  };
};

const signout = (dispatch) => {
  return async () => {
    // somehow sign out!!!
    await AsyncStorage.removeItem("token");

    dispatch({ type: "signout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { token: null, errorMessage: "" }
);
