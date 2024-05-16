import { MainLayout } from "../shared/layout/MainLayout";
import { CurrencyConverter } from "../widgets/currency-converter/CurrencyConverter";

export const CurrencyPage = () => {
  return (
    <MainLayout>
      <div>Currency Page</div>;
      <CurrencyConverter />
    </MainLayout>
  );
};
