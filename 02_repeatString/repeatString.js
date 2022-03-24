const repeatString = function(text, repeat) {
    if (repeat < 0) return 'ERROR'
    let string = "";
    for (let i = 0; i < repeat; i++){
        string += text;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
