$('#searchTypeSelectBox > .selectBox-item').click(e => {
  e.preventDefault();
  $('#searchTypeSelectBox > .selectBox-item').removeClass('active');
  console.log('Click');
  e.target.firstElementChild.setAttribute('checked', true);
  console.log(e.target.firstElementChild);
  $(e.target.parentNode).toggleClass('active');
});

$('#searchType').click(() => {
  console.log('Search Type Clicked');
  $('#searchTypeSelectBox').toggleClass('visible');
});

const page = document.URL.split('/').pop();

document.querySelector('#appMenuList').addEventListener('loadedData', e => {
  console.log($('#appMenuList'));
});
