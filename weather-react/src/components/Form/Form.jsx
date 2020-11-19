import React, { useCallback } from "react";
import style from "./styles.module.css";

export function Form({ children, onSubmit }) {
  const onSubmitHandler = useCallback((evt) => {
    evt.preventDefault();
    onSubmit()
  }, [onSubmit]);
  return (
    <form className={style.searchBar} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
}
