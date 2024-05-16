import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrenncyLatest } from "../api/currency";
import { CurrencyAbbrreviation, LoadingStatus } from "../utils/enums";
import { CurrencyState } from "./currency-slice.types";

const currencySlice = createSlice({
  name: "counter",
  initialState: {
    baseCurrency: null,
    into: null,
    actualCurrencies: [],
    amount: 1,
    status: LoadingStatus.none,
    error: null,
  } satisfies CurrencyState as CurrencyState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload;
    },
    setIntoCurrency: (state, action: PayloadAction<string>) => {
      state.into = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrenncyLatest.pending, (state) => {
        state.status = LoadingStatus.loading;
      })
      .addCase(fetchCurrenncyLatest.fulfilled, (state, action) => {
        state.status = LoadingStatus.succeeded;
        state.actualCurrencies = Object.values(action.payload);
      })
      .addCase(fetchCurrenncyLatest.rejected, (state, action) => {
        state.status = LoadingStatus.failed;
        state.error = action.error.message;
      });
  },
});

export const fetchCurrenncyLatest = createAsyncThunk(
  "currency/fetchCurrencyLatest",
  async ({
    baseCurrency,
    currencies,
  }: {
    baseCurrency: string;
    currencies: string | Array<string>;
  }) => {
    const response = await getCurrenncyLatest(baseCurrency, currencies);
    return response.data.data;
  }
);

export const { setBaseCurrency, setIntoCurrency, setAmount } =
  currencySlice.actions;
export default currencySlice.reducer;
