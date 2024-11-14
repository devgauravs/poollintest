import {ListItem} from '../components/DropDown/type';

const gender: Array<ListItem> = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
];

const hobbies: Array<ListItem> = [
  {label: 'Reading', value: 'reading'},
  {label: 'Travelling', value: 'travelling'},
  {label: 'Cooking', value: 'cooking'},
  {label: 'Sports', value: 'sports'},
];

const country: Array<ListItem> = [
  {label: 'United States', value: 'us'},
  {label: 'India', value: 'in'},
  {label: 'Canada', value: 'ca'},
  {label: 'Austraila', value: 'au'},
];

const chartConfig = {
  backgroundGradientFrom: '#FFF',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#FFF',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(49, 81, 30, ${opacity})`,
  strokeWidth: 1,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};
export {gender, hobbies, country, chartConfig};
