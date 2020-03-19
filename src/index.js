module.exports = function toReadable (number) {
    let num = +number;
  let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let elen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
  let readable = [];
  let hundreds = Math.floor(num / 100);
  let twen = num % 100;
  let eden = twen % 10;
  if (number === 0) return ['zero'];
  if (hundreds > 0) {
    readable.push(units[hundreds]);
    readable.push('hundred');
}
  if (twen >= 20) {
    readable.push(dozens[Math.floor(twen / 10)]);
    if (eden !== 0) readable.push(units[eden]);
  }
  else if (twen >= 10) readable.push(elen[twen % 10]);
  else if (twen !== 0) readable.push(units[eden]);
  return readable.join(' ');
}
