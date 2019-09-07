var $input = $('.form-fieldset > input');
$(document).ready(function(){
    $input.blur(function (e) {
      $(this).toggleClass('filled', !!$(this).val());
    });
    $('.ui-input').on('focusin', function() {
      $(this).parent().find('.textfieldLabel').addClass('active');
    });
    $('.ui-input').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('.textfieldLabel').removeClass('active');
      }
    });
    $('.eventOption').on('focusin', function() {
      $(this).parent().find('.textfieldLabel').addClass('active');
    });
    $('.required input').on('blur', function(){
      if($(this).val() == ''){
        $(this).parent().addClass("empty").children(".invalid-message").html("Required Field");
      }
    });
    $('.required input').on('click', function(){
      if($(this).val() == ''){
        $(this).parent().removeClass("empty").children(".invalid-message").html("");
      }
    });
    $('.required select').on('blur',function(){
      if(!($(this).val())){
        $(this).parent().addClass("empty").children(".invalid-message").html("Required Field");
      }
      else{
        $(this).parent().removeClass("empty").children(".invalid-message").html("");
      }
    });
})
