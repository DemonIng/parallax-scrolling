var obj = {
	createSun:function(deg){
		var html='';
		while(deg<360){
			html+='<li style="transform: rotate('+deg+'deg);"></li>';
			deg+=30;
		}
		$('.sun ul').html(html);
		
	},
	sunRotate:function(sundeg){
		var _this = this;
		if(sundeg>=0){
			sundeg+=5;
			 _this.sunTime =  setTimeout(function(){
				$('.sun-first').css({transform:'rotate('+sundeg+'deg)'});
				_this.sunRotate(sundeg);
			},70);
		}
	},
	createHill:function(leftPos){
		var html ='';
		for(var i=0;i<5;i++){
			html+='<div class="hill-first" style="left:'+leftPos+'px">';
			html+='<div class="hill-half">';
			html+='<span></span></div></div>';
			leftPos+=1500;
		}
		$('.hill').html(html);
	},
	createCloud:function(leftPos,topPos){
		var html ='';
		for(var i=0;i<10;i++){
			if(i%2==0){
				html+='<div class="cloud-first" style="left: '+leftPos+'px; top: '+topPos+'px;">';
			}
			else{
				topPos = 160;
				html+='<div class="cloud-first" style="left: '+leftPos+'px; top: '+topPos+'px;">';	
				topPos = 80;
			} 
				html+='<span></span>';
				html+='<span></span></div>';
				leftPos+=640;
		}
		$('.cloud').html(html);
	},
	createFloor:function(num){
		var liLength = num/100;
		var html='';
		for(var i=0;i<liLength;i++){
			if(i==70){
				var num1=300;
				num=num+num1;
				html+='<li style="margin-left:'+num1+'px">';
			}
			else{
				html+='<li>';
			}
			html+='<span></span><span></span><span></span>';
			html+='<div class="arrow"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>';
			html+='</li>';
		}
		var windowHeight = $(window).height();
		var windowWidth = $(window).width();
		$('.floor ul').html(html);
		$('.floor').width(num);//水平和垂直滚动距离：num-windowWidth;
		$('.bar').height(num-windowWidth+windowHeight);
	},
	testScrollStop:function(){//判断滚动条是否停止
		var _this = this;
		var nowScrollTop = $('html').scrollTop()+$('body').scrollTop();
		//console.log(nowScrollTop)
		if(_this.scrollTop == nowScrollTop){
			clearTimeout(_this.interVal);
			_this.interVal=null;
			clearTimeout(_this.sunTime);
		}
		
	},
	createSkill:function(){
		var html='';
		html+='<div class="skill-main" style="left: 1600px">';
		html+='<h1>前端之代码</h1>';
		for(var i=0;i<3;i++){
			if(i==0)
				html+='<dl><dt>Html</dt>';
			else
			if(i==1)
				html+='<dl><dt>Css</dt>';
			else
			if(i==2)
				html+='<dl><dt>Js</dt>';
			html+='<dd>√</dd><dd>√</dd><dd>√</dd><dd>√</dd><dd>√</dd></dl>';	
			
		}
		html+='</div></div>';
		html+='<div class="skill-main current" style="left: 3200px">';
		html+='<h1>前端之框架</h1>';
		for(var i=0;i<3;i++){
			if(i==0)
				html+='<dl><dt>Jquery</dt>';
			else
			if(i==1)
				html+='<dl><dt>Bookstrap</dt>';
			else
			if(i==2)
				html+='<dl><dt>Less</dt>';
			if(i==0)
				html+='<dd>☠</dd><dd>☠</dd><dd>☠</dd><dd>☠</dd></dl>';
			else
				html+='<dd>☠</dd><dd>☠</dd><dd>☠</dd></dl>';
			
			
		}
		html+='<div class="wing"><span></span><span></span></div>';
		html+='<div class="wing-right"><span></span><span></span></div>';
			
			
		
		html+='</div></div>';
		$('.skill').html(html);
		
	},
	climbFun:function(){
		
		var _this = this;
		//console.log(_this.scrollTop)
		if(_this.scrollTop<630){
			$('.person').css({transform:'rotate(0deg)',bottom:158+'px'})
			
		}
		if(_this.scrollTop>=630&&_this.scrollTop<2583){
				//alert(1)
			var	bot = (_this.scrollTop-630)/5;
		//console.log(_this.scrollTop,bot)
			
				$('.person').css({transform:'rotate(-45deg)',bottom:158+bot+'px'})
				//console.log($('.person').css('bottom'))
				
			}
		if(_this.scrollTop>=2583&&_this.scrollTop<2860){
			$('.person').css({transform:'rotate(0deg)',bottom:550+'px'})
		}
		if(_this.scrollTop>=2860&&_this.scrollTop<5000){
				//alert(1)
				var bottom = $('.person').css('bottom');
			var	bot = (_this.scrollTop-2650)/5;
		//console.log(_this.scrollTop,bot)
			
					$('.person').css({transform:'rotate(45deg)',bottom:620-bot+'px'})
				//console.log(bottom,bot)
				
			}
		if(_this.scrollTop>=4400){
				//alert(1)
				$('.skill-main dl').eq(0).animate({left:0},1000);
				$('.skill-main dl').eq(1).animate({left:300+'px'},1000);
				$('.skill-main dl').eq(2).animate({left:600+'px'},1000);
			}
		if(_this.scrollTop>=12100){
				//alert(1)
				if(_this.bool == true){
					_this.bool=false;
				$('.current dl').animate({top:0},5000,'linear');
				$('.wing').animate({top:150+'px'},5000,'linear',function(){
					
					$('.wing').animate({left:-10000+'px',top:-500+'px'},5000)
					//alert(1);
				});
				$('.wing-right').animate({top:150+'px'},5000,'linear',function(){
					$(this).animate({right:-10000+'px',top:-500+'px'},5000)
					
				});
//				$('.current dl').eq(1).animate({left:230+'px'},1000);
//				$('.current dl').eq(2).animate({left:350+'px'},1000);
}
			}
		if(_this.scrollTop>=6300&&_this.scrollTop<=6700){
				$('.person').css({bottom:218+'px'});
				$('.person-foot-left').css({left:'-13px',top:'44px',transform:'rotate(60deg)'});
				$('.person-foot-right').css({left:'42px',top:'42px',transform:'rotate(-64deg)'});
				$('.person-hand-left').css({left:'-27px',top:'-15px',transform:'rotate(70deg)'});
				$('.person-hand-right').css({right:'-29px',top:'-16px',transform:'rotate(108deg)'});
			}
		else{
			$('.person-foot-left').css({left:'-5px',top:'50px',transform:'rotate(30deg)'});
				$('.person-foot-right').css({left:'30px',top:'50px',transform:'rotate(-30deg)'});
				$('.person-hand-left').css({left:'-17px',top:'-2px',transform:'rotate(30deg)'});
				$('.person-hand-right').css({right:'-17px',top:'-2px',left:'auto',transform:'rotate(-30deg)'});
		}
		if(_this.scrollTop>6700||(_this.scrollTop<6300&&_this.scrollTop>5000)){
				$('.person').css({transform:'rotate(0deg)',bottom:158+'px'});
			}
		
	},
	init:function(){
		var _this = this;
		_this.sunTime='';
		var sundeg = 0;
		_this.bool = true;
		_this.scrollTop=0;//之前滚动条滚去的距离
		_this.interVal = null;//滚动的时候interVal为null执行定时器
		_this.createSun(0);
		_this.createCloud(0,80);
		_this.createHill(800);
		_this.createFloor(20000);
		_this.createSkill();
		
		$(window).scroll(function(){
			_this.scrollTop = $('html').scrollTop()+$('body').scrollTop();
		//console.log(_this.scrollTop)
			_this.climbFun();
			if(_this.interVal==null){
				_this.interVal = setTimeout(function(){
					_this.testScrollStop();
				},1000);
				_this.sunRotate(sundeg);
				
			}
			
			$('.floor').css({left:-_this.scrollTop+'px'});
			$('.hill').css({left:-_this.scrollTop/5+'px'});
			$('.cloud').css({left:-_this.scrollTop/10+'px'});
			$('.sun').css({left:-_this.scrollTop/200+'px'});
			$('.skill').css({left:-_this.scrollTop/5+'px'});
			$('.tree').css({left:-_this.scrollTop/3+'px'});
			
				
			
			
		})
		
	}
}

obj.init();

$(window).resize(function(){
	obj.init();
})
	

