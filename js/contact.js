$('#contact-form').submit(function(event) {
  event.preventDefault();
  var form = event.target;

  $('#contact-form').validate({
    rules: {
      'name': {
        required: true,
      },
      'email': {
        required: true,
        email: true,
      },
      'body': {
        required: true,
      }
    }
  });

  if (!$('#contact-form').valid()) {
    return false;
  }

  $.ajax({
    url: 'https://m3lcf0fruf.execute-api.eu-west-1.amazonaws.com/production/submit',
    type: 'post',
    contentType: 'application/json',
    data : JSON.stringify({
      subject: `${form.name.value}さんからのお問い合わせです`,
      body: `${form.name.value}さんからお問い合わせがありました\n\nEmail: ${form.email.value}\n本文: ${form.body.value}`
    })
  }).done(function(response) {
    UIkit.notification({
      message: 'Successfully Sent a Message',
      status: 'success',
      pos: 'top-center',
      timeout: 3000
    });
  }).fail(function(jqXHR, textStatus, errorThrown) {
    UIkit.notification({
      message: 'Oops! Failed to send a Message',
      status: 'danger',
      pos: 'top-center',
      timeout: 3000
    });
  });
});
