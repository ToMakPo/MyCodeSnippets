$('.copyable')
    .on('click', event => {
        if (event.target.matches('button')) {
            var button = $(event.target)
            var text = button.parent().find('div').text()
            
            copyToClipboard(text)
        }
    })
    .append($('<button>'))

$('.doc').attr('tabindex', '0')