function floatImg(){
	if(!document.getElementById)return false;
	if(!document.getElementById("intro"))return false;
	if(!document.getElementsByTagName)return false;
	var divx = document.createElement("div");
	var intro = document.getElementById("intro");
	var imgx = document.createElement("img");
	imgx.setAttribute("src","images/slideshow.gif");
	divx.setAttribute("id","slideshow");
	imgx.setAttribute("id","preview")
	divx.appendChild(imgx);
	insertAfter(divx,intro);
	var links = intro.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	    links[i].onmouseover = function(){
	  	 var destination = this.getAttribute("href")
	  	if(destination.indexOf("index.html") != -1){
	  		moveElement("preview",0,0,5);
	  	}
	  	if(destination.indexOf("about.html") != -1){
	  		moveElement("preview",-150,0,5);
	  	}
	  	if(destination.indexOf("photos.html") != -1){
	  		moveElement("preview",-300,0,5);
	  	}
	  	if(destination.indexOf("live.html") != -1){
	  		moveElement("preview",-450,0,5);
	  	}
	  	if(destination.indexOf("contact.html") != -1){
	  		moveElement("preview",-600,0,5);
	  	}

  	  }
  	}

  	var headerx = document.getElementsByTagName("header")
  	for(var i=0;i<headerx.length;i++){
  	var links = headerx[i].getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
	    links[i].onmouseover = function(){
	  	 var destination = this.getAttribute("href")
	  	if(destination.indexOf("index.html") != -1){
	  		moveElement("preview",0,0,5);
	  	}
	  	if(destination.indexOf("about.html") != -1){
	  		moveElement("preview",-150,0,5);
	  	}
	  	if(destination.indexOf("photos.html") != -1){
	  		moveElement("preview",-300,0,5);
	  	}
	  	if(destination.indexOf("live.html") != -1){
	  		moveElement("preview",-450,0,5);
	  	}
	  	if(destination.indexOf("contact.html") != -1){
	  		moveElement("preview",-600,0,5);
	  	}

  	  }
  	}
    }
}
addLoadEvent(floatImg);