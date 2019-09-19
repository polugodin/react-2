const { encode } = require('./utils');

test('test encode, str = din', () => {
    expect(encode('din')).toBe('(((');
});

test('test encode, str = recede', () => {
    expect(encode('recede')).toBe('()()()');
});

test('test encode, str = Success', () => {
    expect(encode('Success')).toBe(')())())');
});

test('test encode, str = CodeWarrior', () => {
    expect(encode('CodeWarrior')).toBe('()(((())())');
});

test('test encode, str = Supralapsarian', () => {
    expect(encode('Supralapsarian')).toBe(')()))()))))()(');
});

test('test encode, str = iiiiii', () => {
    expect(encode('iiiiii')).toBe('))))))');
});

test('test encode, str = (( @', () => {
    expect(encode('(( @')).toBe('))((');
});

test('test encode, str =  ( ( )', () => {
    expect(encode(' ( ( )')).toBe(')))))(');
});

test('test encode, str = @J@c!@@@z@@)', () => {
    expect(encode('@J@c!@@@z@@)')).toBe(')()(()))())(');
});

test('test encode, str = kzmdGmmuImcmmmn', () => {
    expect(encode('kzmdGmmuImcmmmn')).toBe('(()(())(()()))(');
});

test('test encode, str = Od)OIOORQOmS', () => {
    expect(encode('Od)OIOORQOmS')).toBe(')(()())(()((');
});

test('test encode, str = QTnTTTPIv(TT', () => {
    expect(encode('QTnTTTPIv(TT')).toBe('()()))(((())');
});

test('test encode, str = kyQe@!cyJmyyvFyyyyy', () => {
    expect(encode('kyQe@!cyJmyyvFyyyyy')).toBe('()((((()(())(()))))');
});