function submit() {
    var commentSection = document.getElementById("comments");
    var comment_txt = document.getElementById("comment_txt").value;
    var commentor = document.getElementById("name_txt").value;
    commentSection.innerHTML+= '<div class="comment"><h3>'+comment_txt+'</h3><p>'+' said: '+ commentor +'</p></div>';
  }