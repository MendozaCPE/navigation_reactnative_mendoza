import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SettingRowProps {
  iconColor: string;
  title: string;
  value?: string;
  showChevron?: boolean;
}

function SettingRow({
  iconColor,
  title,
  value,
  showChevron = true,
}: SettingRowProps) {
  return (
    <View style={styles.row}>
      <View style={[styles.iconCircle, { backgroundColor: iconColor }]} />
      <Text style={styles.rowTitle}>{title}</Text>
      <View style={styles.valueContainer}>
        {value && <Text style={styles.rowValue}>{value}</Text>}
        {showChevron && (
          <Ionicons
            name="chevron-forward"
            size={16}
            color="#c7c7cc"
            style={styles.chevron}
          />
        )}
      </View>
    </View>
  );
}

export default function SettingsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleBackToChats = () => {
    // LIFO (Last-In-First-Out) pop behavior
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/home/chats");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* PROFILE HEADER SECTION */}
        <View style={styles.profileHeaderContainer}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>JM</Text>
          </View>
          <Text style={styles.profileName}>Jason Magsino</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* PROFILE Section */}
        <Text style={styles.sectionHeader}>PROFILE</Text>
        <View style={styles.groupCard}>
          <SettingRow iconColor="#3aa8c1" title="Active Status" value="On" />
          <View style={styles.separator} />
          <SettingRow
            iconColor="#0084ff"
            title="Username"
            value="m.me/johndoe"
          />
        </View>

        {/* PREFERENCES Section */}
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <View style={styles.groupCard}>
          <SettingRow
            iconColor="#ff3b30"
            title="Notifications & Sounds"
            value="On"
          />
          <View style={styles.separator} />
          <SettingRow iconColor="#1c1c1e" title="Dark Mode" value="System" />
          <View style={styles.separator} />
          <SettingRow iconColor="#4cd964" title="Data Saver" value="Off" />
        </View>

        {/* ACCOUNT & LEGAL Section */}
        <Text style={styles.sectionHeader}>ACCOUNT & LEGAL</Text>
        <View style={styles.groupCard}>
          <SettingRow iconColor="#8e8e93" title="Account Settings" />
          <View style={styles.separator} />
          <SettingRow iconColor="#df791a" title="Report Technical Problem" />
          <View style={styles.separator} />
          <SettingRow iconColor="#8e8e93" title="Legal & Policies" />
        </View>

        {/* App version footer */}
        <Text style={styles.versionText}>Messenger Clone v1.0.0</Text>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNavContainer, { paddingBottom: insets.bottom > 0 ? insets.bottom : 12 }]}>
        <TouchableOpacity
          onPress={handleBackToChats}
          style={styles.bottomNavButton}
          activeOpacity={0.7}
        >
          <Ionicons
            name="return-down-back"
            size={24}
            color="#007aff"
            style={styles.bottomNavIcon}
          />
          <Text style={styles.bottomNavText}>Back to Chats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f7",
  },
  profileHeaderContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    alignItems: "center",
    paddingVertical: 24,
    marginTop: 0,
    marginBottom: 10,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#0084ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarInitials: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "600",
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },
  editProfileText: {
    fontSize: 15,
    color: "#666666",
  },
  scrollContent: {
    paddingBottom: 32,
    paddingTop: 2,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#8e8e93",
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  groupCard: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginHorizontal: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e5e5ea",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 14,
  },
  rowTitle: {
    fontSize: 16,
    color: "#000000",
    flex: 1,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowValue: {
    fontSize: 15,
    color: "#8e8e93",
    marginRight: 6,
  },
  chevron: {
    marginTop: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#f2f2f7",
    marginLeft: 62, // aligns under text (icon 32 + marginRight 14 + paddingLeft 16)
  },
  versionText: {
    textAlign: "center",
    color: "#8e8e93",
    fontSize: 13,
    marginTop: 28,
    marginBottom: 8,
  },
  bottomNavContainer: {
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#e5e5ea",
    paddingTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavIcon: {
    marginBottom: 2,
  },
  bottomNavText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#007aff",
  },
});

