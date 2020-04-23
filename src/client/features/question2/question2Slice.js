import { createSlice } from '@reduxjs/toolkit';
import { apiInstance } from '../../restcountries-service';
import { fixNonSerializable } from '../../core/utils';

const question2Slice = createSlice({
  name: 'question2',
  initialState: {
    isLoading: false,
    error: null,
    country: null,
  },
  reducers: {
    getCountriesStart: (state) => {
      state.isLoading = true;
    },
    getCountriesSuccess(state, { payload }) {
      state.country = payload;
      state.isLoading = false;
      state.error = null;
    },
    getCountriesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCountriesStart, getCountriesSuccess, getCountriesFailure } = question2Slice.actions;

export default question2Slice.reducer;

export const fetchCountries = (countries) => async (dispatch) => {
  try {
    dispatch(getCountriesStart());
    const country = await getCountries(countries);
    dispatch(getCountriesSuccess(country));
  } catch (err) {
    dispatch(getCountriesFailure(err.toString()));
  }
};

const getCountries = (countries) => {
  return new Promise((resolve, reject) => {
    apiInstance.getAll(
      {
        countries: countries.join(','),
      },
      (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(fixNonSerializable(data));
        }
      }
    );
  });
};
