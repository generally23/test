function remove(code, i = 0) {
    if (i === code.length) return '';
    const tokens = ['(', ')', '{', '}', '[', ']', '*', '/', '+', '-', ',', ';'];
    const char = code[i];
    const prevchar = code[i - 1];
    const nextchar = code[i + 1];
    if (char === '\n') return '' + remove(code, i + 1);
    if (char === ' ') {
        if (char === nextchar || char === prevchar) {
            return '' + remove(code, i + 1)
        }
        if (tokens.includes(prevchar) || tokens.includes(nextchar)) {
            return remove(code, i + 1)
        }
    }
    return char + remove(code, i + 1)
}
