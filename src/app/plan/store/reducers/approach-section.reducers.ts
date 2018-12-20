import * as fromApproachSection from '../actions/approach-section.actions';

export interface DomainState {
  data: any[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialStateDomain: DomainState = {
  data: null,
  loaded: false,
  loading: false,
  error: null,
};

export function reducerDomain(state = initialStateDomain, action: fromApproachSection.ApproachSectionActions): DomainState {
  switch (action.type) {
    case fromApproachSection.LOAD_DOMAIN: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromApproachSection.LOAD_DOMAIN_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromApproachSection.LOAD_DOMAIN_FAIL: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error: error,
      };
    }

    case fromApproachSection.RESET_DOMAIN: {
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
      };
    }
  }
  return state;
}

export const getDomain = (state: DomainState) => state;
export const getDomainLoading = (state: DomainState) => state.loading;

export const initialState = {
  data: [],
  loaded: false,
  loading: false,
  error: null,
};

export function mainReducer(type, entity) {

  function reducer(state = initialState, action: any) {
    switch (action.type) {
      case `LOAD_${type}`: {
        return {
            ...state,
            loading: false,
            loaded: false,
            data: [],
        };
      }
      case `LOAD_${type}_SUCCESS`: {
        const data = action.payload;
        console.log('datadatadata', data);
        return {
            ...state,
            loading: false,
            loaded: true,
            data: data
        };
      }
      case `LOAD_${type}_FAIL`: {
        const error = action.payload;
        return {
          ...state,
          loading: false,
          loaded: false,
          error: error,
        };
      }
      case `RESET_${type}`: {
        return {
          ...state,
          loading: false,
          loaded: false,
          data: [],
          error: null
        };
      }
      default:
        return state;
    }
  }

  return (state = initialState, action: any) => {
    switch (entity) {
      case entity:
        console.log('entity', entity);
        console.log('action', action);
        return reducer(state, action);
      default:
        return state;
    }
  };

}

// export const createDynamicReducer = (type: string) => {
//   return (state = initialState, action: any) => {
//   };
// };

// export const getDomain = (state) => state;
// export const getDomainLoading = (state) => state.loading;
export const getPlanCareEndGoal = (state) => state;
export const getPlanCareEndGoalLoading = (state) => state.loading;
