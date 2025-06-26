const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



// log in page design

// const loginContainer = document.querySelector(".login-container");

// function switchToDarkTheme() {
//   document.body.classList.add("dark-theme");

//   loginContainer.removeEventListener("mouseenter", switchToDarkTheme);
// }

// loginContainer.addEventListener("mouseenter", switchToDarkTheme);

// const alienShip = document.querySelector(".alien-ship");

// [
//   "......#......",
//   "......#......",
//   "....##.##....",
//   "...#.....#...",
//   "..#.......#..",
//   "#############",
//   "..#########..",
//   "...#######...",
//   "....#####...."
// ].forEach((row, rowIndex) => {
//   row.split("").forEach((cell, colIndex) => {
//     if (cell === "#") {
//       const pixel = document.createElement("div");
//       pixel.classList.add("pixel");
//       pixel.style.gridColumn = colIndex + 1;
//       pixel.style.gridRow = rowIndex + 1;
//       alienShip.appendChild(pixel);
//     }
//   });
// });

// const beam = document.querySelector(".beam");

// function activateBeam() {
//   setTimeout(() => {
//     beam.classList.add("active");

//     setTimeout(() => {
//       loginContainer.classList.add("disappear");

//       setTimeout(() => {
//         beam.classList.remove("active");
//         setTimeout(() => {
//           alienShip.classList.add("fly-away");
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 1000);
// }

// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     if (
//       mutation.attributeName === "class" &&
//       document.body.classList.contains("dark-theme")
//     ) {
//       activateBeam();
//       observer.disconnect();
//     }
//   });
// });

// observer.observe(document.body, { attributes: true });

// /*
// setTimeout(() => {
//   switchToDarkTheme();
// }, 2000);
// */
