import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collection-overview/collecion-overview.container";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectionStart }) => {

  useEffect(() => {
    fetchCollectionStart()
  }, [fetchCollectionStart])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`/shop/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
