const handleSearchEvent = (event) => {
  console.log("searching", event.target.value);
};

export function initFilters() {
  const searchElement = document.querySelector(".graph-search");

  searchElement.addEventListener("change", handleSearchEvent);
}
