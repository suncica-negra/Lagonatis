$(document).ready(function () {
	const menuEight = document.querySelector('.menuEight');

	function addClassFunEight() {
		this.classList.toggle("clickMenuEight");
	}

	menuEight.addEventListener('click', addClassFunEight);
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});