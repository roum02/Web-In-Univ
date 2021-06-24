//콜백함수와 클로저(1)
var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul');

fruits.forEach(function(fruits){
  var $li = document.createElement('li');
  $li.innerText = fruit;
  $li.addEventListener('click', function(){
    alert('your choice is' + fruit);
  });
  $ul.appendChild($li);
});

document.body.appendChild($ul);