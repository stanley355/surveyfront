import axios from 'axios';

const AxiosAPI = async (options:any) => {
  const { data } = await axios(`${options.path}`, {
    method: options.method,
    headers: {
      'content-type': 'application/json;charset=utf-8',
      ...(options.AuthorizationToken ? { Authorization: options.AuthorizationToken } : ''),
    },
    ...(options.data ? { data: options.data } : ''),
  });
  return { data };
}

export default AxiosAPI;