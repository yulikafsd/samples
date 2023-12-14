const { height: pageHeaderHeight } = document
  .querySelector(".page-header")
  .getBoundingClientRect();

const newHeight = pageHeaderHeight + 20;
document.body.style.paddingTop = `${newHeight}px`;
console.log(document.body.style.paddingTop);
