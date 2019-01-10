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

export function stateReducer(
  state = {},
  action: any,
) {
  switch (action.type) {
    case fromApproachSection.LOAD_PLAN_CARE_END_GOAL: {
      const loading = {
        ...state,
        [action.payload.id]: {
          items: [],
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.LOAD_PLAN_CARE_END_GOAL_SUCCESS: {
      const endGoals = action.payload.planCareEndGoal;
      const entities = getNormalizedList(endGoals);
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: entities,
          loaded: true,
          loading: false
        }
      };

      return loaded;
    }
    case fromApproachSection.CREATE_PLAN_CARE_END_GOAL: {
      const oldEndGoalsList = state[action.payload.id].items;
      const loading = {
        ...state,
        [action.payload.id]: {
          items: {...oldEndGoalsList},
          loaded: false,
          loading: true
        }
      };
      return loading;
    }
    case fromApproachSection.CREATE_PLAN_CARE_END_GOAL_SUCCESS: {
      const oldEndGoalsList = state[action.payload.id].items;
      const newEndGoalsList = action.payload.planCareEndGoal;
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: {...oldEndGoalsList, [newEndGoalsList.id]: newEndGoalsList},
          loaded: true,
          loading: false
        },
      };
      return loaded;
    }

    case fromApproachSection.UPDATE_PLAN_CARE_END_GOAL: {
      const loading = {
        ...state,
        [action.payload.id]: {
          items: {
            ...state[action.payload.id].items,
            [action.payload.endGoalID]: {
              ...state[action.payload.id].items[action.payload.endGoalID],
            }
          },
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.UPDATE_PLAN_CARE_END_GOAL_SUCCESS: {
      const endGoals = state[action.payload.id].items;
      const updatedEndGoal = Object.assign({}, state[action.payload.id].items[action.payload.endGoalID], action.payload.planCareEndGoal);
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: {
            ...endGoals,
            [action.payload.endGoalID]: { ...updatedEndGoal }
          },
          loaded: true,
          loading: false
        }
      };
      return loaded;
    }

    case fromApproachSection.DELETE_PLAN_CARE_END_GOAL: {
      const loading = {
        ...state,
        [action.payload.id]: {
          items: { ...state[action.payload.id].items },
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.DELETE_PLAN_CARE_END_GOAL_SUCCESS: {
      const { [action.payload.endGoalID]: removed, ...newItems } = state[action.payload.id].items;
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: newItems,
          loaded: true,
          loading: false
        }
      };
      return loaded;
    }

    case fromApproachSection.CREATE_PLAN_CARE_GOAL: {
      const oldGoalsList = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const loading = {
        ...state,
        [action.payload.id]: {
          items: {
            ...state[action.payload.id].items,
            [action.payload.endGoalID]: {
              ...state[action.payload.id].items[action.payload.endGoalID],
              careGoals: {
                ...oldGoalsList
              },
            }
          },
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.CREATE_PLAN_CARE_GOAL_SUCCESS: {
      const oldGoalsList = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const newGoalsList = action.payload.planCareGoal;
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: {
            ...state[action.payload.id].items,
            [action.payload.endGoalID]: {
              ...state[action.payload.id].items[action.payload.endGoalID],
              careGoals: {
                ...oldGoalsList,
                [newGoalsList.id]: newGoalsList
              },
            }
          },
          loaded: true,
          loading: false
        }
      };
      return loaded;
    }

    case fromApproachSection.UPDATE_PLAN_CARE_GOAL: {
      const endGoals = state[action.payload.id].items;
      const endGoal = state[action.payload.id].items[action.payload.endGoalID];
      const goals = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const goal = state[action.payload.id].items[action.payload.endGoalID].careGoals[action.payload.careGoalID];
      const loading = {
        ...state,
        [action.payload.id]: {
          items: { ...endGoals, [action.payload.endGoalID]: {
            ...endGoal,
            careGoals: {
              ...goals,
              [action.payload.careGoalID]: {
                ...goal
              }
            }
          }
        },
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.UPDATE_PLAN_CARE_GOAL_SUCCESS: {
      const endGoals = state[action.payload.id].items;
      const endGoal = state[action.payload.id].items[action.payload.endGoalID];
      const goals = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const goal = state[action.payload.id].items[action.payload.endGoalID].careGoals[action.payload.careGoalID];
      const updatedGoal = Object.assign({}, goal, action.payload.planCareGoal);
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: {
            ...endGoals,
            [action.payload.endGoalID]: {
              ...endGoal,
              careGoals: {
                ...goals,
                [action.payload.careGoalID]: {
                  ...updatedGoal
                }
              }
            }
          },
          loaded: true,
          loading: false
        }
      };
      return loaded;
    }

    case fromApproachSection.DELETE_PLAN_CARE_GOAL: {
      const endGoals = state[action.payload.id].items;
      const endGoal = state[action.payload.id].items[action.payload.endGoalID];
      const goals = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const goal = state[action.payload.id].items[action.payload.endGoalID].careGoals[action.payload.careGoalID];
      const r = 1;
      const loading = {
        ...state,
        [action.payload.id]: {
          items: { ...endGoals, [action.payload.endGoalID]: {
            ...endGoal,
            careGoals: {
              ...goals,
              [action.payload.careGoalID]: {
                ...goal
              }
            }
          }
        },
          loaded: false,
          loading: true
        }
      };
      return loading;
    }

    case fromApproachSection.DELETE_PLAN_CARE_GOAL_SUCCESS: {
      const endGoals = state[action.payload.id].items;
      const endGoal = state[action.payload.id].items[action.payload.endGoalID];
      console.log('action.payload', action.payload);
      console.log('goals', state);
      const goals = state[action.payload.id].items[action.payload.endGoalID].careGoals;
      const { [action.payload.careGoalID]: removed, ...newCareGoals } = goals;
      const loaded = {
        ...state,
        [action.payload.id]: {
          items: {
            ...endGoals,
            [action.payload.endGoalID]: {
              ...endGoal,
              careGoals: newCareGoals
            }
          },
          loaded: true,
          loading: false
        }
      };
      return loaded;
    }
    default:
      return state;
  }
}

export function persistStateReducer(_reducer) {
  return (state, action) => {
    const nextState = _reducer(state, action);
    return nextState;
  };
}

export function reducerSubEntities(state, action) {
  return persistStateReducer(stateReducer)(state, action);
}

function getNormalizedList(list) {
  return list.reduce(
    (eg, endGoals) => {
      return {
        ...eg,
        [endGoals.id]: {
          ...endGoals,
          careGoals: endGoals.careGoals ? endGoals.careGoals.reduce(
            (g, goals) => {
              return {
                ...g,
                [goals.id]: {
                  ...goals,
                },
              };
            }, {}
          ) : []
        },
      };
    }, {}
  );
}
