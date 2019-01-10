$('#contact-form').submit(function(event) {
    event.preventDefault();
    var form = event.target;
    $.ajax({
      method: 'post',
      contentType: 'application/json',
      data : JSON.stringify({
        subject: `${form.name.value}さんからのお問い合わせです`,
        body:
          `${form.name.value}さんからお問い合わせがありました
          Email: ${form.email.value}
          本文: ${form.body.value}
          `
      })
    }).done(function(response) {
      alert('aaa');
    }).fail(function(jqXHR, textStatus, errorThrown) {
      alert('bbb');
    });
  });
