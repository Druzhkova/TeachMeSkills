import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Header, Form, TodoItem } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO, CHANGE_TODO_COMPLETION_STATUS, DELETE_TODO, CHANGE_CURRENT_PAGE } from "./actions";

export function TodoList() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.todoList.currentPage);
  const todos = useSelector((state) => state.todoList.todos);

  const addTodo = useCallback((inputValue) => {
    dispatch({ type: ADD_TODO, payload: inputValue});
  }, [dispatch]);

  const toggleCompletion = useCallback((todoId) => {
    dispatch({ type: CHANGE_TODO_COMPLETION_STATUS, payload: todoId});
  }, [dispatch])

  const deleteTodo = useCallback((todoId) => {
    dispatch({ type: DELETE_TODO, payload: todoId});
  }, [dispatch])

  const setCurrentPage = useCallback(( nextPage ) => {
    dispatch({ type: CHANGE_CURRENT_PAGE, payload: nextPage});
  }, [dispatch])

  const filteredTodos = todos.filter((todo) => {
    if (currentPage === "active") {
      return todo.isCompleted === false;
    }

    if (currentPage === "done") {
      return todo.isCompleted === true;
    }

    return true;
  });

  const isNoTodos = filteredTodos.length === 0;

  const emptyText = useMemo(() => {
    if (currentPage === "all" || currentPage === "active") {
      return "Keep calm. There are no todos for today";
    }
    return "You haven't done anything yet ";
  }, [currentPage]);

  return (
    <Container>
      <Header onButtonClick={setCurrentPage} page={currentPage} />
      <Form onSubmit={addTodo} />
      {
        isNoTodos ? (
          <span>{emptyText}</span>
        ) : (
          filteredTodos.map((todo) => (
            <TodoItem
              onChangeCompletionStatus={toggleCompletion}
              onDelete={deleteTodo}
              page={currentPage}
              title={todo.title}
              id={todo.id}
              isCompleted={todo.isCompleted}
            />
          ))
        ) // {...todos}
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
