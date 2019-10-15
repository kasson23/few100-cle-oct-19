import './styles.css';
import { multiply } from "./math";

const num1 = document.getElementById("number1") as HTMLInputElement;
const num2 = document.getElementById("number2") as HTMLInputElement;
const multiplyButton = document.getElementById("multiply") as HTMLInputElement;
const answer = document.getElementById("answer") as HTMLInputElement;


multiplyButton.addEventListener('click', () => {
    const n1 = num1.valueAsNumber;
    const n2 = num2.valueAsNumber;

    const ans = multiply(n1, n2);

    answer.innerText = ans.toString();
})


