function changeImage(id) {
	let temp = document.getElementById(id).getAttribute('src');
	document.getElementById('mainItem').setAttribute('src', temp);
}
