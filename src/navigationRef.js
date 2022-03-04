import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
  console.log('name', name);
  // if (navigationRef.isReady()) {
    console.log('ready', name);

    navigationRef.navigate(name, params);
  // }
}