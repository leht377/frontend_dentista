import axios from 'axios';
const baseurl = '/api/allergy';

const getAll = async () => {
  const allergies = await axios.get(baseurl);
  return allergies.data;
};
// eslint-disable-next-line
export default { getAll };
