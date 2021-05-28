// Wrap every letter in a span
// var textWrapper = document.querySelector("#quote1 .letters");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /([^\x00-\x80]|\w)/g,
//   "<span class='letter'>$&</span>"
// );

// anime
//   .timeline({ loop: false })
//   .add({
//     targets: ".q-anime .line",
//     scaleY: [0, 1],
//     opacity: [0.5, 1],
//     easing: "linear",
//     duration: 100,
//   })
//   .add({
//     targets: ".q-anime .line",
//     translateX: [
//       0,
//       document.querySelector(".q-anime .letters").getBoundingClientRect().width +
//         10,
//     ],
//     easing: "linear",
//     duration: 100,
//     delay: 10,
//   })
//   .add({
//     targets: ".q-anime .letter",
//     opacity: [0, 1],
//     easing: "linear",
//     duration: 50,
//     offset: "-=775",
//     delay: (el, i) => 34 * (i + 1),
//   })
//   ;

