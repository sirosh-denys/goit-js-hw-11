import axios from 'axios';
import Notiflix from 'notiflix';

export default async function getPictures(name) {
  try {
    const response = await axios.get(name);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}