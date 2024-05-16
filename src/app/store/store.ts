import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currencyReducer from "../../shared/store/currency-slice";

const rootReducer = combineReducers({
  currency: currencyReducer,
  // [incomingReservationApi.reducerPath]: incomingReservationApi.reducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// const store = configureStore({
//   reducer: {
//     currency: currencyReducer,
//   },
// });

const store = setupStore();

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
