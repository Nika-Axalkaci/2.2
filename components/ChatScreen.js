import React from "react";
import { View, FlatList } from "react-native";
import { TextInput, IconButton } from "react-native-paper";

const ChatScreen = ({ route }) => {
  const [messages, setMessages] = React.useState([]);
  const { name } = route.params;

  const sendMessage = (text) => {
    const newMessage = { text, sender: "me" };
    setMessages([...messages, newMessage]);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MessageBubble text={item.text} sender={item.sender} />
        )}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          label="Type a message..."
          style={{ flex: 1, margin: 10 }}
          onChangeText={sendMessage}
        />
        <IconButton icon="send" size={24} onPress={() => sendMessage()} />
      </View>
    </View>
  );
};

export default ChatScreen;
