export function isValidEmail(email:string):boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isNotEmpty(str:string):boolean {
    const notEmptyRegex = /^.*\S.*$/;
    return notEmptyRegex.test(str.trim());
}

export function onlyString(str: string): boolean {
    const stringRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/;
    return stringRegex.test(str);
}