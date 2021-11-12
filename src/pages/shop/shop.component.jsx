import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectShopItems } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);