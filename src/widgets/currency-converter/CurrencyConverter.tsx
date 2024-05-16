import axios from "axios";
// import moment from "moment";
import React, { useEffect, useState } from "react";
// import { endpointPath } from "../../config/api";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store/store";
import Dropdowns from "../../features/dropdown/Dropdown";
import Result from "../../features/result/Result";
import {
  fetchCurrenncyLatest,
  setAmount,
  setBaseCurrency,
  setIntoCurrency,
} from "../../shared/store/currency-slice";
import "./CurrencyConverter.scss";

export const CurrencyConverter = () => {
  const [from, setFrom] = useState<string>("");
  const [into, setInto] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const currency = useSelector((state: RootState) => state.currency);

  useEffect(() => {
    if (from && into) {
      dispatch(fetchCurrenncyLatest({ baseCurrency: from, currencies: into }));
    }
  }, [from, into, currency.amount]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setAmount(parseFloat(value)));
  };

  const handleFrom = (selectedOption: any) => {
    setFrom(selectedOption.value.toUpperCase());
    dispatch(setBaseCurrency(from));
  };

  const handleInto = (selectedOption: any) => {
    setInto(selectedOption.value.toUpperCase());
    dispatch(setIntoCurrency(into));
  };

  return (
    <>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="currency-app">
            <label>Amount</label>
            <input
              className="form-control-lg currency-amount"
              placeholder="Enter Amount"
              value={currency.amount}
              type="number"
              onChange={handleInput}
            />
            <div className="currency-from">
              <Dropdowns
                handleChange={handleFrom}
                placeholder="Select a currency (From)"
                value={from}
              ></Dropdowns>
            </div>
            <div className="currency-swap">
              <div className="btn currency-swap-btn">in</div>
            </div>
            <div className="currency-into">
              <Dropdowns
                handleChange={handleInto}
                placeholder="Select a currency (To)"
                value={into}
              ></Dropdowns>
            </div>
            <div>
              <Result></Result>
            </div>
          </div>
        </div>
        <div className="space"></div>
      </div>
    </>
  );
};
