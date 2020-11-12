$('.copyable')
    .on('click', event => {
        if (event.target.matches('button')) {
            var button = $(event.target)
            var text = button.parent().find('div').text()
            
            var $temp = $('<input>')
            $('body').append($temp)
            $temp.val(text).select()
            document.execCommand('copy')
            $temp.remove()
        }
    })
    .append($('<button>').text('⯐'))