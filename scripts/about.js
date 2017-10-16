// function showSection(id){
// 	var sections = document.getElementsByTagName("section")
// 	for(var i=0;i<sections.length;i++){
// 		if(sections[i].getAttribute("id")!= id){
// 			sections[i].style.display="none";
// 		}else{
// 			sections[i].style.display="block";
// 		}
// 	}
// }

/*function prepareInternalnav(){
	var articles = document.getElementsByTagName("article");
	var navs = articles[0].getElementsByTagName("nav");
	var links = navs[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var sectionId = links[i].getAttribute("href").split("#")[1];
		//把id符合的两个内容隐藏
		document.getElementById(sectionId).style.display="none";
		//随便设置一个新的属性，把sectionId值放进去
		links[i].destination =sectionId;
		links[i].onclick = function(){
			showSection(this.destination)
			return false;
		}
	}

}*/


function showSection(id){
	var sections = document.getElementsByTagName("section");
	for(var i=0;i<sections.length;i++){
		var idx = sections[i].getAttribute("id");
		//把！= 换成= 后程序就不管用 了；   //一个=是赋值  ==才是相等
		//alert(idx)
		if(idx == id){
			sections[i].style.display = "block"
		}else{
			sections[i].style.display = "none"
		}
	}
}

function prepareInternalnav(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById)return false;
	var articles = document.getElementsByTagName("article");
	if(articles.length == 0)return false;
	var navs = articles[0].getElementsByTagName("nav");
	if(navs.length == 0)return false;
	var links = navs[0].getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		var sectionId = links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(sectionId))return false;
		document.getElementById(sectionId).style.display = "none";
		links[i].destination =sectionId;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareInternalnav);