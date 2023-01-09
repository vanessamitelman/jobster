import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { logoutUser } from './userSlice';
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../job/jobSlice';

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // logout user
    thunkAPI.dispatch(logoutUser(message));
    // clear jobs value
    thunkAPI.dispatch(clearAllJobsState());
    // clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    // console.log(error);
    return Promise.reject();
  }
};

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, user);
    return data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const { data } = await customFetch.post(url, user);
    return data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await customFetch.patch(url, user);
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
