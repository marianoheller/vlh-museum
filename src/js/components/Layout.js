import React from "react"
import { connect } from "react-redux"

import CollectionsCollage from "./CollectionsCollage"


@connect((store) => {
  return {
    collectionCount: store.collections.collections.count,
  };
})


export default class Layout extends React.Component {

  constructor() {
    super();
    this.itemsPerPag = 20;
  }

  render() {
    const { collectionCount } = this.props;
    const pageCount = Math.ceil(collectionCount/this.itemsPerPag);

    return  <div>
              <h3>Collection Index</h3>
              <h6>Collection count: {collectionCount}</h6>
              <h6>Pages total: {pageCount}</h6>
              <hr />

              <CollectionsCollage />

            </div>
  }
}
