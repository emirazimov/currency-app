import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import Dropdowns from "../../features/dropdown/Dropdown";
import Result from "../../features/result/Result";
import {
  fetchCurrenncyLatest,
  setBaseCurrency,
} from "../../shared/store/currency-slice";
import { currency } from "../../shared/utils/currency";
import { LoadingStatus } from "../../shared/utils/enums";
import "./ActualCurrencies.scss";

export const ActualCurrencies = () => {
  const [from, setFrom] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const currencyStore = useSelector((state: RootState) => state.currency);

  const handleFrom = (selectedOption: any) => {
    setFrom(selectedOption.value.toUpperCase());
    dispatch(setBaseCurrency(selectedOption.value.toUpperCase()));

    const filteredCurrency = currency
      .filter((el) => el.value !== selectedOption)
      .map((el) => el.value.toUpperCase())
      .join("%2C");

    dispatch(
      fetchCurrenncyLatest({
        baseCurrency: selectedOption.value.toUpperCase(),
        currencies: filteredCurrency,
      })
    );
  };

  return (
    <div className="actual-currencies-comp-wrapper">
      <p>Base Currency</p>
      <div className="base-currency-input">
        <Dropdowns
          handleChange={handleFrom}
          placeholder="Select a currency (To)"
          value={currencyStore.baseCurrency}
        ></Dropdowns>
      </div>

      <div className="currencies-list">
        {currencyStore.status === LoadingStatus.loading ? (
          <div>...Loading</div>
        ) : (
          currencyStore.status === LoadingStatus.succeeded && (
            <>
              {currencyStore.actualCurrencies.map((currency, index) => {
                return (
                  <div className="each-currency" key={index}>
                    <p>{currency.code + " "}</p> {" - "}{" "}
                    <p>{" " + currency.value}</p>
                  </div>
                );
              })}
            </>
          )
        )}
      </div>
    </div>
  );
};
