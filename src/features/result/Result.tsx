import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";
import { LoadingStatus } from "../../shared/utils/enums";
import Loading from "../loading/Loading";
import "./Result.scss";

function Result() {
  const currencyStore = useSelector((state: RootState) => state.currency);

  let intoField =
    currencyStore.into && currencyStore.into.split(" ")[0].trim().toUpperCase();

  return (
    <>
      {currencyStore.status === LoadingStatus.loading ? (
        <Loading />
      ) : (
        currencyStore.status === LoadingStatus.succeeded && (
          <>
            <p className="currency-result">
              {currencyStore.actualCurrencies[0].value as any} (
              {intoField && intoField.toUpperCase()}){" "}
              <span
                className={`currency-flag currency-flag-lg currency-flag-${
                  intoField && intoField.toLowerCase()
                }`}
              />
            </p>
          </>
        )
      )}
    </>
  );
}

export default Result;
