import * as constants from './demo.constants';

export const loadPlanetDataPending = () => ({
  type: constants.LOAD_PLANET_DATA_PENDING,
});

export const loadPlanetDataSuccess = data => ({
  type: constants.LOAD_PLANET_DATA_SUCCESS,
  payload: data,
});

export const loadPlanetDataFailure = error => ({
  type: constants.LOAD_PLANET_DATA_FAILURE,
  error,
});

export const loadResidentPending = url => ({
  type: constants.LOAD_RESIDENT_PENDING,
  payload: url,
});

export const loadResidentSuccess = (data, url) => ({
  type: constants.LOAD_RESIDENT_SUCCESS,
  payload: { data, url },
});

export const loadResidentFailure = (error, url) => ({
  type: constants.LOAD_RESIDENT_FAILURE,
  payload: url,
  error,
});
