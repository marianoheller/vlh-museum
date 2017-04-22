import axios from "axios";

export function fetchQuery( {
    culture="nl",
    ps=20,
    p=0,
    q="",
    maker="",
    type="",
    material="",
    technique="",
} = {}) {
    const request = `https://www.rijksmuseum.nl/api/${culture}/collection?key=fovSuaC4&format=json&ps=${ps}&p=${p}&q=${q}&imgonly=True`;
    console.log(request);
    return function(dispatch) {
        dispatch({type: "FETCH_QUERY_PENDING", payload: null})
        axios.get(request)
        .then((response) => {
            dispatch({type: "FETCH_QUERY_FULFILLED", payload: response.data})
        })
        .catch((err) => {
            dispatch({type: "FETCH_QUERY_REJECTED", payload: err})
        })
  }
}

