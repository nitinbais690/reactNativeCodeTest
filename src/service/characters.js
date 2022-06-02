import axios from 'axios';

export const fetchAllCharacter = async () =>
  await axios.get('https://thronesapi.com/api/v2/Characters');
