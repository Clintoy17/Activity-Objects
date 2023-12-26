import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, ScrollView, Button, Image } from 'react-native';
import { styles } from './styles/style';

const userDataWithImages = [
  {
    firstName: 'Mark Gideon',
    lastName: 'Fudolig',
    nickname: 'Gids',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/gids.png'), 
  },
  {
    firstName: 'Clarence Jhon',
    lastName: 'Quijano',
    nickname: 'Rence',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/rence.png'), 
  },
  {
    firstName: 'Mike Lennard',
    lastName: 'Solijon',
    nickname: 'Tikalon',
    course: 'BSIT',
    year: 'Third Year',
    image: require('./assets/tikalon.jpg'), 
  },
  {
    firstName: 'Abel',
    lastName: 'Balate',
    nickname: 'Bel',
    course: 'BSIT',
    year: 'Fourth Year',
    image: require('./assets/bel.png'), 
  },
  {
    firstName: 'Raymond',
    lastName: 'Ganancial',
    nickname: 'Mon',
    course: 'BSIT',
    year: 'Fourth Year',
    image: require('./assets/mon.png'), 
  },
  {
    firstName: 'Michael Ray',
    lastName: 'Azucenas',
    nickname: 'Kel',
    course: 'BSIT',
    year: 'Second Year',
    image: require('./assets/mikel.png'), 
  },
];

const UserList = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {
      setSelectedUser(item);
      setModalVisible(true);
    }}>
      <Text style={styles.nickname}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.pt}>Choose your Uncle</Text>
      <FlatList
        data={userDataWithImages}
        keyExtractor={(item) => item.nickname}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {selectedUser && (
            <ScrollView>
              <Text style={styles.fullName}>
                {selectedUser.firstName} {selectedUser.lastName}
              </Text>
              <Text style={styles.name}>Nickname: {selectedUser.nickname}</Text>
              <Text style={styles.name}>Course: {selectedUser.course}</Text>
              <Text style={styles.name}>Year: {selectedUser.year}</Text>
              {selectedUser.image && <Image source={selectedUser.image} style={{ width: 400, height: 400 }} />}
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default UserList;