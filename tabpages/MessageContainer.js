
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: { borderWidth: 3, borderColor: 'rgba(0,0,0,0)' }, right: {} }}
    imageStyle={{ left: { borderWidth: 3, borderColor: 'rgba(0,0,0,0)' }, right: {} }}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: { borderColor: 'white', borderWidth: 1 },
      right: {},
    }}
    wrapperStyle={{
      left: { borderColor: 'white', borderWidth: 1 },
      right: {},
    }}
    bottomContainerStyle={{
      left: { borderColor: 'white', borderWidth: 1 },
      right: {},
    }}
    tickStyle={{}}
    usernameStyle={{ color: 'black', fontWeight: '100' }}
    containerToNextStyle={{
      left: { borderColor: 'navy', borderWidth: 1 },
      right: {},
    }}
    containerToPreviousStyle={{
      left: { borderColor: 'mediumorchid', borderWidth: 1 },
      right: {},
    }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{ backgroundColor: 'white' }}
    wrapperStyle={{ borderWidth: 1, borderColor: 'white' }}
    textStyle={{ color: 'crimson', fontWeight: '900' }}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      left: { backgroundColor: 'white' },
      right: { backgroundColor: 'white' },
    }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { backgroundColor: 'rgba(0,0,0,0)' },
      right: { backgroundColor: 'rgba(0,0,0,0)' },
    }}
    textStyle={{
      left: { color: 'black' ,paddingTop:5},
      right: { color: 'white' },
    }}
    linkStyle={{
      left: { color: 'black' },
      right: { color: 'black' },
    }}
    customTextStyle={{ fontSize: 20, lineHeight: 20 }}
  />
);

export const renderCustomView = ({ user }) => (
  <View style={{   alignItems: 'center' ,alignItems:"center",textAlign:"center" ,justifyContent:"center" }}>

  </View>
);
