//인풋에 입력할 이름 리스트
var n_list = []

//입력 버튼을 누르면 사용자가 입력한 값이 list에 저장됨
function add() {
    var n = document
        .getElementById("input_name")
        .value;
    n_list.push(n);
    //display
    replace_name();
    //document.getElementById("r_content").innerHTML = data[1].contents;
}
//var str_data = JSON.stringify(data); console.log(data[1].contents);

//JSON데이터에 "OO"이라고 저장되어 있는 str을 사용자가 입력한 변수로 교체
function replace_name() {
  //OO이 존재해서 변수를 교환한 str을 넣을 데이터
  var replace_list = []
  //OO이 애초에 존재하지 않아 교환할 필요가 없는 데이터
  var origin_list = []
  
    //변수를 대입하기 위해 반복문을 돌며 "OO"을 찾는다
    for (var i = 0; i < data.length; i++) {
        var find_str = "OO";
        //"OO"가 있을 경우
        if (data[i].contents.indexOf(find_str) != -1) {
          //사용자가 마지막으로 넣은 이름의 값(리스트의 마지막 값)으로 대체한 후 
            var replaced_str = data[i].contents
                .replaceAll(find_str, n_list[n_list.length - 1]);
            //대체된 리스트에 해당 str 넣는다.
            replace_list.push(replaced_str);
            //"OO"값이 애초에 존재하지 않을 경우 origin_list에 넣는다
        } else if(data[i].contents.indexOf(find_str) == -1){
          origin_list.push(data[i].contents);
        }
    }
    //replace_list와 origin_list를 합칠 리스트
    var total_list = origin_list.concat(replace_list);
    // 랜덤으로 출력을 위함
    var random_int = Math.floor(Math.random() * total_list.length);
    console.log(total_list[random_int]);
    document.getElementById("r_content").innerHTML = total_list[random_int];
    document.getElementById("r_content").style.color = "black";
    
}

function copy() {
  var copy_text = document.getElementById("r_content");
  copy_text.select(); //인풋 컨트롤의 내용 전체 선택
  document.execCommand("copy"); //클립보드에 복사
  //console.log("복사되었습니다.");
  alert("복사되었어요!")
  copy_text.setSelectionRange(0, 0); //선택영역 초기화
  mention()
}

//textarea 높이 자동정렬해주는 함수
function resize(){
  var size = document.getElementById("r_content");
  //계속 높이가 더해지기만 하니까 초기화시킴
  size.style.height = "1px";
  size.style.paddingTop = "0px";
  //스크롤 높이에 따라 높이를 재정의하고
  size.style.height = size.scrollHeight + 'px';
  //그에 따라 패딩 탑을 재정의함으로 텍스트를 계속 중앙정렬함
  size.style.paddingTop = size.scrollHeight/2 + 'px';
  console.log(size.scrollHeight);
}

function mention(){
  document.getElementById('r_move').innerHTML = 
  "복사된 주접으로 편지를 쓸 수 있어요! <br> 편지를 쓰러 가 볼까요? 😉"
  +'<button id="move_button">편지 쓸래요!</button>';
  
}




//write page

//textarea에 글을 입력하면 textarea 높이가 늘어남
function resize_letter(){
  var size_1 = document.getElementById("input_letter");
  //계속 높이가 더해지기만 하니까 초기화시킴
  size_1.style.height = "1px";
  size_1.style.paddingTop = "0px";
  //스크롤 높이에 따라 높이를 재정의하고
  size_1.style.height = size_1.scrollHeight + 'px';
  //그에 따라 패딩 탑을 재정의함으로 텍스트를 계속 중앙정렬함
  size_1.style.paddingTop = size_1.scrollHeight/4 + 'px';
  size_1.style.paddingBottom = size_1.scrollHeight/10 + 'px';
  console.log(size_1.scrollHeight);
}

var letter_list = [];

function save_letter(){
  var letter_item = document.getElementById("input_letter").value;
  letter_list.push(letter_item);
  localStorage.setItem("letter",JSON.stringify(letter_list));
}

//check page

