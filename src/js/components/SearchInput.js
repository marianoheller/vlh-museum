import React from "react"
import { connect } from "react-redux"


import { fetchQuery } from "../actions/searchInputActions"

import { debounce } from "../others/Debounce"



@connect( (store) => {
  return {
    matchesCount: store.searchInput.collections.count,
    artListQuery: store.searchInput.collections.artListQuery,
  }
})


export default class SearchInput extends React.Component {

  constructor() {
    super();
    this.minLengthForQuery = 3;
    this.handleInputChange = this.handleInputChange.bind(this);
    this.fetchQueryData = debounce(this.fetchQueryData.bind(this), 800);
  }

  componentWillMount() {
    console.log(this.props.artListQuery);
  }

  handleInputChange(e) {
    const value = e.target.value.trim();
    console.log("Salta change", );
    if ( value.length > this.minLengthForQuery) {
      this.fetchQueryData(value);
    }
    else {
      //Piso el debounce del query original 
      //Asi si escriben y borran rapido (pasando el minQueryLength no ejecuto el query
      this.fetchQueryData("");
    }
  }

  fetchQueryData(value) {
    if (value.length > this.minLengthForQuery) {
      console.log("Fetching:", value);
      this.props.dispatch(fetchQuery( {
        q: value,
      }));    
    }    
  }

  handleSearchClick() {

  }

  render() {

    let dataListOptions = [];
    if ( this.props.matchesCount ) {
      dataListOptions = this.props.artListQuery.map( (element, index) => {
        return <option key={index} value={element.title} />
      });
    }

    return  <div>
                <form>
                    <input list={"dataListSearchInput"} onKeyUp={this.handleInputChange}/>
                    <button onClick={this.handleSearchClick.bind(this)}>Buscar</button>
                    <datalist id={"dataListSearchInput"}>
                      {dataListOptions}
                    </datalist>
                </form>
            </div>
  }
}
