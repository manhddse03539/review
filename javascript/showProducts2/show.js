function changeOption(type, element) {
	options = document.getElementsByClassName("option");
	for(let i=0; i<options.length; i++){
		options[i].style.background = '#CC6600'; 
	}
	element.style.background = '#FF9933'; 
	document.getElementById(type).style.display = 'flex';
	switch(type) {
	  case 'newBlock':
	    document.getElementById("hotBlock").style.display = 'none';
	    document.getElementById("saleBlock").style.display = 'none';
	    break;
	  case 'hotBlock':
	  	document.getElementById("newBlock").style.display = 'none';
	    document.getElementById("saleBlock").style.display = 'none';
	    break;
	  case 'saleBlock':
	  	document.getElementById("newBlock").style.display = 'none';
	  	document.getElementById("hotBlock").style.display = 'none';
	  	break;
	}
}
