# angular-datetimepicker

A simple AngularJS module with a directive for creating a datetimepicker that takes up little space on the screen, and comes with two different styles.

With this user can change date and time values by clicking on +/- buttons or by typing the value in the box.
Moment.js is used for all calculations relating to the date and time.

![table](/screenshots/table.png?raw=true)
![input](/screenshots/input.png?raw=true)

### USAGE

The module requires Moment.js and, obviously, AngularJS (tested v1.3.14).
Import in your project Moment.js (with or without locales), AngularJS, vm-datetimepicker.js and vm-datetimepicker.css
When you're done, your setup should look similar to the following:

```html
<!DOCTYPE html>
<html>
	<head>
		<link href="vm-datetimepicker.css" media="all" rel="stylesheet" type="text/css">
		<script src="http://momentjs.com/downloads/moment-with-locales.min.js"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
		<script src="vm-datetimepicker.js"></script>
		...
	</head>

	<body ng-app="TestApp" ng-controller="AppController">

		...

		<span datetime-input data-style-picker="input" ng-model="date"></span>
		
		<script>
			var testApp = angular.module('TestApp', ['vm-datetimepicker']);
		</script>
	</body>
</html>
```

To create a datetime picker:
* Add the module vm-datetimepicker as a dependency to your app module.
* Add the datetime-input directive to your element and it will be replaced. A model is required.

You can select a style by specifying data-style-picker="table" or data-style-picker="input". You can also build a custom style and specify data-style-picker="yourClass", that class will be placed in the root element of the datetimepicker.

I hope this can be a useful starting point for datepicker of your projects ;)