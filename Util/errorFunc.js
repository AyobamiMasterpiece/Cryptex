export default function errorText(
  isEmptyshift,
  isEmptyText,
  isNegativeShift,
  isInvalidShift
) {
  let errText = "";
  if (isEmptyText) {
    errText = "Am sure you did not intend to leave the input box blank.";
  } else if (isEmptyshift) {
    errText = "You need a shift,It is obvious";
  } else if (isNegativeShift) {
    errText = "Sorry, I wont let you use a negative shift";
  } else if (isInvalidShift) {
    errText =
      "Make sure your shift is a number,then it should be less than a thousand. That would be perfect!";
  }
  return errText;
}
