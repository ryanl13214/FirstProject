
const messages = [
  {
    _id: 1,
    text: 'Welcome to chatting with Dr Daisy',
    createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
    system: true,
  },
  {
    _id: 2,
    text: 'Hello i am Dr Daisy',
    createdAt: new Date(Date.UTC(2016, 5, 12, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Dr Daisy',
      avatar: require('../imgs/drdaisychaticon.jpg'),
    },
  },
  {
    _id: 6,
    text: 'Feel free to chat with me!',
    createdAt: new Date(Date.UTC(2016, 5, 15, 18, 20, 0)),
    user: {
      _id: 2,
      name: 'Dr Daisy',
      avatar: require('../imgs/drdaisychaticon.jpg'),
    },
  },   
  {
    _id: 7,
    text: `Hello this is an example`,
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Dr Daisy',
      avatar: require('../imgs/drdaisychaticon.jpg'),
    },
  },
];

export default messages;
