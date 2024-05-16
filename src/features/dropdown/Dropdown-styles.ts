export const customStyles = {
  menuList: (provided: any) => ({
    ...provided,

    maxHeight: "226px",
    backgroundColor: "#fff",
    borderRadius: "7px",
    padding: "0",
    border: "1px solid black",
    color: "black",
    "&::-webkit-scrollbar": {
      width: "2.5px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "15px",
    border: "1px solid black",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#dbf0ff" : "#f2f2f2",
    color: state.isSelected ? "#548ab0" : "black",
    cursor: "pointer",
    alignItems: "center",
    padding: "4px 0px 4px 10px",
  }),

  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fff" : "#fff",
    padding: "4.8px",
    borderRadius: "7px",

    // border: state.isFocused ? 0 : 0,
    boxShadow: state.isFocused ? 0 : 0,
    // "&:hover": {
    //   border: state.isFocused ? 0 : 0,
    // },
    border: "1px solid black",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "black",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "black",
    "&:hover": {
      color: "black",
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "black",
    cursor: "pointer",
  }),
};
