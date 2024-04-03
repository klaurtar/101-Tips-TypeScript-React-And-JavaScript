type StatusCode = 200 | 400 | 500;

type Status = 'success' | 'error';

type AsyncResponse<Type> = {
  statusCode: StatusCode;
  status: Status;
  data: Type;
};

const fetchUsers = (): AsyncResponse<{ users: string[] }> => {
  // makes an HTTP request
  // returns response meeting AsyncResponse<{users: string[]}> requirement
  return {
    statusCode: 200,
    status: 'success',
    data: { users: ['Ryan'] },
  };
};
