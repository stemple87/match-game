!function e(r,n,t){function o(i,s){if(!n[i]){if(!r[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var c=n[i]={exports:{}};r[i][0].call(c.exports,function(e){var n=r[i][1][e];return o(n?n:e)},c,c.exports,e,r,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}({1:[function(e,r,n){n.memory=function(e,r){var n=0;return(1===e&&2===r||2===e&&1===r)&&(n+=1),(3===e&&4===r||4===e&&3===r)&&(n+=1),(5===e&&6===r||6===e&&5===r)&&(n+=1),(7===e&&8===r||8===e&&7===r)&&(n+=1),(9===e&&10===r||10===e&&9===r)&&(n+=1),(11===e&&12===r||12===e&&11===r)&&(n+=1),(13===e&&14===r||14===e&&13===r)&&(n+=1),(15===e&&16===r||16===e&&15===r)&&(n+=1),n}},{}],2:[function(e,r,n){var t=e("./../js/memory.js").count;$(document).ready(function(){var e=0,r=[],n=[];$(".question").click(function(){event.preventDefault(),$(this).toggleClass("question");var o,u,i,s=$(this).attr("id");if(0===e)o=s,r.push(o),e+=1;else if(1===e){u=s,r.push(u),e+=1;var a=t(parseInt(r[0]),parseInt(r[1]));1===a&&n.push(a)}else{e=0,i=s,r.push(i);for(var f=0;f<r.length;f++){var c=document.getElementById(r[f]);$(c).toggleClass("question")}r=[];var l=n.length;8===l&&$("#winner").append("You're a winner")}})})},{"./../js/memory.js":1}]},{},[2]);