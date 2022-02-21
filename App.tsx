import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RootNavigator } from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}