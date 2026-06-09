let calculation = JSON.parse(localStorage.getItem('calculations')) || '';
        document.querySelector('.js-calculations').innerHTML = calculation;


        function updateCalculation(value) {
            calculation += value;
            console.log(calculation);
            document.querySelector('.js-calculations').innerHTML = calculation;
            calc = localStorage.setItem('calculations', JSON.stringify(calculation))
        }