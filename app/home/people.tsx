import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

interface DoctorItem {
  id: string;
  name: string;
  specialization: string;
}

const DOCTOR_DATA: DoctorItem[] = [
  {
    id: '1',
    name: 'Doc Calvin Placio',
    specialization: 'Cardiologist',
  },
  {
    id: '2',
    name: 'Doc Harrold Chaps',
    specialization: 'Pediatrician',
  },
  {
    id: '3',
    name: 'Doc Oliver',
    specialization: 'General Physician',
  },
  {
    id: '4',
    name: 'Dr. Maria Santos',
    specialization: 'Dermatologist',
  },
  {
    id: '5',
    name: 'Dr. Arnel Mendoza',
    specialization: 'Neurologist',
  },
];

export default function PeopleScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handlePressChat = (doc: DoctorItem) => {
    if (doc.name === 'Doc Calvin Placio') {
      router.push('/home/chats/detail' as any);
    } else if (doc.name === 'Doc Harrold Chaps') {
      router.push('/home/chats/detail-harrold' as any);
    } else if (doc.name === 'Doc Oliver') {
      router.push('/home/chats/detail-oliver' as any);
    }
  };

  // Filter by name OR specialization (case-insensitive)
  const filteredDoctors = DOCTOR_DATA.filter((doc) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      doc.name.toLowerCase().includes(query) ||
      doc.specialization.toLowerCase().includes(query)
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#8e8e93" style={styles.searchIcon} />
          <TextInput
            placeholder="Search people or specialization"
            placeholderTextColor="#8e8e93"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery}
            returnKeyType="search"
            clearButtonMode="while-editing"
          />
        </View>

        {/* Section Title — count updates with filter */}
        <Text style={styles.sectionTitle}>
          ACTIVE NOW ({filteredDoctors.length})
        </Text>

        {/* Scrollable list */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredDoctors.length === 0 ? (
            <Text style={styles.emptyText}>No results found.</Text>
          ) : (
            filteredDoctors.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.docRow}
                onPress={() => handlePressChat(item)}
                activeOpacity={0.7}
              >
                {/* Avatar Container */}
                <View style={styles.avatarContainer}>
                  {/* Grey Circle Avatar */}
                  <View style={styles.avatar} />
                  {/* Green Status Indicator */}
                  <View style={styles.statusIndicator} />
                </View>

                {/* Text Container */}
                <View style={styles.textContainer}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.specializationText}>{item.specialization}</Text>
                </View>

                {/* Chat Bubble Icon Button */}
                <TouchableOpacity
                  onPress={() => handlePressChat(item)}
                  style={styles.chatIconButton}
                  activeOpacity={0.6}
                >
                  <Ionicons name="chatbubble-ellipses-outline" size={24} color="#007aff" />
                </TouchableOpacity>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f7',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8e8e93',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  docRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f7',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#dcdcdc', // solid grey circle
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4cd964', // bright green indicator
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  textContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  specializationText: {
    fontSize: 14,
    color: '#8e8e93',
  },
  chatIconButton: {
    padding: 8,
  },
  emptyText: {
    textAlign: 'center',
    color: '#8e8e93',
    fontSize: 15,
    marginTop: 40,
  },
});
