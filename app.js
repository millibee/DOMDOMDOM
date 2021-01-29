document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  button.appendChild(btnText);
  document.body.appendChild(button);
  
  button.addEventListener("click", function () {
    let div = document.createElement("div");
    let divText = document.createElement ("divText");
    document.body.appendChild(div);
    document.body.appendChild(divText);
    div.className = "block";
    // divText.style.display = "none";
    // divText.textContent = 
    // divText.appendChild(divText);
    
//     divText.style.display = "none";

//     div.addEventListener("mouseover", function () {
//       divText.style.display = "flex";
//       divText.style.justifyContent = "center";
    
//     div.addEventListener("mouseout", function () {
//       divText.style.display = "none";
// // };

// square.addEventListener('click', function () {
//   let letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//     square.style.backgroundColor = color;
//   }
});
  });
