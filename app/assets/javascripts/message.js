$(function() {
  function buildHTML(message) {
    var html = `<div class="main__message">
                  <p class="main__message__name">${message.user_name}</p>
                  <p class="main__message__date">${message.created_at}</p>
                </div>
                <div class="main__message">
                  <p class="main__message__body">${message.content}</p>
                  <span src:${message.image_url}, class="main2__image"></span>
                </div>`
    return html;
  }
  $('#item_form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var message = $(this).attr('action');
    $.ajax({
      url: message,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.form__space').val('');
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'slow');
      $('.form__button').prop("disabled", false);
    })
    .fail(function() {
      alert('エラーが発生しました');
    })
  });

  var interval = setInterval(function() {
      var messageId = $('.main__body__messages:last').attr('message_id');
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        type: "GET",
        data: { id: messageId },
        dataType:'json',
      })
      .done(function(json){
        if (json.length !== 0){
        var insertHTML = '';
        json.messages.forEach(function(messages){
          insertHTML += buildHTML(messages);
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages').get(0).scrollHeight },400);
        }
       })

      .fail(function(data) {
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(interval);
    };
  } , 5000 );
});
