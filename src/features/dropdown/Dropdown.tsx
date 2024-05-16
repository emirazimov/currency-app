import React from "react";
import Select, { components } from "react-select";
import { currency } from "../../shared/utils/currency";
import { customStyles } from "./Dropdown-styles";
const { Option } = components;

interface DropdownsProps {
  placeholder: string;
  handleChange: (selectedOption: any) => void;
  value: any;
}

const OptionComponent: React.FC<any> = (props) => {
  return (
    <Option {...props}>
      <span className={`currency-flag currency-flag-${props.data.value}`} />{" "}
      {props.data.label}
    </Option>
  );
};

const Dropdowns: React.FC<DropdownsProps> = (props) => {
  const { handleChange, placeholder } = props;

  return (
    <Select
      options={currency}
      onChange={handleChange}
      placeholder={placeholder}
      styles={customStyles}
      components={{ Option: OptionComponent }}
      isSearchable={true}
    />
  );
};

export default Dropdowns;
