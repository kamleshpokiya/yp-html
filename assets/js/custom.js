
// three-dout-click
$(document).ready(() => {

  $(document).on('click', '.project-cls-cstm', function () {
    $('.project-desc-wrap').hide();
    $('.xxx').removeClass('aactive');

  });



  $(document).on('click', '.alert', function () {
    $(this).fadeOut();
  });

  $(document).on('click', '.project-doct', function (event) {
    event.stopPropagation();
    if ($(this).find('.droupdown-main-box').hasClass('opened')) {
      $(this).find('.droupdown-main-box').toggleClass('opened');
    } else {
      if ($('.droupdown-main-box').hasClass('opened')) {
        $('.droupdown-main-box').removeClass('opened');
        $(this).find('.droupdown-main-box').toggleClass('opened');
      } else {
        $(this).find('.droupdown-main-box').toggleClass('opened');
      }
    }
  });

  $(window).on('click', function () {
    $('.droupdown-main-box').removeClass('opened');
  });


  $(document).on('click', '.right-side-icon', function (event) {
    event.stopPropagation();
    console.log('kkkkkk')
    if ($(this).find('.droupdown-main-box').hasClass('opened')) {
      $(this).find('.droupdown-main-box').toggleClass('opened');
    } else {
      if ($('.droupdown-main-box').hasClass('opened')) {
        $('.droupdown-main-box').removeClass('opened');
        $(this).find('.droupdown-main-box').toggleClass('opened');
      } else {
        $(this).find('.droupdown-main-box').toggleClass('opened');
      }
    }
  });

  $(document).on('click', ".droupdown-main-box", function (event) {
    event.stopPropagation();
  })

  $(document).on('click', ".active", function (event) {
    event.stopPropagation();
  })

  $(document).on('click', '.profile', function (event) {
    event.stopPropagation();
    console.log('kkkkkk')
    if ($(this).find('.droupdown-main-box').hasClass('opened')) {
      $(this).find('.droupdown-main-box').toggleClass('opened');
    } else {
      if ($('.droupdown-main-box').hasClass('opened')) {
        $('.droupdown-main-box').removeClass('opened');
        $(this).find('.droupdown-main-box').toggleClass('opened');
      } else {
        $(this).find('.droupdown-main-box').toggleClass('opened');
      }
    }
  })

  // side-bar
  $(window).on('click', function () {
    $(".aside-main-box").removeClass("asider");
  });
  $(document).on('click', ".menu-btn", function (event) {
    event.stopPropagation();
    $(".aside-main-box").toggleClass("asider");
  })

  $(document).on('click', ".arrow", function () {
    $(".card.col-lg-6").addClass("padding");
    $(".padding-box").toggleClass("pdlb");
    $(".toggle").css("display", "none");
    $(".plus").css("display", "flex");

  });

  $(document).on('click', ".plus", function () {
    $(".card.col-lg-6").removeClass("padding");
    $(".padding-box").toggleClass("pdlb");
    $(".toggle").css("display", "block");
    $(this).css("display", "none");
  });


  $(document).on('click', "a.show-dis-btn", function () {
    if ($('.comment-box').css('display') == 'none') {
      $(".comment-box").css("display", "block");
    }
    else {
      $(".comment-box").css("display", "none");
    }
  });

  $(document).ready(function () {
    $(".pushme2").click(function () {
      $(this).text(function (i, v) {
        return v === 'Hide details' ? 'Show details' : 'Hide details'
      });
    });
  });

  $(document).on('click', ".add-btn", function () {
    $(".col-md-4.first-team-form-box").addClass('yykk');
  });
  $(document).on('click', ".res-x-btn button", function () {
    $(".col-md-4.first-team-form-box").removeClass('yykk');
  });

  // $(document).on('click', ".col-md-4.first-team-form-box::before", function () {
  //   $(".col-md-4.first-team-form-box").removeClass('yykk');

  // });

  $(document).on('click', ".open-list", function () {
    $(".listing-box").toggleClass("list-show");
    $(".task-main-box").toggleClass("height");
    $(".tasks.scroll-bar-wrap .scroll-box").toggleClass("todo-height");
    $(".open-list").toggleClass("routed");
    $(".title").toggleClass("title-click");
  });

  // Project list click open project description
  $(document).on('click', ".xxx", function () {
    $(".padding-box").addClass('pdrb');
  });
  $(document).on('click', ".close-project-desc", function () {
    $(".padding-box").removeClass('pdrb');
  });

  $(document).on('click', ".xxx", function (e) {

    $(".xxx").removeClass('aactive');
    $(this).addClass('aactive');
    runEffect('slide', 'toggle-right');
  });


  // run the currently selected effect
  function runEffect(effect, wrapper) {
    // get effect type from
    var selectedEffect = effect;

    // Most effect types need no options passed by default
    var options = {};
    // some effects have required parameters
    if (selectedEffect === "slide") {
      options = { direction: 'right' };
    }

    // Run the effect
    $("." + wrapper).show(selectedEffect, options, 500, callback);
  };

  //callback function to bring a hidden box back
  function callback() {
  };
})


