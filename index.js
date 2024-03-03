let btn = document.querySelector("button");
// console.log(btn);
let input = document.getElementById("inp");
const pass =
  "ABCDEFGHIJKHLMNOQST!P@R#TUVWXVZa%cdefghi*k?mnopqrstuvwsyz0123456789";
// for (let i = 0; i < 10; i++) {
//   ranDom = Math.floor(Math.random() * pass.length - 1) + 1;
//   finalpass += pass[ranDom];
// }
let dis = document.getElementsByClassName("display");
let inpPass = document.getElementById("inpPass");
// console.log(inpPass.value);

btn.addEventListener("click", function () {
  let finalpass = "";
  for (let i = 0; i < 10; i++) {
    ranDom = Math.floor(Math.random() * pass.length - 1) + 1;
    finalpass += pass[ranDom];
  }
  inpPass.setAttribute("value", finalpass);
});

// let copy = document.getElementById("copy");
// console.log(copy);
function copy() {
  let inpPass = document.getElementById("inpPass");
  console.log("hello", inpPass.value);
  console.log(navigator);
  console.log(navigator.clipboard);
  inpPass.select();
  inpPass.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(inpPass.value);
}

// for (let i = 0; i < 3; i++) {
//   ranDom = Math.floor(Math.random() * 62);
//   console.log(ranDom);
//   console.log(pass[ranDom]);
//   arr += pass[ranDom].concat(ranDom);
// }
// console.log(arr);

// let finalvalue = "";
// for (let i = 0; i < 10; i++) {
//   let ranDom = Math.floor(Math.random() * pass.length);
//   //   console.log(ranDom[i]);
//   finalvalue += pass[ranDom];
// }
// console.log(finalvalue);
var typing = new Typed(".text", {
  strings: [
    "",
    "Youtuber",
    "Freelancer",
    "Graphics Designer",
    "Web Designer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});
