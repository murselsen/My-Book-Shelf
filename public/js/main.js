// $('input[type=radio]').click(function (e) {
//   e.preventDefault();
//   $('#searchTypeSelectBox > .selectBox-item').removeClass('active');
//   const element = e.target.parentNode.parentNode;
//   $(element).toggleClass('active');
// });

$('#searchTypeSelectBox > .selectBox-item').click(e => {
  e.preventDefault();
  $('#searchTypeSelectBox > .selectBox-item').removeClass('active');
  console.log('Click');
  console.log(e.target);
  $(e.target.parentNode).toggleClass('active');
});

$('#searchType').click(() => {
  console.log('Search Type Clicked');
  $('#searchTypeSelectBox').toggleClass('visible');
});
