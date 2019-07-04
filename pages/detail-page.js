// add event handler
function submitComment() {
    
      // gather data
  const inputField = document.getElementById('name')
  var name = inputField.value
  const textArea = document.getElementById('msg')
  const msg = textArea.value

  if(doesNotPassAllValidations(name, msg)){
    return null
  } 
  
  //convert first bit to uppercase.
  if(name[0]!=name[0].toUpperCase())
  name = name.replaceAt(0,name[0].toUpperCase())


  // create the elements you need
  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  
    // adjust the elements we created
    h3.innerHTML = `${name} said:`
    p.innerHTML = (checkOffensive(msg))? "Warning: this comment has been flagged as offensive":msg
      console.log(checkOffensive(msg))
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
    // display the elements on the page
  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)

  // reset form values
  inputField.value = null
  textArea.value = null
  }

  function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }
  
    return false
  }


String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

function checkOffensive(comment){
    const badWords=["folk","sheep","beach","dickson"];
    
    for(var i=0;i<badWords.length;i++){
        if(comment.includes(badWords[i].toLowerCase())){
          return true}
          //break;
        }

    return false
}