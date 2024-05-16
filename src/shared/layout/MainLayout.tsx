import styles from "./MainLayout.module.scss";
import { Navbar } from "./Navbar";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.layout}>
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
};
