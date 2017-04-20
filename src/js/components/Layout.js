import React from "react"
import { connect } from "react-redux"
import ReactPaginate from 'react-paginate'

import CollectionsCollage from "./CollectionsCollage"

import { fetchCollections } from "../actions/collectionsActions"

@connect((store) => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets,
    collectionCount: store.collections.collections.count,
    collections: store.collections.collections.artObjects,
    collectionsFetching: store.collections.fetching,
  };
})


export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      pagination: {
        itemsPerPag: 20,
        itemsPerPagAvailable: [20,40,60],
        currentPage: 1,
        totalPages: 1,
      }
    }
  }

  getCollections() {
    const { itemsPerPag, currentPage } = this.state.pagination;
    this.props.dispatch(fetchCollections({
      ps: itemsPerPag,
      p: currentPage,
    }));
  }

  handleSelectChange(e){
    this.setState( {
      ...this.state,
      pagination: {
        ...this.state.pagination,
        itemsPerPag: e.target.value
      }
    });
  }

  handlePageClick = (data) => {
    this.setState({
      ...this.state,
        pagination: {
          ...this.state.pagination,
          currentPage: data.selected+1, //Toma la pag 1 como val 0
        }
      }, () => {
      this.getCollections();
    });
  };

  render() {
    const { collections, collectionCount } = this.props;
    const { itemsPerPagAvailable, itemsPerPag } = this.state.pagination;
    const pageCount = Math.ceil(collectionCount/itemsPerPag);

    const buttonFetch =  <button onClick={this.getCollections.bind(this)}>Load Collections</button>

    let fetchingAlert = null;
    if ( this.props.collectionsFetching ) {
      fetchingAlert = <p>Fetching...</p>
    }

    const itemsPerPageOptions = itemsPerPagAvailable.map( (element, i) => <option key={i} value={element}>{element}</option> );

    /*const imagesCollections = collections.map( (elem, i) => {
      return  <div id={elem.id} key={i}>
                <a href={elem.links.web} key={i}>
                  <img key={i} src={elem.webImage.url} />
                </a>
              </div>
    } );*/

    return  <div>
              <h3>Collection Index</h3>
              <h6>Collection count: {collectionCount}</h6>
              <h6>Pages total: {pageCount}</h6>
              <select onChange={this.handleSelectChange.bind(this)}>
                {itemsPerPageOptions}
              </select>
              {buttonFetch} {fetchingAlert}              
              {/*<ul>
                {idCollections}
              </ul>*/}

              <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick.bind(this)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />

              <CollectionsCollage />

            </div>
  }
}
