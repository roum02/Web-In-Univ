  var first_count = 1;
  var second_count = 1;
  var value_conut = 1;

  function inc_first(){
    first_count ++;
    document.getElementById("first_num").innerHTML = first_count;
  }

  function dec_first(){
    first_count --;
    document.getElementById("first_num").innerHTML = first_count;
  }

  function inc_second(){
    second_count ++;
    document.getElementById("second_num").innerHTML = second_count;
  }

  function dec_second(){
    second_count --;
    document.getElementById("second_num").innerHTML = second_count;
  }

  function value_output(){
    value_conut = first_count * second_count
    document.getElementById("value_num").innerHTML = value_conut;
  }