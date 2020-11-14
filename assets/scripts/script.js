$('.copyable, .code-block')
    .on('click', event => {
        if (event.target.matches('button')) {
            var button = $(event.target)
            var text = button.parent().text()
            console.log(text);
            copy(text)
        }
    })
    .append(function() {
        let self = $(this)
        let text = self.text()
        let lang = self.data('lang')
        self.text('').removeData('lang')
        
        return $('<span>')
                .append($('<span>')
                    .text(text)
                    .addClass(lang))
    })
    .append($('<button>'))

$('.doc').attr('tabindex', '0')

for (let block of $('.code-block, .snippet')) {
    hljs.highlightBlock(block)
}