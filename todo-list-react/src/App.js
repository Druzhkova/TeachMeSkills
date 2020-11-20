import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Header, Form, TodoItem } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState("all");
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((imputValue) => {
    setTodos((prev) => [
      ...prev,
      {
        title: imputValue,
        isCompleted: false,
        id: String(Math.random()),
      },
    ]);
  }, []);

  const toggleCompletion = useCallback(
    (todoId) => {
      const newTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const deleteTodo = useCallback((todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  }, [todos]);

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage} />
      <Form onSubmit={addTodo} />
      {
        todos.map((todo) => (
          <TodoItem
            onChangeCompletionStatus={toggleCompletion}
            onDelete={deleteTodo}
            title={todo.title}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        )) // {...todos}
      }
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin: 20px auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`;

export default App;
