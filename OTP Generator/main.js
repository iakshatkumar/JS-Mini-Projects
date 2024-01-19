const randomOtp = () => {
    return Math.floor(Math.random() * 90000) + 10000;
}

const otpTag = document.getElementById("otp");
const copyBtn = document.getElementById("copy");

const generateBtn = document.getElementById("generate");


generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const otp = randomOtp()
    console.log(otp);

    otpTag.textContent = otp

})

copyBtn.addEventListener('click', () => {
    const otpToCopy = otpTag.innerText;

    const textarea = document.createElement('textarea');
    textarea.value = otpToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Content copied to clipboard!');
})






