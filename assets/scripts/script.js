$('.copyable, .code-block')
    .on('click', function() {
        const self = $(this)
        copy(self.text())
        self.addClass('copied')
        
        self.on('mouseleave', function() {
            const self = $(this)
            self.removeClass('copied')
            self.off('mouseleave')
        })
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