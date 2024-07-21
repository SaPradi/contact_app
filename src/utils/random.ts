export function generateRandomId():number{
  const numDigits = Math.floor(Math.random() * 4) + 1;
  const min = Math.pow(10, numDigits - 1);
  const max = Math.pow(10, numDigits) - 1;
  const id = Math.floor(Math.random() * (max - min + 1)) + min;
  return id;
}
