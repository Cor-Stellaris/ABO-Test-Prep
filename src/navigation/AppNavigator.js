import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../utils/theme';

import HomeScreen from '../screens/HomeScreen';
import StudyCategoriesScreen from '../screens/StudyCategoriesScreen';
import StudyMaterialScreen from '../screens/StudyMaterialScreen';
import TestSetupScreen from '../screens/TestSetupScreen';
import CategoryTestScreen from '../screens/CategoryTestScreen';
import ExamSimSetupScreen from '../screens/ExamSimSetupScreen';
import PremiumScreen from '../screens/PremiumScreen';
import TestEngineScreen from '../screens/TestEngineScreen';
import TestResultsScreen from '../screens/TestResultsScreen';
import TestHistoryScreen from '../screens/TestHistoryScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.primary,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTintColor: COLORS.textWhite,
  headerTitleStyle: {
    fontWeight: '600',
    fontSize: 17,
  },
  headerBackTitleVisible: false,
  cardStyle: {
    backgroundColor: COLORS.background,
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudyCategories"
          component={StudyCategoriesScreen}
          options={{ title: 'Study Material' }}
        />
        <Stack.Screen
          name="StudyMaterial"
          component={StudyMaterialScreen}
          options={({ route }) => ({
            title: route.params.categoryName,
          })}
        />
        <Stack.Screen
          name="TestSetup"
          component={TestSetupScreen}
          options={{ title: 'Mock Test' }}
        />
        <Stack.Screen
          name="CategoryTest"
          component={CategoryTestScreen}
          options={{ title: 'Practice by Category' }}
        />
        <Stack.Screen
          name="ExamSim"
          component={ExamSimSetupScreen}
          options={{ title: 'Exam Simulation' }}
        />
        <Stack.Screen
          name="TestEngine"
          component={TestEngineScreen}
          options={({ route }) => ({
            title: route.params?.mode === 'review' ? 'Review' : 'Test',
            headerLeft: () => null,
            gestureEnabled: false,
          })}
        />
        <Stack.Screen
          name="TestResults"
          component={TestResultsScreen}
          options={{
            title: 'Results',
            headerLeft: () => null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="TestHistory"
          component={TestHistoryScreen}
          options={{ title: 'Test History' }}
        />
        <Stack.Screen
          name="Premium"
          component={PremiumScreen}
          options={{ title: 'Premium' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
