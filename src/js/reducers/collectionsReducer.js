export default function reducer(state={
    collections: {
        count: 0,
        artObjects: [],
    },
    fetching: false,
    fetched: false,
    error: null,
    currentPage: 1,
    totalPages: 0,
  }, action) {
    switch (action.type) {
      case "FETCH_COLLECTIONS_PENDING": {
        return {
          ...state
        }
      }
      case "FETCH_COLLECTIONS_REJECTED": {
        return {
          ...state, 
          fetching: false, 
          error: action.payload,
        }
      }
      case "FETCH_COLLECTIONS_FULFILLED": {
        const collectionCount = action.payload.count;
        const itemsPerPag = action.payload.artObjects.length;

        return {
          ...state,
          fetching: false,
          fetched: true,
          collections: action.payload,
          currentPage: state.currentPage + 1,
          totalPages: Math.ceil(collectionCount/itemsPerPag)
        }
      }
    }

    return state;
}
