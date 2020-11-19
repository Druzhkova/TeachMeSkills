import React from "react";
import style from "./style.module.css";

export function TableRow({data}) {
  const {city, country, temperature} = data;
  return (
    <tr className={style.tr}>
      <td className={style.td}>{city}</td>
      <td className={style.td}>{country}</td>
      <td className={style.td}>{temperature}</td>
      <td className={style.td}>{temperature}</td>
    </tr>
  );
}
