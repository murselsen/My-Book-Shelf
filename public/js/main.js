$('input[type=radio]').click(function (e) {
  e.preventDefault();
});
$('#searchType').click(() => {
  console.log('Search Type Cklicked');
  $('#searchTypeSelectBox').toggleClass('visible');
  
});
