import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";

const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);
const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collection-overview/collecion-overview.container")
);

const ShopPage = ({ match, fetchCollectionStart }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`/shop/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
