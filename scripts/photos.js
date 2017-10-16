addLoadEvent(prepareGallery)
addLoadEvent(preparePlaceholder)
function prepareGallery(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById)return false;
	if(!document.getElementById("ulx"))return false;
	var gallery = document.getElementById("ulx");
	var links = gallery.getElementsByTagName("a");
		for(var i=0;i<links.length;i++){
			links[i].onclick = function(){
				return showPic(this)?false:true
			}
		}
}	


function preparePlaceholder(){
if(!document.createElement)return false;
if(!document.createElement)return false;
if(!document.getElementById) return false;
if(!document.getElementById("ulx"))return false;
var placeholder = document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","images/placeholder.gif");
var description = document.createElement("p");
description.setAttribute("id","description");
var txt = document.createTextNode("Choose an image.");
description.appendChild(txt);
var gallery = document.getElementById("ulx");
insertAfter(description,gallery);
insertAfter(placeholder,description);
}




function showPic(whichpic)
{
if(!document.getElementById("placeholder"))return false;
var source = whichpic.getAttribute("href");
var placeholder = document.getElementById("placeholder");
placeholder.setAttribute("src",source);
if(document.getElementById("description")){
var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
var description = document.getElementById("description");
if(description.firstChild.nodeType == 3){
description.firstChild.nodeValue = text;
}
return true;
}

}