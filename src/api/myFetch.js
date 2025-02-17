import {baseUrl} from "@/constants/urls.js";
// попробуй использовать axios для запроса
// использую функцию в других компонетах


export async function getJsonplaceholderData(pathname) {
  return await fetch(baseUrl + pathname)
    .then( (response) =>  response.json())
    .then( (data) =>  data);
}