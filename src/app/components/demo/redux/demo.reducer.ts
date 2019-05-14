import * as constants from './demo.constants';

export interface DemoState {
  planet?: any;
  residents?: any;
  loading: boolean;
  loaded: boolean;
}

export interface Action {
  payload: any;
  type: string;
  error: any;
}

const initialState = {
  planet: {},
  residents: {},
  loading: false,
  loaded: false,
};

export function reducer(state: DemoState = initialState, action: Action) {
  switch (action.type) {
    case constants.LOAD_PLANET_DATA_PENDING: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }
    case constants.LOAD_PLANET_DATA_SUCCESS: {
      return {
        ...state,
        planet: action.payload,
        loading: false,
        loaded: true,
      };
    }

    case constants.LOAD_PLANET_DATA_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    }
    case constants.LOAD_RESIDENT_PENDING: {
      return {
        ...state,
        residents: {
          ...state.residents,
          [action.payload]: {
            id: action.payload,
            loading: true,
            loaded: false,
          },
        },
      };
    }

    case constants.LOAD_RESIDENT_SUCCESS: {
      return {
        ...state,
        residents: {
          ...state.residents,
          [action.payload.url]: {
            id: action.payload.url,
            data: action.payload.data,
            loading: false,
            loaded: true,
          },
        },
      };
    }
    case constants.LOAD_RESIDENT_FAILURE:
      return {
        ...state,
        residents: {
          ...state.residents,
          [action.payload]: {
            loading: false,
            loaded: false,
            id: action.payload,
            error: action.error,
          },
        },
      };
    default:
      return state;
  }
}
