import React, { useEffect, useState } from 'react';
import { useStore } from '../../store/todoStore';
import { AddIcon, Text, Box, Button, Center, CheckIcon, FlatList, Heading, HStack, Icon, IconButton, Input, useColorModeValue, useToast, VStack } from 'native-base';
import TodoItem from './TodoItem';

const TodoListScreen = () => {
  const todoList = useStore(state => state.todoList);
  const addTodo = useStore(state => state.addTodo);
  const setNameTodo = useStore(state => state.setNameTodo);
  const setDoneTodo = useStore(state => state.setDoneTodo);
  const removeTodo = useStore(state => state.removeTodo);
  const getTodoList = useStore(state => state.getTodoList);
  const saveTodo = useStore(state => state.saveTodo);

  const [inputValue, setInputValue] = useState("");

  const toast = useToast();

  const onAddTodo = () => {
    addTodo(inputValue);
  };

  const renderItem = ({ item }) => {
    return (
      <TodoItem
        data={item}
        setIsDoneItem={setDoneTodo}
        deleteItem={removeTodo}
        editItem={setNameTodo}
      />
    );
  };

  const fetchTodoList = async () => {
    await getTodoList();
  };

  useEffect(() => {
    // fetchTodoList();
    // getTodoList();
  }, []);

  useEffect(() => {
    console.log("todoList", todoList);
  }, [todoList]);


  return (
    <Box
      w="100%"
      h="100%"
      bg={useColorModeValue("warmGray.50", "coolGray.800")}>
      <Box
        backgroundColor="red"
        w="100%"
        h={50}
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Button
          size="md"
          mx={2} backgroundColor="warning.300" borderRadius="sm" variant="solid" leftIcon={<CheckIcon size="sm" color="warmGray.50" />}
          onPress={() => {
            saveTodo();
            toast.show({
              description: "Saved!"
            });
          }}>
          <Text fontSize="xl" color="warmGray.50">Save</Text>
        </Button>
      </Box>
      <Center>
        <Box w="80%">
          <Center>
            <Heading size="md" my={2}>To-do List</Heading>
          </Center>
          <VStack space={4}>
            <HStack>
              <Input flex={1} onChangeText={v => setInputValue(v)} value={inputValue} placeholder="Add Task" />
              <IconButton disabled={inputValue === ""} mx={2} colorScheme="success" borderRadius="sm" variant="solid" icon={<AddIcon size="sm" color="warmGray.50" />} onPress={onAddTodo} />
            </HStack>
          </VStack>
          <FlatList
            data={todoList}
            extraData={[todoList]}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </Box>
      </Center>
    </Box>
  )
}

export default TodoListScreen;