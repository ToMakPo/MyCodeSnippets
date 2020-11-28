$('.copyable, .code-block')
    .on('click', event => {
        const self = $(event.target)
        copy(self.text())
        self.addClass('copied')
    })
    .on('mouseout', event => {
        const self = $(event.target)
        self.removeClass('copied')
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

$('.doc').attr('tabindex', '0')

for (let block of $('.code-block, .snippet')) {
    hljs.highlightBlock(block)
}