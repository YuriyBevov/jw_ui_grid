import customSelect from 'custom-select';
const items = document.querySelectorAll('.custom-select');

if(items) {
  items.forEach(item => {
    customSelect(item);
  })
}
