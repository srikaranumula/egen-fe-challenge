# Phone Number Filter
This is an angularJs filter that can format phone number for different countries based on their country code.

Currently it supports formatting phone number of 5 countries:
 * BRAZIL
 * FRANCE
 * INDIA
 * SINGAPORE
 * USA (default if no country code is provided)

## Installing
##### Bower
This filter can be added to your application through ````bower```` by running following command.
````
bower install phone-number-filter
````
````html
<script src="bower_components/phone-number-filter/lib/phNumFilter.j">
````
##### Direct Installation
You can download the ````phNumFilter.js```` file present in the ````lib```` folder and add it to your html.
````html
<script src="path-to-file/phNumFilter.j">
````

## Usage
To use the filter inject ````phNumFilter```` to your main apps dependancy list. After that you can use the filter ````tel```` in your html or in your controller.
#### Example
##### In HTML
````html
<span>{{'1234567890' | tel}}</span> //will print '(123) 456-7890' (default USA)
<span>{{'+551234567890' | tel}}</span> //will print '12 3456-7890' (BRAZIL)
<span>{{'+331234567890' | tel}}</span> //will print '12 34 56 78 90' (FRANCE)
````

#### In Controller
````javascript
$scope.FormattedNumber = $filter('tel')($scope.phoneNumber);
````

#### Running the example
To run the example first install all the required node modules and bower components using ````npm install```` and ````bower install```` respectively.

Run ````grunt buildEx```` to build the examples. After that run ````grunt serve````. This will start a static node server which can be accessed by ````http://localhost:9000````

#### Running test cases

Unit test cases for the filter have also been added which can be executed by running ````karma start````. Once the test cases are executed, a html report will be created in the folder ````test_report```` present in the root directory.
