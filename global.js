/** Convert the string to title case */
String.prototype.toTitleCase = function() {
    let exceptions = ['a', 'an', 'the', 'in', 'of', 'and', 'but', 'or', 'for', 'nor', 'yet', 'so', 
        'at', 'by', 'on', 'to', 'up', 'as']

    let words = this.toLowerCase().split(' ')
    let len = words.length
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

    if (separator == '') str = str.replace(/\w\S*/g, txt => {
        return txt[0].toUpperCase() + txt.substr(1).toLowerCase();
    })

    str = str.replace(' ', separator || '').replace(/[^0-9a-zA-Z_\-]/g, '')
    str = str[0].toLowerCase() + str.substr(1)

    return str
}

/** Get a random hex color. */
function randomHexColor() {
    return `#${Math.floor(Math.random() * 16**6).toString(16).padStart(6, '0')}`
}

/** Get a random integer between min (inclusive) and max (inclusive).
 * 
 * @param {number} max The upper end of the range
 * @param {number} min Then lower end of the range
 */
function randomInt(max, min=0) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
        var temp = min
        min = max
        max = temp
    }

    return Math.floor(Math.random() * (max - min + 1) + min);  
}

/** Make sure number is within a given range.
 * 
 * @param {number} number The number to be checked 
 * @param {number} min Then lower end of the range
 * @param {number} max The upper end of the range
 */
function clamp(number, min, max) {
    if (min > max) {
        var temp = min
        min = max
        max = temp
    }

    number = parseFloat(number)

    if (number == NaN) return NaN
    if (number <= min) return min
    if (number >= max) return max
    return number
}

/** Copy a value to the clipboard.
  * 
  * @param {any} value The value to be copyed to the clipboard.
  */
function copy(value) {
    var $temp = $('<input>')
    $('body').append($temp)
    $temp.val(value.toString()).select()
    document.execCommand('copy')
    $temp.remove()
}