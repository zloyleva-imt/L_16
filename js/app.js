console.log('App was loaded...');

const a = document.querySelectorAll('ul.list-unstyled.main a');
const ul = document.querySelectorAll('ul.list-unstyled.main ul');

[].map.call(a, (el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  [...a].map(el => el.classList.remove('selected'));
  [...ul].map(el => el.classList.remove('open'));
  console.log(e.target.previousElementSibling)
  if(e.target.previousElementSibling){
    e.target.previousElementSibling.classList.add('open')
  }
  e.target.classList.add('selected');
}));