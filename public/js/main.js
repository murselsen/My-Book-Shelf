document.querySelector('input[type=radio]').addEventListener('change', e => {
  console.log(e.target.value);
  document.querySelector('#searchTypeSelectBox').style.visibility = 'hidden';
});
document.querySelector('.selectBoxBtn').addEventListener('click', e => {
  document
    .querySelector('#searchTypeSelectBox')
    .toggleAttribute('class', 'visible');
});
