enum Direction {
  Up,
  Down,
  Left,
  Right,
}
function walk(str: Direction) {
  if (str === Direction.Up) {
    console.log("向【上】走");
  }
}
