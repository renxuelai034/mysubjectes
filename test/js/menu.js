

	window.onload=function(){
		var navAll = document.getElementById("a");
		var level01 = document.getElementById("ul");//一级菜单
		var level02 = document.getElementById("div");//二级菜单
		var lis = level01.children;
		var divs = level02.children;
		
		level01.onmouseover = function(){
			this.style.display = "block";
		}
		
		navAll.onmouseover = function(){
			level01.style.display = "block";
		}

		for(var i=0; i<lis.length; i++){
			lis[i].index = i;
			lis[i].onmouseover = function(){
				level02.style.display = "block";
				for(var j=0; j<divs.length; j++){
					divs[j].style.display = "none";
				}
				divs[this.index].style.display = "block";
			}
		}
		
		for(var i=0; i<divs.length; i++){
			divs[i].onmouseout = function(){
				level01.style.display = "none";
				level02.style.display = "none";
			}
		}
	}
	
