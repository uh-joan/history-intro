# history-intro

Introduction/presentation for the Angular-based history of events <a href="https://github.com/uh-joan/historyUI/blob/master/README.md">historyUI</a>. 

Takes the user through a step-by-step guide on how to use the memory visualization.

## Keyboard + Mouse navigation

Ability to navigate with the mouse, or the keyboard - ←, →, ENTER and ESC to exit.

=====

Here some pictures of the introduction

<img src="https://github.com/uh-joan/history-intro/blob/master/app/images/overall01.png">

<img src="https://github.com/uh-joan/history-intro/blob/master/app/images/overall02.png">

## How to use

The two main directives are `ng-intro-options` and `ng-intro-method`.

###Setting Options

`ng-intro-options="IntroOptions"`

Create a `$scope.IntroOptions` in your controller which contains the intro.js options. This also allows you to modify the options as part of your controller behavior if necessary.

###Start method

`ng-intro-method="CallMe"`

The directive will create a method on `$scope.CallMe` so that you can invoke it yourself later. Make sure the there isn't a method `CallMe` already in your controller. You don't have to use `CallMe`, you can specify some other name.

###Call the start method

You can invoke it from an event such a click,

`ng-click="CallMe();"`


##It uses:

### Node.js

Asynchronous javascript back-end server event driven framework. 

### Express

Flexible and minimalist web application framework for node.js.

### HTML5 Boilerplate

HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

### AngularJS

AngularJS is a toolset for building the framework for the application development.

### Karma

Test Runner for JavaScript.

### Angular Intro.js
AngularJS directives for intro.js


Developed as part of the <a href="https://github.com/uh-joan/UHCore">University of Hertfordshire Core code</a>

