describe('Testing angular Phone Number Filter', function() {
    beforeEach(module('phNumFilter'));

    describe('tel', function(){
        var $filter;
        beforeEach(inject(function(_$filter_){
            $filter = _$filter_;
        }));
        it('Testing number 1234567890 without country code', function() {
            expect($filter('tel')("1234567890")).toEqual("(123) 456-7890");
        });
        it('Testing US Number +11234567890', function() {
            expect($filter('tel')("+11234567890")).toEqual("(123) 456-7890");
        });
        it('Testing BRAZIL Number +551234567890', function() {
            expect($filter('tel')("+551234567890")).toEqual("12 3456-7890");
        });
        it('Testing FRANCE Number +331234567890', function() {
            expect($filter('tel')("+331234567890")).toEqual("12 34 56 78 90");
        });
        it('Testing INDIA Number +911234567890', function() {
            expect($filter('tel')("+911234567890")).toEqual("12345-67890");
        });
        it('Testing SINGAPORE Number +6512345678', function() {
            expect($filter('tel')("+6512345678")).toEqual("1234 5678");
        });
        it('Invalid Phone Numbers should return empty value', function() {
            expect($filter('tel')("31272192")).toEqual('');
        });
        it('Invalid characters should return empty value (1)', function() {
            expect($filter('tel')("12345678asdf")).toEqual('');
        });
        it('Invalid characters should return empty value (2)', function() {
            expect($filter('tel')("Test string")).toEqual('');
        });
        it('Applying filter on undefined should return empty', function() {
            expect($filter('tel')(undefined)).toEqual('');
        });
    });
});