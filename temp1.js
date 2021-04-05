const celciusInput = document.getElementById('cel');
const farenheitInput = document.getElementById('fer');
const kelvinInput = document.getElementById('kel');




const celciustoferandkel = () => {


    const celcTemp = parseFloat(celciusInput.value);
    const ferTemp = (celcTemp * 1.8) + 32;
    const kelTemp = celcTemp + 273.15;
    farenheitInput.value = ferTemp;
    kelvinInput.value = kelTemp;






};
const ferenheitTokelcel = () => {
    const ferTemp = parseFloat(farenheitInput.value);
    const celcTemp = (ferTemp - 32) * (5 / 9);
    const kelTemp = (ferTemp + 459.67) * (5 / 9);
    celciusInput.value = celcTemp;
    kelvinInput.value = kelTemp;



};


const keltocelfer = () => {
    const kelTemp = parseFloat(kelvinInput.value);
    const celcTemp = kelTemp - 273;
    const ferTemp = 1.8 * (kelTemp - 273) + 32;
    celciusInput.value = celcTemp;
    farenheitInput.value = ferTemp;


};

const main = () => {
    celciusInput.addEventListener('input', celciustoferandkel);
    farenheitInput.addEventListener('input', ferenheitTokelcel)
    kelvinInput.addEventListener('input', keltocelfer);

};

main();