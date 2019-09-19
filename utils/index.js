const getSliced = (data, count) => {
    if(count < 0) {
        return [];
    }

    return data.slice(0, count);
};

const encode = str => {
    let res = '';
    str = str.toLowerCase();
    for (let i=0; i<str.length; i++)
        res += (str.indexOf(str[i]) === str.lastIndexOf(str[i])) ? '(' : ')';
    return res;
};

module.exports = {
    getSliced,
    encode
};
