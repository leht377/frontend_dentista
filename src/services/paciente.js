import axios from 'axios';
const baseurl = 'api/patient';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(baseurl, config);
  return response.data;
};

const getOne = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.get(`${baseurl}/${id}`, config);
  return response.data[0];
};

const create = async (newPatient) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseurl, newPatient, config);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(`${baseurl}/${id}`, config);
  return response.status;
};

const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.put(`${baseurl}/${id}`, newObject, config);
  return response.data;
};
// eslint-disable-next-line
export default { setToken, create, getAll, remove, getOne, update };
