import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Button

} from "react-native";





const App = () => {

  const [InputEnabled, setInputEnabled] = useState('flex');
  const [AddEnabled, setAddEnabled] = useState('none');
  const [handleIcon, setHandleIcon] = useState('add');
  const [todoList, setTodoList] = useState([]);
  const [text, onChangeText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const Item = ({ title }) => (
    <View style={styles.listContainer}>
      <Text style={{ ...styles.textList, paddingHorizontal: 30 }}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          //deleteTodo(title)
          onHandleModal(title)
        }}
      >
        <View style={{ ...styles.iconContainer, position: 'relative', marginRight: 15, height: 20, width: 20 }} >
          <Icon name='delete' color="#9b59b6" size={15} />
        </View>
      </TouchableOpacity >

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
      >
        <View style={styles.modalContainerContent}>
          <View style={styles.modalContentText}>
            <Text >Desea borrar el item "{selectedItem}"?</Text>

          </View>
          <View style={styles.modalContainerButton}>
            <View style={styles.modalButton}>
              <Button
                title='Si'
                color="#841584"
                onPress={() => deleteTodo(selectedItem)}
              />
            </View>
            <View style={styles.modalButton}>
              <Button
                title='No'
                color="#841584"
                onPress={() => {
                  setModalVisible(false)
                  setSelectedItem({});
                }}
              />
            </View>
          </View>

        </View>
      </Modal>
    </View >
  );



  const handleAddButton = () => {
    setInputEnabled(InputEnabled === 'none' ? 'flex' : 'none');
    setHandleIcon(handleIcon === 'add' ? 'remove' : 'add');

    onChangeText("");
    if (handleIcon === 'remove' || text === "") {
      setAddEnabled('none');
    }
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, text]);
    setInputEnabled('none');
    setAddEnabled('none')
    setHandleIcon('add');

  };

  const handleOnChangeText = (text) => {
    onChangeText(text);
    if (text === "") {
      setAddEnabled('none');
    } else {
      setAddEnabled('flex');
    }
  };


  const deleteTodo = todoId => {
    setTodoList(todoList.filter(todo => todo !== todoId));
    setSelectedItem({});
    setModalVisible(false)
  };

  const onHandleModal = todoId => {
    setSelectedItem(todoList.find(todo => todo === todoId));
    setModalVisible(!modalVisible);
  }


  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.headerContainer}>
        <Text style={styles.textHeader}>Para Recordar</Text>
        <TouchableOpacity
          onPress={() => { setTodoList("") }}
        >
          <View style={styles.iconContainer}>
            <Icon name='delete' color="#9b59b6" size={30} />
          </View>
        </TouchableOpacity>


      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}

      />



      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleAddButton}
        >
          <View style={styles.iconContainer}>
            <Icon name={handleIcon} color="#9b59b6" size={30} />
          </View>
        </TouchableOpacity>

        <View style={[styles.inputContainer, { display: InputEnabled }]} >
          <TextInput
            placeholder="Agrega una nueva tarea"
            onChangeText={handleOnChangeText}
            value={text}
          />
        </View>
        <TouchableOpacity
          onPress={handleAddTodo}
        >
          <View style={[styles.iconContainer, { display: AddEnabled, backgroundColor: '#27ae60', }]}>
            <Icon name='done' color="white" size={30} />
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#9b59b6",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  textHeader: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    paddingVertical: 30,
  },
  textList: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSection: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#9b59b6',
  },
  inputContainer: {
    height: 50,
    paddingHorizontal: 20,
    elevation: 40,
    backgroundColor: 'white',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalContainerContent: {
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 200,
    elevation: 3,
    backgroundColor: "white",
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20


  },
  modalContainerButton: {
    alignItems: 'center',
    elevation: 3,
    flexDirection: 'row'

  },
  modaTitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 25,
    marginTop: 25,
  },
  modalContent: {
    paddingHorizontal: 25,
  },
  modalContentText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 20,
    textTransform: 'uppercase'
  },
  modalButton: {
    marginVertical: 10,
    paddingHorizontal: 25,


  }
})
export default App;
