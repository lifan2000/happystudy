$(function() {
  $('#img-login').on('click', function() {
    $('#login-by-image').fadeIn()
    $('#login-by-password').fadeOut()
    $(this).addClass('on')
    $('#password-login').removeClass('on')
  })
  $('#password-login').on('click', function() {
    $('#login-by-image').fadeOut()
    $('#login-by-password').fadeIn()
    $(this).addClass('on')
    $('#img-login').removeClass('on')
  })
})
