
new WOW().init();

var data = [
    {
        "header": " Tools that I use: ",
        "cells": [
            "<h4><b>HTML</b></h4> <i class=\"fab fa-html5\"></i>",
            "<h4><b>CSS</b></h4> <i class=\"fab fa-css3-alt\"></i> ",
            "<h4><b>JS</b></h4> <i class=\"fab fa-js\"></i>",
            "<h4><b>NodeJS</b></h4> <i class=\"fab fa-node\"></i>",
            "<h4><b>Express</b></h4> <span class=\"express\">()</span>",
            "<h4><b>MongoDB</b></h4> <i class=\"fas fa-leaf\"></i>"
        ]
    },
    {
        "header": " My last projets: ",
        "cells": [
            "<div class='projLink'> <a href='https://tranquil-fjord-63888.herokuapp.com/' target='_blank'> <h4><b>YelpCamp</b></h4> <img src='imges/YelpCampIcon.jpg'> </a> </div>",
            "<div class='projLink'> <a href='BarleyBreak/main.html' target='_blank'> <h4><b>Barley-Break</b></h4> <img src='imges/BarleyBreakIcon.jpg'> </a> </div>",
            "<div class='projLink'> <a href='ToDoList/main.html' target='_blank'> <h4><b>ToDo List</b></h4> <img src='imges/ToDoListIcon.jpg'> </a> </div>",
            "",
            "",
            ""
        ]
    }
];

function smoothAppearence(element, time)
{
	var mainString = document.querySelector(element);
	var mainStrArr = mainString.innerText.split("");
	var newString = '<span class="n">';

	for (var i = 0; i < mainStrArr.length; i++)
		newString += mainStrArr[i] + '</span><span class="n">';

	newString += '</span>';

	mainString.innerHTML = newString;

	arrSpan = document.querySelectorAll(element + " .n");

	arrSpan.forEach(function(span){
		span.classList.toggle("invisible");
	});

	for (var i = 0; i < arrSpan.length; i++)
		setTimeout(function(elem) {
		  elem.classList.toggle("invisible");
		}, 60*(i+1) + time, arrSpan[i]);
	return 60*(arrSpan.length + 1);
}

var time = smoothAppearence("#q1", 0);
smoothAppearence("#q2", time);

var chevRight = document.querySelector(".fa-chevron-right");
var chevLeft = document.querySelector(".fa-chevron-left");
chevLeft.classList.toggle("chevron-disable");


renderContainer = function(dataElem){
	var headerContainer = document.querySelector("#headerContainer");
	headerContainer.innerHTML = dataElem.header;

	for ( var i = 1; i <= 6; i++)
	{
		var temp = document.querySelector(".cell" + i);
		temp.innerHTML = dataElem.cells[i-1];
		if ( dataElem.cells[i-1] == "")
		{
			temp.classList.remove(".cell" + i);

		}
	}
}

renderContainer(data[0]);
chevronAbleRight = function(){
	if(!chevRight.classList.contains("chevron-disable"))
	{
		chevLeft.classList.toggle("chevron-disable");
		chevRight.classList.toggle("chevron-disable");

		renderContainer(data[1]);
	}
}

chevronAbleLeft = function(){
	if(!chevLeft.classList.contains("chevron-disable"))
	{
		chevLeft.classList.toggle("chevron-disable");
		chevRight.classList.toggle("chevron-disable");

		renderContainer(data[0]);
	}
}
