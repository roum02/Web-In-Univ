p1 = "<h3>Web</h3><p>Web content is the textual, visual, or aural content that is encountered as part of the user experience on websites. It may include text, images, sounds, videos, and animations.</p><p>웹 콘텐츠는 웹 사이트에서 사용자 경험의 일부로 만난 텍스트, 시각 또는 청각 콘텐츠입니다. 텍스트, 이미지, 사운드, 비디오 및 애니메이션 등이 포함될 수 있습니다.</p>"

p2 = "<h3>HTML</h3><p>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.</p>"

p3 = "<h3>CSS</h3><p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.</p>"

p4 = "<h3>Java Script</h3><p>JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content engineering. It is used to make webpages interactive and provide online programs, including video games.</p>"

function menu_web(){
  document.getElementById("m2").style.borderBottom = "none";
  document.getElementById("m3").style.borderBottom = "none";
  document.getElementById("m4").style.borderBottom = "none";

  document.getElementById('text').innerHTML = p1;
  document.getElementById("m1").style.borderBottom = "yellow solid 3px";
}

function menu_html(){
  document.getElementById("m1").style.borderBottom = "none";
  document.getElementById("m3").style.borderBottom = "none";
  document.getElementById("m4").style.borderBottom = "none";

  document.getElementById('text').innerHTML = p2;
  document.getElementById("m2").style.borderBottom = "yellow solid 3px";
}

function menu_css(){
  document.getElementById("m2").style.borderBottom = "none";
  document.getElementById("m1").style.borderBottom = "none";
  document.getElementById("m4").style.borderBottom = "none";

  document.getElementById('text').innerHTML = p3;
  document.getElementById("m3").style.borderBottom = "yellow solid 3px";
}

function menu_js(){
  document.getElementById("m2").style.borderBottom = "none";
  document.getElementById("m3").style.borderBottom = "none";
  document.getElementById("m1").style.borderBottom = "none";

  document.getElementById('text').innerHTML = p4;
  document.getElementById("m4").style.borderBottom = "yellow solid 3px";
}
