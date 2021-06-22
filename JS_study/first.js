//전통적인 방식
var obj1 = {
  name:'obj1',
  func: function(){
    var self = this;
    return function(){
      console.log(self.name);
    };
  }
};

var callback = obj.func();
setTimeout(callback, 1000);

//함수를 다른 객체에 재활용하는 상황
var obj2 = {
  name:'obj2',
  func:obj1.func
};

var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = {name:'obj3'};
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);