$(document).ready(function () {
  // datepicker
  $('.inputDate').datepicker({
    format: 'dd-mm-yy',
    autoclose: true
  });

  $(".mul-select").select2({
    placeholder: "select data-structures",
    tags: true,
  });


  // close project description
  $(document).on('click', '.close-project-desc', function () {
    $('.project-desc-wrap').toggle('slide', { direction: "right" }, 500);
    $('.scroll-box .listing-box').removeClass('aactive');
  });

  // read more
  $(document).on('click', "#toggle", function () {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });


});




// drag and drop
const INPUT_FILE = document.querySelector('#upload-files');
const INPUT_CONTAINER = document.querySelector('#upload-container');
const FILES_LIST_CONTAINER = document.querySelector('#files-list-container');
const FILE_LIST = [];
let UPLOADED_FILES = [];

const multipleEvents = (element, eventNames, listener) => {
  const events = eventNames.split(' ');

  events.forEach(event => {
    element.addEventListener(event, listener, false);
  });
};

const previewImages = () => {
  FILES_LIST_CONTAINER.innerHTML = '';
  if (FILE_LIST.length > 0) {
    FILE_LIST.forEach((addedFile, index) => {
      const content = `
        <div class="form__image-container js-remove-image" data-index="${index}">
          <img class="form__image" src="${addedFile.url}" alt="${addedFile.name}">
        </div>
      `;

      FILES_LIST_CONTAINER.insertAdjacentHTML('beforeEnd', content);
    });
  } else {
    console.log('empty')
    INPUT_FILE.value = "";
  }
}

const fileUpload = () => {
  if (FILES_LIST_CONTAINER) {
    multipleEvents(INPUT_FILE, 'click dragstart dragover', () => {
      INPUT_CONTAINER.classList.add('active');
    });

    multipleEvents(INPUT_FILE, 'dragleave dragend drop change blur', () => {
      INPUT_CONTAINER.classList.remove('active');
    });

    INPUT_FILE.addEventListener('change', () => {
      const files = [...INPUT_FILE.files];
      console.log("changed")
      files.forEach(file => {
        const fileURL = URL.createObjectURL(file);
        const fileName = file.name;
        if (!file.type.match("image/")) {
          alert(file.name + " is not an image");
          console.log(file.type)
        } else {
          const uploadedFiles = {
            name: fileName,
            url: fileURL,
          };

          FILE_LIST.push(uploadedFiles);
        }
      });

      console.log(FILE_LIST)//final list of uploaded files
      previewImages();
      UPLOADED_FILES = document.querySelectorAll(".js-remove-image");
      removeFile();
    });
  }
};

const removeFile = () => {
  UPLOADED_FILES = document.querySelectorAll(".js-remove-image");

  if (UPLOADED_FILES) {
    UPLOADED_FILES.forEach(image => {
      image.addEventListener('click', function () {
        const fileIndex = this.getAttribute('data-index');

        FILE_LIST.splice(fileIndex, 1);
        previewImages();
        removeFile();
      });
    });
  } else {
    [...INPUT_FILE.files] = [];
  }
};

fileUpload();
removeFile();
$(document).ready(function () {
  $('#action_menu_btn').click(function () {
    $('.action_menu').toggle();
  });
});

window.addEventListener('mouseup', function (event) {
  var pol = document.getElementById('pol');
  if (event.target != pol && event.target.parentNode != pol) {
    pol.style.display = 'none';
  }
});




// Also see: https://www.quirksmode.org/dom/inputfile.html

if (jQuery('.file-input').length) {
  var inputs = document.querySelectorAll('.file-input')

  for (var i = 0, len = inputs.length; i < len; i++) {
    customInput(inputs[i])
  }
}

function customInput(el) {
  const fileInput = el.querySelector('[type="file"]')
  const label = el.querySelector('[data-js-label]')

  fileInput.onchange =
    fileInput.onmouseout = function () {
      if (!fileInput.value) return

      var value = fileInput.value.replace(/^.*[\\\/]/, '')
      el.className += ' -chosen'
      label.innerText = value
    }
}
$(document).ready(function () {
  $('#example').DataTable();
});