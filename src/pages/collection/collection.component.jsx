import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import "./collection.styles.scss";

const CollectionPage = ({ collection, state }) => {
  console.log("-----------mystate", state);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="collection-page">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      <h1>fihdfhds</h1>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  state: state.shop
});

export default connect(mapStateToProps)(CollectionPage);
