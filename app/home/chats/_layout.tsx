import { Stack } from 'expo-router';
import React from 'react';

export default function ChatsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" options={{ headerShown: true, title: 'Doc Calvin Placio', headerBackTitle: 'Back' }} />
      <Stack.Screen name="detail-harrold" options={{ headerShown: true, title: 'Doc Harrold Chaps', headerBackTitle: 'Back' }} />
      <Stack.Screen name="detail-oliver" options={{ headerShown: true, title: 'Doc Oliver', headerBackTitle: 'Back' }} />
    </Stack>
  );
}
