import { emitter } from './emitter';

const handleSearchEvent = (event) => {
  console.log('searching', event.target.value);
  emitter.emit('filter:search', event.target.value);
};

// Export the filter function
export function initFilters() {
  const searchElement = document.querySelector('.graph-search');
  searchElement.addEventListener('change', handleSearchEvent);
}
