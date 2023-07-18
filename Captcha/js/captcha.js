
var answerNumeros;
$(document).ready(function () {

    var CaptchaMostrar = ["Numeros", "Letras",];
    var randomIndex = Math.floor(Math.random() * CaptchaMostrar.length);
    var randomPalabra = CaptchaMostrar[randomIndex];
    console.log(randomPalabra);

    if(randomPalabra == "Numeros"){
        $("#ValidateNumeros").show();
        $("#ValidateLetras").hide();
    }else{
        $("#ValidateNumeros").hide();
        $("#ValidateLetras").show();  
    }
    generateNewCaptchaLetras();
    answerNumeros = generateNewCaptchaNumeros();
    $("#ValidarLetras").click(function () {
        validateCaptchaLetras();
    });


    $("#ValidarNumeros").click(function () {
        validateCaptchaNumeros();
    })

});



// Generar una cadena de texto aleatoria para el captcha
function generateCaptchaLetras(length = 5) {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var captcha = '';
    for (var i = 0; i < length; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}



// Generar un nuevo captcha y mostrarlo en la página
function generateNewCaptchaLetras() {
    var captchaDiv = document.getElementById('captchaLetras');
    var captchaText = generateCaptchaLetras();
    captchaDiv.textContent = captchaText;
}


// Verificar si el texto ingresado coincide con el captcha actual
function validateCaptchaLetras() {
    var captchaDiv = document.getElementById('captchaLetras');
    var captchaInput = document.getElementById('captchaInputLetras').value;

    if (captchaInput.toLowerCase() === captchaDiv.textContent.toLowerCase()) {
        $("#CorrectoLetras").show();
        $("#FalloLetras").hide();


        generateNewCaptcha();
    } else {
        $("#CorrectoLetras").hide();
        $("#FalloLetras").show();


    }
}


function validateCaptchaNumeros() {
    var captchaDivNumeros = document.getElementById('captchaNumeros');
    var captchaInputNumeros = document.getElementById('captchaInputNumeros').value;
    var expectedAnswer = captchaDivNumeros.dataset.answerNumeros;

    if (captchaInputNumeros === answerNumeros.toString()) {
        $("#CorrectoNumeros").show();
        $("#FalloNumeros").hide();
        answerNumeros = generateNewCaptchaNumeros();
        document.getElementById('captchaInputNumeros').value = '';
        captchaDivNumeros.dataset.answer = answer;
    } else {
        $("#CorrectoNumeros").hide();
        $("#FalloNumeros").show();
    }
}
function generateCaptchaNumeros() {
    var operators = ['+', '-', '*', '/'];
    var operator = operators[Math.floor(Math.random() * operators.length)];
    var operand1 = Math.floor(Math.random() * 10) + 1;
    var operand2 = Math.floor(Math.random() * 10) + 1;
    var captcha = operand1 + ' ' + operator + ' ' + operand2;
    return { captcha: captcha, answer: eval(captcha) };
}
function generateNewCaptchaNumeros() {
    var captchaDiv = document.getElementById('captchaNumeros');
    var captcha = generateCaptchaNumeros();
    captchaDiv.textContent = captcha.captcha;
    return captcha.answer;
}











