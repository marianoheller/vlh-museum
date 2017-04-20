import axios from "axios";

export function fetchCollections( {
    culture="nl",
    ps=9,
    p=0,
    q="",
    maker="",
    type="",
    material="",
    technique="",
} = {}) {
    const request = `https://www.rijksmuseum.nl/api/${culture}/collection?key=fovSuaC4&format=json&ps=${ps}&p=${p}&q=${q}`;
    console.log(request);
    return function(dispatch) {
        dispatch({type: "FETCH_COLLECTIONS_PENDING", payload: null})
        axios.get(request)
        .then((response) => {
            dispatch({type: "FETCH_COLLECTIONS_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_COLLECTIONS_REJECTED", payload: err})
        })
  }
}

