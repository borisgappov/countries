import { createSlice } from '@reduxjs/toolkit';
import { apiInstance } from '../../restcountries-service';
import { fixNonSerializable } from '../../core/utils';

const question1Slice = createSlice({
  name: 'question1',
  initialState: {
    isLoading: false,
    error: null,
    country: null,
  },
  reducers: {
    getCountryStart: (state) => {
      state.isLoading = true;
    },
    getCountrySuccess(state, { payload }) {
      state.country = payload;
      state.isLoading = false;
      state.error = null;
    },
    getCountryFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCountryStart, getCountrySuccess, getCountryFailure } = question1Slice.actions;

export default question1Slice.reducer;

export const fetchCountry = (countryName) => async (dispatch) => {
  try {
    dispatch(getCountryStart());
    const country = await getCountry(countryName);
    dispatch(getCountrySuccess(country));
  } catch (err) {
    dispatch(getCountryFailure(err.toString()));
  }
};

const getCountry = (countryName) => {
  return new Promise((resolve, reject) => {
    apiInstance.getByCountryName(countryName, (error, data, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(fixNonSerializable(data[0]));
      }
    });
  });
};
