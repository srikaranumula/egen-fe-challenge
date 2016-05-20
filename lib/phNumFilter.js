(function () {
    angular.module('phNumFilter', [])
            .filter('tel', tel);

    function tel() {
        return function (number) {
            if (!number)
                return '';

            if (!/^\+?[0-9]+/.test(number)) {
                return '';
            }

            var countries = {
                BRAZIL: {
                    code: '+55',
                    format: 'XX XXXX-XXXX',
                    length: 10
                },
                FRANCE: {
                    code: '+33',
                    format: 'XX XX XX XX XX',
                    length: 10
                },
                INDIA: {
                    code: '+91',
                    format: 'XXXXX-XXXXX',
                    length: 10
                },
                SINGAPORE: {
                    code: '+65',
                    format: 'XXXX XXXX',
                    length: 8
                },
                USA: {
                    code: '+1',
                    format: '(XXX) XXX-XXXX',
                    length: 10
                }
            };

            //set default country to USA
            var country = 'USA',
                    withCountryCode = false,
                    codeSegment = '', //will hold the country code segment of the number
                    numberSegment = number, //will hold the phone number segment. Defaults to the given number.
                    formattedNumber = '';


            //Check for country code and if present change the country
            if (number.indexOf('+') === 0) { //number contains country code
                angular.forEach(countries, function (value, countryName) {
                    var code = value.code;
                    if (number.indexOf(code) === 0) {
                        country = countryName;
                        withCountryCode = true;
                        codeSegment = number.substring(1, code.length); //ignoting the + sign
                        numberSegment = number.substring(code.length, number.length);
                        if (numberSegment.length === value.length) {
                            formattedNumber = formatNumber(numberSegment, value.format);
                        }
                    }
                })
            }else{
                var obj = countries.USA;
                if (numberSegment.length === obj.length) {
                    formattedNumber = formatNumber(numberSegment, obj.format);
                }
            }

            function formatNumber(number, format) {
                for (var i = 0; i < number.length; i++) {
                    format = format.replace('X', number.charAt(i));
                }
                return format;
            }
            return formattedNumber;
        }
    }
})();