import React from 'react';
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

interface ChatItem {
  id: string;
  name: string;
  message: string;
  avatar: string;
}

const CHAT_DATA: ChatItem[] = [
  {
    id: '1',
    name: 'Doc Calvin Placio',
    message: 'Ayan, mas mabuti para mabilis natin ma-finalize.',
    avatar: 'JM',
  },
  {
    id: '2',
    name: 'Doc Harrold Chaps',
    message: 'Sige, i-send mo na lang sa email ko yung draft.',
    avatar: 'HC',
  },
  {
    id: '3',
    name: 'Doc Oliver',
    message: 'Naka-leave ako bukas, sa Huwebes na natin itulo...',
    avatar: 'DO',
  },
];

export default function ChatsScreen() {
  const router = useRouter();

  const handlePressChat = (chat: ChatItem) => {
    if (chat.name === 'Doc Calvin Placio') {
      router.push('/home/chats/detail' as any);
    } else if (chat.name === 'Doc Harrold Chaps') {
      router.push('/home/chats/detail-harrold' as any);
    } else if (chat.name === 'Doc Oliver') {
      router.push('/home/chats/detail-oliver' as any);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#8e8e93" style={styles.searchIcon} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#8e8e93"
            style={styles.searchInput}
          />
        </View>

        {/* Section Title */}
        <Text style={styles.sectionTitle}>Message List</Text>

        {/* Scrollable list */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {CHAT_DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.chatRow}
              onPress={() => handlePressChat(item)}
              activeOpacity={0.7}
            >
              {/* Circle Avatar (solid grey) */}
              <View style={styles.avatar} />
              
              {/* Text Container */}
              <View style={styles.textContainer}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.messageText} numberOfLines={1}>
                  {item.message}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f7',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#dcdcdc', // solid grey circle
    marginRight: 16,
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
  messageText: {
    fontSize: 14,
    color: '#8e8e93',
  },
});
