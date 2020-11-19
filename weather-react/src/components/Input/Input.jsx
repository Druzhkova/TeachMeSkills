import React, { useCallback } from "react";
import style from "./styles.module.css";

export function Input({ onChangeText, value }) {
  const onChange = useCallback(
    (evt) => {
      onChangeText(evt.target.value);
    },
    [onChangeText]
  );

  return (
    <input className={style.input} onChange={onChange} value={value}></input>
  );
}
