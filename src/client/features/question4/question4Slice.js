import { createSlice } from '@reduxjs/toolkit';
import { getCountries } from '../../restcountries-service';

const question4Slice = createSlice({
  name: 'question4',
  initialState: {
    isLoading: false,
    error: null,
    countries: null,
    search: 'Malta'
  },
  reducers: {
    getCountriesStart: (state) => {
      state.isLoading = true;
    },
    getCountriesSuccess(state, { payload }) {
      state.countries = payload;
      state.isLoading = false;
      state.error = null;
    },
    getCountriesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

const { getCountriesStart, getCountriesSuccess, getCountriesFailure, setSearch } = question4Slice.actions;

export default question4Slice.reducer;

export const fetchCountries = (countries) => async (dispatch) => {
  try {
    dispatch(getCountriesStart());
    const data = await getCountries(countries);
    dispatch(getCountriesSuccess(data));
  } catch (err) {
    dispatch(getCountriesFailure(err.toString()));
  }
};


