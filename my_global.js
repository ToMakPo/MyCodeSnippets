/**Convert the string to an object key.
 * 
 * @param {string} [separator] A string used to separate one word from the next in the resulting String. If omitted, the words are converted to camel case.
 */
String.prototype.toKey = function(separator) {
    separator = separator || ''
    var str = this

    if (separator == '') {
        str = this.replace(/\w\S*/g, txt => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })
    }

    str = str.replace(' ', separator || '').replace(/[^0-9a-zA-Z_]/g, '')
    str = str.charAt(0).toLowerCase() + str.substr(1)

    return str
}