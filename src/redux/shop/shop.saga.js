import { takeEvery, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsfailure
} from "./shop.actions";
import shopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("I am firestored");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsfailure(error.message));
  }
  // collectionRef
  //   .get()
  //   .then(snapshot => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //     dispatch(fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch(error => dispatch(fetchCollectionsfailure(error)));
}
export function* fetchCollectionsStart() {
  yield takeEvery(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
