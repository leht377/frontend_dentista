import axios from 'axios';
const baseurl = 'api/user';

const create = async (newUser) => {
  const response = await axios.post(baseurl, newUser);
  return response.data;
};
// eslint-disable-next-line
export default { create };
