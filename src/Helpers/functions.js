/**
 * 
 * @param {*} text Le text a decoupé
 * @param {*} delimit La delimitation
 */
const sliceText = (text, delimit) => {
    if (text.length > delimit) {
        return text.substring(0, delimit) + '...';
    } else {
        return text;
    }
}

export { sliceText }