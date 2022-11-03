const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  //add the border and show
  removeBorder();
  removeShow();
  this.classList.add('tab-border');

  //get content
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
  tabContents.forEach(item => item.classList.remove('show'))
}
tabItems.forEach(item => item.addEventListener('click', selectItem));
