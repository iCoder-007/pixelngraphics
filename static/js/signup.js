const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function load() {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
  }, 0);
}
function closeload() {
  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
}
function Signup(){
  
  let un=document.getElementById('username').value
  let email=document.getElementById('email').value
  let pass=document.getElementById('password').value
  let conpass=document.getElementById('confirmpassword').value
  
  // fetching item on cart via ajax
  var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ajaxsignup');
    xhr.setRequestHeader('X-CSRFToken', csrftoken);       
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.setRequestHeader("Accept", "application/json");
  
  xhr.send(JSON.stringify({'username':un,'email':email,'pass':pass,'conpass':conpass}));
  xhr.onload = function() {

    if (xhr.status != 200) { 
      alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    } else { 
    //  closeload()
    
    console.log(JSON.parse(xhr.responseText)['error'])
    console.log(JSON.parse(xhr.responseText)['success'])
    if(JSON.parse(xhr.responseText)['error']===undefined){
      window.location.href='/'
    }
    else{
      document.querySelector('.message').innerHTML=` <div class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Failed ! ${JSON.parse(xhr.responseText)['error']}.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `
    }
  }
  
  };
  
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
     console.log('p')
    } else {
   
    }
  
  };
  
  xhr.onerror = function() {
    alert("Request failed");
  };
  
  
  }
function Signin(){
  let un=document.getElementById('lusername').value
  let pass=document.getElementById('lpassword').value

  // fetching item on cart via ajax
  var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ajaxlogin');
    xhr.setRequestHeader('X-CSRFToken', csrftoken);       
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.setRequestHeader("Accept", "application/json");
  
  xhr.send(JSON.stringify({'username':un,'password':pass}));
  xhr.onload = function() {
    
    if (xhr.status != 200) {
      alert(`Error ${xhr.status}: ${xhr.statusText}`); 
    } else { 
      console.log(JSON.parse(xhr.responseText)['error'])
      console.log(JSON.parse(xhr.responseText)['success'])
      if(JSON.parse(xhr.responseText)['error']===undefined){
        window.location.href='/'
      }
      else{
        document.querySelector('.message2').innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Failed ! ${JSON.parse(xhr.responseText)['error']}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      ` 
    }
    
  }
  };
  
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
    
    } else { 
    }
  };
  
  xhr.onerror = function() {
    alert("Request failed");
  };
  
  }


  
  

