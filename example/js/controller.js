(function () {
    'use strict';
    angular.module('app')
            .controller('FilterTestController', FilterTestController);

    FilterTestController.$inject = [
        '$filter'
    ]
    function FilterTestController($filter) {
        var vm = this;
        vm.phoneNum = '';
        vm.detectedCountry = '';
        vm.filteredNumber = '';

        vm.modelChanged = modelChanged;
        vm.getCountryCode = getCountryCode;

        var countries = [
            {
                name: 'BRAZIL',
                code: '+55'
            }, {
                name: 'FRANCE',
                code: '+33'
            }, {
                name: 'INDIA',
                code: '+91'
            }, {
                name: 'SINGAPORE',
                code: '+65'
            }, {
                name: 'USA',
                code: '+1'
            }
        ];

        function modelChanged() {
            getCountryCode();
            vm.filteredNumber = $filter('tel')(vm.phoneNum);
        }

        function getCountryCode() {
            vm.detectedCountry = '';
            for (var i = 0; i < countries.length; i++) {
                var country = countries[i];
                if (vm.phoneNum.indexOf(country.code) === 0) {
                    vm.detectedCountry = country.name;
                    break;
                }
            }
        }
    }
})();
