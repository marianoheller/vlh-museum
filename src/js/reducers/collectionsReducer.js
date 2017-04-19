export default function reducer(state={
    collections: {
        count: 0,
        artObjects: [],
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_COLLECTIONS_PENDING": {
        return {...state, fetching: true}
      }
      case "FETCH_COLLECTIONS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_COLLECTIONS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          collections: action.payload,
        }
      }
    }

    return state
}
