// export default function caesarCipher(text, shift) {
//   return text
//     .split("")
//     .map((char) => {
//       if (char.match(/[a-zA-Z]/)) {
//         const isUpperCase = char === char.toUpperCase();
//         const offset = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
//
//         const shifted = String.fromCharCode(
//           ((char.charCodeAt(0) - offset + shift) % 26) + offset
//         );
//         return shifted;
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

// export default function caesarCipher(text, shift) {

//   return text
//     .split("")
//     .map((char) => {
//       if (char.match(/[a-zA-Z]/)) {
//         const isUpperCase = char === char.toUpperCase();
//         const offset = isUpperCase ? "A".charCodeAt(0) : "a".charCodeAt(0);
//         let shiftedCharCode = char.charCodeAt(0) - offset + shift;
//         if (shiftedCharCode < 0) {
//           shiftedCharCode += 26; // Wrap around to the end of the alphabet
//         }
//         const shifted = String.fromCharCode((shiftedCharCode % 26) + offset);
//         return shifted;
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

export default function crypterConverter(text, shift) {
  // Function to shift a single character according to the shift value
  function shiftChar(char, shift) {
    const code = char.charCodeAt(0);
    // Check if the character is a letter
    if (char.match(/[a-zA-Z]/)) {
      const offset = char.toUpperCase() === char ? 65 : 97;
      return String.fromCharCode(
        ((((code - offset + shift) % 26) + 26) % 26) + offset
      );
    }
    return char;
  }

  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += shiftChar(text[i], shift);
  }
  return result;
}
// export const crypterConverter = (text, shift) => {
//   return caesarCipher(text, shift);
// };
