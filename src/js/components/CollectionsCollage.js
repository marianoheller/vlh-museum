import React from "react"
import { connect } from "react-redux"
import ReactPaginate from "react-paginate"
import Masonry from "masonry-layout"



@connect((store) => {
  return {
    collections: store.collections.collections.artObjects,
  };
})


export default class CollectionsCollage extends React.Component {

  componentDidUpdate() {
    var msnry = new Masonry( '.grid', {
      itemSelector: '.grid-item',
      columnWidth: 200
    });
  }

  render() {
    const { collections } = this.props;

    const imagesCollections = collections.map( (elem, i) => {
      return  <div class="grid-item" id={elem.id} key={i}>
                {/*<a href={elem.links.web} key={i}>
                  <img key={i} src={elem.webImage.url} />
                </a>*/}
                <img key={i} src={elem.webImage.url} />
              </div>
    } );

    return  <div class="grid">
              <div class="grid-sizer"></div>
              {imagesCollections}
            </div>
  }
}
