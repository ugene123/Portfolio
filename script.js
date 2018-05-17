"use strict";
var $ = function(id) {
  return document.getElementById(id);
};

var alertEmail = function() {
  alert('Email: yy459@drexel.edu');
};

var end = new Date('06/01/2021 10:10 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            $('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        $('countdown').innerHTML = days + ' days, ';
        $('countdown').innerHTML += hours + ' hrs, ';
        $('countdown').innerHTML += minutes + ' mins, & ';
        $('countdown').innerHTML += seconds + ' secs';
    };

function currentStatus() {
  var now = new Date();

  if (new Date('04/01/2018') <= now && now <= new Date('09/08/2018')) {
      // 2018 spring & summer quarter
      $('status').innerHTML = "in-class";
  } else if (new Date('09/25/2018') <= now && now <= new Date('03/30/2019')) {
      // 2nd Coop
      $('status').innerHTML = "on co-op";
  } else if (new Date('04/01/2019') <= now && now <= new Date('09/08/2019')) {
      // 2019 spring & summer quarter
      $('status').innerHTML = "in-class";
  } else if (new Date('09/25/2019') <= now && now <= new Date('03/30/2020')) {
      // 3rd Coop
      $('status').innerHTML = "on co-op";
  } else if (new Date('04/01/2020') <= now && now <= new Date('06/15/2021')) {
      // 2020 spring/summer/fall & 2012 winter/spring quarter
      $('status').innerHTML = "in-class";
  } else {
    $('status').innerHTML = "on break";
  }


}

timer = setInterval(showRemaining, 1000);


var date
window.onload = function() {
    $("email").onclick = alertEmail;

    currentStatus();
};
