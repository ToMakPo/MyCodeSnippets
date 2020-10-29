/** Convert the string to title case */
String.prototype.toTitleCase = function() {
    exceptions = ['a', 'an', 'the', 'in', 'of', 'and', 'but', 'or', 'for', 'nor', 'yet', 'so', 
        'at', 'by', 'on', 'to', 'up', 'as']

    var words = this.toLowerCase().split(' ')
    var len = words.length
    for (let i = 0; i < len; i++) {
        if (i == 0 || i == len - 1 || !(exceptions.includes(words[i])))
            words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }

    return words.join(' ')
}

/** Convert the string to proper case. */
String.prototype.toProperCase = function() {
    return this.replace(/\w\S*/g, txt => {
        return txt[0].toUpperCase() + txt.substr(1).toLowerCase();
    })
}

/** Convert the string to an object key.
 * 
 * @param {string} [separator] A string used to separate one word from the next in the resulting String. 
 * If omitted, the words are converted to camel case.
 */
String.prototype.toKey = function(separator) {
    separator = separator || ''
    var str = this

    if (separator == '') str = str.toProperCase()

    str = str.replace(' ', separator || '').replace(/[^0-9a-zA-Z_]/g, '')
    str = str[0].toLowerCase() + str.substr(1)

    return str
}