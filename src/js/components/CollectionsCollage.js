import React from "react"
import { connect } from "react-redux"
import ReactPaginate from "react-paginate"
import Masonry from "react-masonry-component"
import VisibilitySensor from "react-visibility-sensor"


import { fetchCollections } from "../actions/collectionsActions"

import { debounce } from "../others/Debounce";




@connect((store) => {
  return {
    collections: store.collections.collections.artObjects,
    currentPage: store.collections.currentPage,
    hasMore: !store.collections.fetching,
  };
})


export default class CollectionsCollage extends React.Component {

  constructor() {
    super();
    const masonryOptions = {
        transitionDuration: 0,
        columnWidth: 1,
    };
    
    this.imagesCollections = [];

    this.state = {
      pagination: {
        itemsPerPag: 20,
        itemsPerPagAvailable: [20,40,60],
        currentPage: 1,
        totalPages: 1,
      }      
    };

    this.onChangeVisibilitySensor = debounce(this.onChangeVisibilitySensor,1000);
  }

  getCollections() {
    this.props.dispatch(fetchCollections( {
      p: this.props.currentPage,
    }));
  }

  onChangeVisibilitySensor(isVisible) {
    if (isVisible) {
      this.getCollections();
    }    
  }

  render() {
    const { collections } = this.props;

    let arrayAux = [];

    if ( collections ) {

      const baseIndex = this.imagesCollections.length;
      arrayAux =  collections.map( (elem, i) => {
        if ( !elem.webImage ) {
          return null;
        }
        return  <div className="image-element-class" key={baseIndex+i} style={{width: '33.33%'}}>
                    <img src={elem.webImage.url} key={baseIndex+i}  width='100%' />
                </div>
        }
      );
      this.imagesCollections.extend(arrayAux);
    }

    console.log(collections.length, collections );
    console.log(this.imagesCollections.length, this.imagesCollections);

    return  <div>
              <Masonry
                  className={'my-gallery-class'} // default ''
                  elementType={'div'} // default 'div'
                  options={this.masonryOptions} // default {}
                  disableImagesLoaded={false} // default false
                  updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
              >
                {this.imagesCollections}
              </Masonry>

              <div>
                <p>Y más....</p>
                <VisibilitySensor 
                  onChange={this.onChangeVisibilitySensor.bind(this)} 
                  resizeDelay={1200} 
                  style={{
                    position: 'absolute',
                    right: '0',
                    bottom: '0',
                    left: '0',
                  }}
                  offset={{top:50}}
                />
              </div>
            </div>

  }
}
