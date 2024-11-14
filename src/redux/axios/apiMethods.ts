import APIKit from './index';

const StatusCodes = {
  Success: 1,
  Failure: 0,
  Unauthenticate: 2,
};

export const Method = {
  POST(url: string, body: any, header: any) {
    return APIKit.post(url, body, {
      headers: header,
    })
      .then(async data => {
        if (data.status >= 200 && data.status < 400) {
          return {
            status: StatusCodes.Success,
            result: data.data,
          };
        }
      })
      .catch(async error => {
        if (error.response.status === 403 || error.response.status === 401) {
          return {
            result: {message: error.response.data.message},
            status: StatusCodes.Unauthenticate,
          };
        } else if (!error.response) {
          return {
            result: {message: 'Timeout : server issue'},
            status: StatusCodes.Failure,
          };
        } else if (error.response.data.error) {
          return {
            result: {message: error.response.data.error},
            status: StatusCodes.Failure,
          };
        } else {
          return {
            result: {message: error.response.data.message},
            status: StatusCodes.Failure,
          };
        }
      });
  },
};
