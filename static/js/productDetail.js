function changemainimg(val,v){
   if( document.querySelector('.mainimage')!=null&& document.querySelector('.mainimage').src!=val && v==1){
    document.querySelector('.mainimg').innerHTML=` <img class="mainimage" src="${val}" alt="" srcset="">`;   
    console.log(document.querySelector('.mainimage').src);
   }
  else if( document.querySelector('.mainimage').src!=val && v==0){ 
    document.querySelector('.mainimg').innerHTML=`<div class="vid"><video id="vp" width="100%" height="100%" autoplay='true' loop >
    <source id="source" class="mainimage" src="${val}" type="video/mp4">
    Your browser does not support the video tag.
    </video></div>`
   }
}

var xhr = new XMLHttpRequest();

function Addtocart(sample,elem){
    if(String(elem.innerText)!='ADD TO CART'){
        window.location.href='/cart'
        return
    }
    xhr.open('POST', '/addtoCart',true);
    xhr.setRequestHeader('X-CSRFToken', csrftoken);     
   
    xhr.onload=function(){
      if(xhr.status!=200){
          
    }
    else{
        document.querySelector('.spinbutton').innerHTML=`GO TO CART`
         console.log(xhr.responseText)
      }
      
    }
    xhr.upload.onloadstart=function(e){
  
    }
    xhr.upload.onprogress = function(e) {
      if (e.lengthComputable) {
    document.querySelector('.spinbutton').innerHTML+=`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>`
      } else {
      
      }
    
    };
    xhr.send(JSON.stringify({'sno':sample,'changes':document.querySelector('#changes').value}));
    xhr.onerror = function() {
      alert("Request failed");
    };
  }
 
//  function right(){
//     console.log('kl')

//     document.querySelector( ".rowcus" ).animate({
//       scrollLeft: '+=156px'
//     });
//   }
// function left() {
//     console.log('kl')
//     document.querySelector( ".rowcus" ).animate({
//       scrollLeft: '-=156px'
//     });
//   }
// $('.rightarrow').click(function () {
//   $( ".rowcus" ).animate({
//     scrollLeft: '+=156px'
//   });
// });
// $('.leftarrow').click(function () {
  
//   $( ".rowcus" ).animate({
//     scrollLeft: '-=156px'
//   });
// });
// var view = $(".rowcus");
// var move = "100px";
// var sliderLimit = -750;

// function ra(){

//     var currentPosition = parseInt(view.css("left"));
//     console.log(view,currentPosition)
//     if (currentPosition >= sliderLimit) view.stop(false,true).animate({left:"-="+move},{ duration: 400})

// }

// function la(){

  
//   var currentPosition = parseInt(view.css("left"));
//   console.log(view,currentPosition)
//     if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400});

// }