import React, { Component } from "react";
import { connect } from 'react-redux';
import CollectionPreview from "../../components/preview_collection.component/collection-preview.component";
import { createStructuredSelector } from "reselect";
import { selectCollections} from "../../redux/shop/shop.selector";

const ShopPage = ({collections}) => (

      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
  
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
