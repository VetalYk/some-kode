window.onload = function(){
	var slider = document.getElementById('slider');
	var slideWidth = 470;
	var button = document.getElementById('btn_radio');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var cont = document.getElementById('cont');
	var interval = setInterval(startSlide, 5000);
	cont.style.left = '0px';

	for(var i=0; i<4; i++){	
		var img = document.createElement('img');
		img.setAttribute('src', 'image/slide'+(i+1)+'.jpg');
		img.setAttribute('class', 'slide');
		img.style.left = (i*slideWidth)+'px';
		document.getElementById('cont').appendChild(img);

		var btn = document.createElement('div');
		btn.style.left=(i+1)*(28+10)+'px';
		button.appendChild(btn);
    btn.onclick = changePage;
	}

	bg_active();
	next.onclick = startSlide;	
	prev.onclick = prevImg;


	function startSlide () {
		cont.style.left = parseInt(cont.style.left) - slideWidth + 'px';
		if(parseInt(cont.style.left) <= -slideWidth*i){
			cont.style.left = '0px';
		}
		bg_active();
		stopStartInterval();
	}


	function stopStartInterval () {
		clearInterval(interval);
    interval = setInterval(startSlide, 5000);
	}


	function prevImg(){
		cont.style.left = parseInt(cont.style.left) + slideWidth + 'px';
		if(parseInt(cont.style.left) > 0){
			cont.style.left = -slideWidth*(i-1)+'px';
		}
		bg_active();
		stopStartInterval();
	};


	function changePage(e){
    var arr = button.children;
    var index = Array.prototype.indexOf.apply(arr, [e.target]);
    cont.style.left = (-index*slideWidth)+'px';
    bg_active();
    stopStartInterval();
   }


	function bg_active() {
		var strafe = parseInt(cont.style.left);
		var n = Math.abs(strafe/slideWidth);

		for(var k=0; k<button.children.length; k++){
			button.children[k].setAttribute('class', 'noactive');
		}
		button.children[n].setAttribute('class', 'active');
	}
}

