import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : null
);

export const selectCollection = collectionUrlParams =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[collectionUrlParams] : null
  );

export const selectCollectionIsFething = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector([selectShop], shop => {
  return !!shop.collections;
});
