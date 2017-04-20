import React from "react"
import { connect } from "react-redux"
import ReactPaginate from "react-paginate"
import Masonry from "react-masonry-component"



@connect((store) => {
  return {
    collections: store.collections.collections.artObjects,
  };
})


export default class CollectionsCollage extends React.Component {

  constructor() {
    super();
    const masonryOptions = {
        transitionDuration: 0,
    };
  }

  componentDidMount() {
    
  }

  render() {
    const { collections } = this.props;

    let imagesCollections = null;
    if ( collections ) {
      imagesCollections = collections.map( (elem, i) => {
        return  <div className="image-element-class" key={i} style={{width: '33.33%'}}>
                    {/*<img src={elem.webImage.url} key={i} height={elem.webImage.height/5} width={elem.webImage.width/5} />*/}
                    <img src={elem.webImage.url} key={i} height='400' width='100%' />
                </div>
      } );
    }

    return  <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={this.masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {imagesCollections}
            </Masonry>

  }
}
