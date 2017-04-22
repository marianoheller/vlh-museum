export default function reducer(state={
    collections: {
        count: 0,
        artListQuery: [],
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {
    switch (action.type) {
      case "FETCH_QUERY_PENDING": {
        return {
          ...state
        }
      }
      case "FETCH_QUERY_REJECTED": {
        return {
          ...state, 
          fetching: false, 
          error: action.payload,
        }
      }
      case "FETCH_QUERY_FULFILLED": {
        const artList = action.payload.artObjects.map( (element, index) => {
            return {
                title: element.title,
                author: element.principalOrFirstMaker,
            }
        });
        return {
          ...state,
          fetching: false,
          fetched: true,
          collections: {
              count: action.payload.count,
              artListQuery: artList,
          }
        }
      }
    }

    return state;
}
