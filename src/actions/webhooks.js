import Axios from '../utils/axiosConfig';

export const ActionTypes = {
  SET_WEBHOOKS: 'SET_WEBHOOKS',
  ADD_WEBHOOK: 'ADD_WEBHOOK',
  REMOVE_WEBHOOK: 'REMOVE_WEBHOOK',
  UPDATE_WEBHOOK: 'UPDATE_WEBHOOK',
};

export const setWebhooks = (webhooks) => {
  return {
    type: ActionTypes.SET_WEBHOOKS,
    payload: {
      webhooks,
    },
  };
};

export const startSetWebhooks = () => {
  return (dispatch, getState) => {
    const username = getState().auth.username;
    return Axios.get(`/users/${username}/services/webhooks`)
      .then((res) => {
        dispatch(setWebhooks(res.data.webhooks));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addWebhook = (webhook) => {
  return {
    type: ActionTypes.ADD_WEBHOOK,
    payload: {
      webhook,
    },
  };
};

export const startAddWebhook = (webhook) => {
  return (dispatch, getState) => {
    const username = getState().auth.username;
    return Axios.post(`/users/${username}/services/webhooks`, {
      name: webhook.name,
    })
      .then((res) => {
        dispatch(addWebhook(res.data.webhook));
        let str = res.data.message;
        return {
          message: str.charAt(0).toUpperCase() + str.slice(1) + '.',
        };
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          let str = err.response.data.message;
          throw new Error(str.charAt(0).toUpperCase() + str.slice(1) + '.');
        } else {
          throw err;
        }
      });
  };
};
// export const removeWebhook = (id) => {
//   return {
//     type: ActionTypes.REMOVE_WEBHOOK,
//     payload: {
//       id,
//     },
//   };
// };

export const updateWebhook = (id, data) => {
  return {
    type: ActionTypes.UPDATE_WEBHOOK,
    payload: {
      id,
      data,
    },
  };
};

export const startUpdateWebhook = (id, data) => {
  return (dispatch, getState) => {
    const username = getState().auth.username;
    return Axios.put(`/users/${username}/services/webhooks/${id}`, {
      name: data.name,
      isEnable: data.enable,
    })
      .then((res) => {
        dispatch(updateWebhook(id, data));
        let str = res.data.message;
        return {
          message: str.charAt(0).toUpperCase() + str.slice(1) + '.',
        };
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          let str = err.response.data.message;
          throw new Error(
            'Unable to update: ' +
              str.charAt(0).toUpperCase() +
              str.slice(1) +
              '.'
          );
        } else {
          throw 'Unable to update: ' + err;
        }
      });
  };
};
