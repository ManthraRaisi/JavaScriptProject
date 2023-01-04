const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log("canvas", c);

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
  static width = 40;
  static height = 40;

  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  drawBoundary() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 10;
  }
  drawPlayer() {
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = "yellow";
    c.fill();
    c.closePath();
  }
  updatePlayer() {
    this.drawPlayer();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
const map = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "7", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "+", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", "_", ".", ".", ".", ".", "|"],
  ["|", ".", "[", "]", ".", ".", ".", "[", "]", ".", "|"],
  ["|", ".", ".", ".", ".", "^", ".", ".", ".", ".", "|"],
  ["|", ".", "b", ".", "[", "5", "]", ".", "b", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", "p", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
];
const boundaries = [];
const player = new Player({
  position: {
    x: Boundary.width + Boundary.width / 2,
    y: Boundary.height + Boundary.height / 2,
  },
  velocity: { x: 0, y: 0 },
});
// map.forEach((row, i) => {
//   row.forEach((symbol, j) => {
//     switch (symbol) {
//       case "-":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeHorizontal.png"),
//           })
//         );
//         break;
//       case "|":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeVertical.png"),
//           })
//         );
//         break;
//       case "1":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeCorner1.png"),
//           })
//         );
//         break;
//       case "2":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeCorner2.png"),
//           })
//         );
//         break;
//       case "3":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeCorner3.png"),
//           })
//         );
//         break;
//       case "4":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/pipeCorner4.png"),
//           })
//         );
//         break;
//       case "b":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: Boundary.width * j,
//               y: Boundary.height * i,
//             },
//             image: createImage("./img/block.png"),
//           })
//         );
//         break;
//       case "[":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/capLeft.png"),
//           })
//         );
//         break;
//       case "]":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/capRight.png"),
//           })
//         );
//         break;
//       case "_":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/capBottom.png"),
//           })
//         );
//         break;
//       case "^":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/capTop.png"),
//           })
//         );
//         break;
//       case "+":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/pipeCross.png"),
//           })
//         );
//         break;
//       case "5":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             color: "blue",
//             image: createImage("./img/pipeConnectorTop.png"),
//           })
//         );
//         break;
//       case "6":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             color: "blue",
//             image: createImage("./img/pipeConnectorRight.png"),
//           })
//         );
//         break;
//       case "7":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             color: "blue",
//             image: createImage("./img/pipeConnectorBottom.png"),
//           })
//         );
//         break;
//       case "8":
//         boundaries.push(
//           new Boundary({
//             position: {
//               x: j * Boundary.width,
//               y: i * Boundary.height,
//             },
//             image: createImage("./img/pipeConnectorLeft.png"),
//           })
//         );
//         break;
//       case ".":
//         pellets.push(
//           new Pellet({
//             position: {
//               x: j * Boundary.width + Boundary.width / 2,
//               y: i * Boundary.height + Boundary.height / 2,
//             },
//           })
//         );
//         break;
//     }
//   });
// });
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  boundaries.forEach((boundery) => {
    boundery.drawBoundary();
  });

  player.updatePlayer();
}
animate();

window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      player.velocity.y = -5;
      break;
    case "s":
      player.velocity.y = 5;
      break;
    case "d":
      player.velocity.x = 5;
      break;
    case "a":
      player.velocity.x = -5;
      break;
  }
  console.log(player.velocity);
});

window.addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "w":
      player.velocity.y = 0;
      break;
    case "s":
      player.velocity.y = 0;
      break;
    case "d":
      player.velocity.x = 0;
      break;
    case "a":
      player.velocity.x = 0;
      break;
  }
  console.log(player.velocity);
});
