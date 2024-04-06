import { FC } from "react";
import { setRegions } from "./params-reducer";


export const getRegions = async () => {
  try {
    let selectedVacancies = await fetch(`https://api.hh.ru/areas`, {
      method: 'GET',
      headers: {
        'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
      },
    })
      .then(response => response.json())
      .then(data => data)
    return selectedVacancies
  } catch (e) {
    console.log('Ошибочка:', e)
    return 'ошибка'
  }
}