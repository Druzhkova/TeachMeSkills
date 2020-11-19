import React from "react";
import style from "./styles.module.css";

export function Button({ onclick, children }) {
  return <button className={style.button} onclick={onclick}>{children}</button>;
}
