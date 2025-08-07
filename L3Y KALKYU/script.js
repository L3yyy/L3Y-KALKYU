const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".cal_btn button");
const specialChars = ["%", "×", "/", "-", "+", "="];
let justEvaluated = false;
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(
                output
                    .replace(/×/g, "*")
                    .replace(/%/g, "/100")
            ).toString();
            justEvaluated = true;
        } catch (error) {
            output = "Error";
            justEvaluated = true;
        }
    } else if (btnValue === "AC") {
        output = "";
        justEvaluated = false;
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
        justEvaluated = false;
    } else {
        if (justEvaluated && !specialChars.includes(btnValue)) {
            output = "";
        }
        justEvaluated = false;
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

function dark_mode() {
    var element = document.body;
    const icon = document.getElementById("toggle-icon")
    const isDark = element.classList.toggle("dark-mode");

    if (isDark) {
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on")
    } else {
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off")
    }

    localStorage.setItem("darkMode", isDark)
}