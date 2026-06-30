import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'doctor';
}

export default function ChatDetailHarroldScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Doc, na-finalize ko na po yung draft for our project.',
      sender: 'user',
    },
    {
      id: '2',
      text: 'Sige, i-send mo na lang sa email ko yung draft.',
      sender: 'doctor',
    },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: inputText.trim(),
        sender: 'user',
      },
    ]);
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.messagesList}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => {
            const isUser = message.sender === 'user';
            return (
              <View
                key={message.id}
                style={[
                  styles.messageRow,
                  isUser ? styles.userRow : styles.doctorRow,
                ]}
              >
                <View
                  style={[
                    styles.bubble,
                    isUser ? styles.userBubble : styles.doctorBubble,
                  ]}
                >
                  <Text style={isUser ? styles.userText : styles.doctorText}>
                    {message.text}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.inputBar}>
          <TextInput
            placeholder="Aa"
            placeholderTextColor="#8e8e93"
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton} activeOpacity={0.7}>
            <Ionicons name="send" size={22} color="#0084ff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  keyboardAvoidingView: { flex: 1 },
  messagesList: { flex: 1 },
  messagesContainer: { paddingHorizontal: 16, paddingVertical: 16 },
  messageRow: { flexDirection: 'row', marginVertical: 4, width: '100%' },
  userRow: { justifyContent: 'flex-end' },
  doctorRow: { justifyContent: 'flex-start' },
  bubble: { maxWidth: '75%', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 18 },
  userBubble: { backgroundColor: '#0084ff', borderBottomRightRadius: 4 },
  doctorBubble: { backgroundColor: '#f1f0f0', borderBottomLeftRadius: 4 },
  userText: { color: '#ffffff', fontSize: 16, lineHeight: 20 },
  doctorText: { color: '#000000', fontSize: 16, lineHeight: 20 },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f7',
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000000',
    maxHeight: 100,
  },
  sendButton: { marginLeft: 12, padding: 4 },
});
