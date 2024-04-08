function encrypt(text, n) {
    let i = 0;
    while (i < n) {
        let odds = '';
        let evens = '';
        for (let j in text) {
            j % 2 == 0 ? odds += text[j] : evens += text[j]
        }
        text = evens + odds;
        i++
    }
    return text
}

function decrypt(encryptedText, n) {
    let result = encryptedText;
    let middle = result.length / 2;
    let i = 0;
    while (i < n) {
        let placholder = '';
        let odds = result.slice(0, middle);
        let evens = result.slice(middle);
        for (let j = 0; j < middle; j++) {
            placholder += evens[j];
            placholder += odds[j]
        }
        result = placholder;
        i++
    }
    return result
}

decrypt(encrypt("012345", 2), 2)

// let str = "135024";
// console.log('012345');
// console.log(str.slice(0, str.length / 2), str.slice(str.length / 2));
