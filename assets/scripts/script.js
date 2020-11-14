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

// for (let block of $('.code-block > *')) {
//     let text = $(block).text()
    
//     text = text.replace(/\/\/.+/, x => `<span class="f-comment">${x}</span>`)
//     console.log(text);
//     $(block).text(text)
// }