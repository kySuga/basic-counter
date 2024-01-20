// initial count
let count = 0;

const number = document.querySelector("#number");
const btns = document.querySelectorAll(".btn");

// *** leaving for reference ***
// *****************************
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

    // *** leaving for reference ***
    // *****************************
    // if (count < 0) {
    //   number.style.color = "red";
    // }
    // if (count > 0) {
    //   number.style.color = "green";
    // }
    // if (count === 0) {
    //   number.style.color = "var(--color-tertiary)";
    // }

    // converted above 3x if statements into a ternary statement
    number.style.color = count < 0 ? "red": count > 0 ? "green": "var(--color-tertiary)";
    number.textContent = count;
  });
});

