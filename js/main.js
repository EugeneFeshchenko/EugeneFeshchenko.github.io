$(document).ready(function(){
    $('#contact-form').submit(function(evt){
        evt.preventDefault();
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'MGADhoPE5BMrOsgShSePrg',
                'message': {
                    'from_email': $('#email').val(),
                    'to': [
                        {
                            'email': 'eugene.feshchenko@yandex.ru',
                            'name': 'Eugene Feshchenko',
                            'type': 'to'
                        },
                    ],
                    'autotext': 'true',
                    'subject': $('#subject').val(),
                    'html': $('#message').val()
                }
            }
        }).done(function(response) {
            $("#contact-form")[0].reset();
            alert('Your message hase been sent')
        });
    })

    $('#nav').singlePageNav({
        offset: $('#nav').outerHeight()+30,
    });

})
