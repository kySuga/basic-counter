// initial count
let count = 0;

const number = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("btn__decrease-number")) {
//       count--;
//     } else if (styles.contains("btn__increase-number")) {
//       count++;
//     } else if (styles.contains("btn__reset-number")) {
//       count = 0;
//     }
//     if (count < 0) {
//       number.style.color = "red";
//     }
//     if (count > 0) {
//       number.style.color = "green";
//     }
//     if (count === 0) {
//       number.style.color = "var(--color-tertiary)";
//     }
//     number.textContent = count;
//   });
// });

// converted function above to arrow function 
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    const styles = e.currentTarget.classList;
    if (styles.contains("btn__decrease-number")) {
      count--;
    } else if (styles.contains("btn__increase-number")) {
      count++;
    } else if (styles.contains("btn__reset-number")) {
      count = 0;
    }
    if (count < 0) {
      number.style.color = "red";
    }
    if (count > 0) {
      number.style.color = "green";
    }
    if (count === 0) {
      number.style.color = "var(--color-tertiary)";
    }
    number.textContent = count;
  });
});

