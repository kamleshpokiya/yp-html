jQuery(document).on('click', '.header-bar', function () {
  // if( jQuery(" .header-manu-list").css("display") == "none" ){
  //     jQuery(" .header-manu-list").css("display", "block"); 
  // }
  // else{
  //     jQuery(" .header-manu-list").css("display", "none"); 
  // }
  if (jQuery(".nav-manu").css("display") == "none") {
    jQuery(".nav-manu").slideDown();
  }
  else {
    jQuery(".nav-manu").slideUp();
  }

});

jQuery(document).on('click', '.header-fabar', function () {
  // if( jQuery(" .header-manu-list").css("display") == "none" ){
  //     jQuery(" .header-manu-list").css("display", "block"); 
  // }
  // else{
  //     jQuery(" .header-manu-list").css("display", "none"); 
  // }
  if (jQuery(".profile-main-box").css("display") == "none") {
    jQuery(".profile-main-box").slideDown();
  }
  else {
    jQuery(".profile-main-box").slideUp();
  }

});


// login header


jQuery(document).on('click', '.profile-manu-box', function () {
  // if( jQuery(" .header-manu-list").css("display") == "none" ){
  //     jQuery(" .header-manu-list").css("display", "block"); 
  // }
  // else{
  //     jQuery(" .header-manu-list").css("display", "none"); 
  // }
  if (jQuery(".desktop-manu").css("display") == "none") {
    jQuery(".desktop-manu").slideDown();
  }
  else {
    jQuery(".desktop-manu").slideUp();
  }

});


var next_click = document.querySelectorAll(".next_button");
var main_form = document.querySelectorAll(".main");
var step_list = document.querySelectorAll(".progress-bar li");
var num = document.querySelector(".step-number");
let formnumber = 0;

next_click.forEach(function (next_click_form) {
  next_click_form.addEventListener('click', function () {
    if (!validateform()) {
      return false
    }
    formnumber++;
    updateform();
    progress_forward();
    // contentchange();
  });
});

var back_click = document.querySelectorAll(".back_button");
back_click.forEach(function (back_click_form) {
  back_click_form.addEventListener('click', function () {
    formnumber--;
    updateform();
    progress_backward();
    // contentchange();
  });
});

var username = document.querySelector("#user_name");
var shownname = document.querySelector(".shown_name");


var submit_click = document.querySelectorAll(".submit_button");
submit_click.forEach(function (submit_click_form) {
  submit_click_form.addEventListener('click', function () {
    shownname.innerHTML = username.value;
    formnumber++;
    updateform();
  });
});





function updateform() {
  main_form.forEach(function (mainform_number) {
    mainform_number.classList.remove('active');
  })
  main_form[formnumber].classList.add('active');
}

function progress_forward() {
  // step_list.forEach(list => {

  //     list.classList.remove('active');

  // }); 


  // num.innerHTML = formnumber + 1;
  step_list[formnumber].classList.add('active');
}

function progress_backward() {
  var form_num = formnumber + 1;
  step_list[form_num].classList.remove('active');
  // num.innerHTML = form_num;
}

// var step_num_content = document.querySelectorAll(".step-number-content");

// function contentchange() {
//   step_num_content.forEach(function (content) {
//     content.classList.remove('active');
//     content.classList.add('d-none');
//   });
//   step_num_content[formnumber].classList.add('active');
// }


function validateform() {
  validate = true;
  var validate_inputs = document.querySelectorAll(".main.active input");
  validate_inputs.forEach(function (vaildate_input) {
    vaildate_input.classList.remove('warning');
    if (vaildate_input.hasAttribute('require')) {
      if (vaildate_input.value.length == 0) {
        validate = false;
        vaildate_input.classList.add('warning');
      }
    }
  });
  return validate;

}



if ($(".select2")[0]) {
  $('.select2').select2({
  });
}



$("#datepicker").datepicker({
  autoclose: true,
  todayHighlight: true
}).datepicker('update', new Date());




$(".dropdown").dropdown();


