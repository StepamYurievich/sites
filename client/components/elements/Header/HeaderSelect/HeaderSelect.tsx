import React, {useState} from 'react';
import Select, {components, MultiValue, SingleValue} from "react-select";
import {FaSearch} from "react-icons/fa";
interface OptionType {
  value: string | number;
  label: string | number;
}
export type SelectOption = MultiValue<OptionType> | SingleValue<OptionType> | null;
const options:OptionType[] = [
  { value: 'html', label: 'Material Tailwind HTML' },
  { value: 'react', label: 'Material Tailwind React' },
  { value: 'vue', label: 'Material Tailwind Vue' },
  { value: 'angular', label: 'Material Tailwind Angular' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
  { value: 'svelte', label: 'Material Tailwind Svelte' },
];

const customStyles = {
  control: (base:any, state:any) => ({
    ...base,
    borderColor: state.isFocused ? '#1f2937' : '#1f2937', // цвет границы при фокусе
    boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : null,
    '&:hover': {
      borderColor: '#1f2937', // цвет границы при наведении
    },

  }),
  option: (base:any) => ({
    ...base,
    color: '#1f2937', // цвет текста опции
    backgroundColor: '#f7fafc', // цвет фона опции
    '&:hover': {
      backgroundColor: '#e5e7eb', // цвет фона при наведении на опцию
    },

  }),
};
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaSearch style={{ color: '#1f2937' }} />
    </components.DropdownIndicator>
  );
};
const HeaderSelect = () => {
  const [searchOption, setSearchOptions] = useState<SelectOption>(null);
  const handleSearchChange = (selectedOption: SelectOption) => {
    setSearchOptions(selectedOption)
  }
  return (
    <Select
      placeholder={'Я ищу...'}
      onChange={handleSearchChange}
      value={searchOption}
      options={options}
      styles={customStyles}
      className="w-[804px] "
      isClearable
      components={{ DropdownIndicator }}
      openMenuOnClick={false}
    />
  );
};

export default HeaderSelect;
