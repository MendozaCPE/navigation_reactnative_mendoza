import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const { state, navigation } = props;
  const insets = useSafeAreaInsets();

  // Find which route is active
  const activeRouteName = state.routeNames[state.index];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>Drawer Menus</Text>

      {/* Home Item */}
      <TouchableOpacity
        style={[
          styles.drawerItem,
          activeRouteName === 'home' && styles.activeDrawerItem,
        ]}
        onPress={() => navigation.navigate('home')}
        activeOpacity={0.7}
      >
        <Ionicons
          name="home-outline"
          size={22}
          color={activeRouteName === 'home' ? '#7b1fa2' : '#333333'}
        />
        <Text
          style={[
            styles.drawerText,
            activeRouteName === 'home' && styles.activeDrawerText,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Settings Item */}
      <TouchableOpacity
        style={[
          styles.drawerItem,
          activeRouteName === 'settings' && styles.activeDrawerItem,
        ]}
        onPress={() => navigation.navigate('settings')}
        activeOpacity={0.7}
      >
        <Ionicons
          name="settings-outline"
          size={22}
          color={activeRouteName === 'settings' ? '#7b1fa2' : '#333333'}
        />
        <Text
          style={[
            styles.drawerText,
            activeRouteName === 'settings' && styles.activeDrawerText,
          ]}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  activeDrawerItem: {
    backgroundColor: '#f3e8ff', // Light purple background highlight
  },
  drawerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginLeft: 16,
  },
  activeDrawerText: {
    color: '#7b1fa2', // Purple text for active item
    fontWeight: 'bold',
  },
});
