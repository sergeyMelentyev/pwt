 "use strict";
									/* VARIABLES */
var bearVivus,
	rabbitVivus,
	
	bearStroke = $('.bearStroke'),
	bearColor = $('.bearColor'),
	developer = $('#developer'),
	leftBearWrapper = $('.leftBearWrapper'),
	htmlTag = $('.htmlTag'),
	bootStrap = $('.bootStrap'),
	javaScript = $('.javaScript'),
	angularJ = $('.angularJ'),
	rubyLang = $('.rubyLang'),
	rubyFrame = $('.rubyFrame'),

	rabbitColor = $('.rabbitColor'),
	rabbitStroke = $('.rabbitStroke'),
	rightRabbitWrapper = $('.rightRabbitWrapper'),
	photoshop = $('.photoshop'),
	illustrator = $('.illustrator'),
	afterEffects = $('.afterEffects'),
	cinema = $('.cinema'),
	seo = $('.seo'),
	content = $('.content');


var drawBear = function(){
	bearVivus = new Vivus('bearStrokeVivus', {
	    type: 'async',
	    duration: 300
		},
	    function(){
	    	console.log('BEAR SVG DONE');
    	});
	rabbitVivus = new Vivus('rabbitStrokeVivus', {
	    type: 'async',
	    duration: 300
		},
	    function(){
	    	console.log('RABBIT SVG DONE');
    	});
};
drawBear();


									/* START BEAR ANIMATION POSITION */
htmlTag.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
bootStrap.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
javaScript.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
angularJ.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
rubyLang.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
rubyFrame.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');

									/* BEAR ANIMATION */
leftBearWrapper.hover(
	function() {
		bearColor.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		bearStroke.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		developer.transition({ opacity: 1 }, 1500, 'easeOutQuad');
		
		htmlTag.transition({ opacity: 1, x: 0, delay: 100 }, 2000, 'easeOutQuad');
		bootStrap.transition({ opacity: 1, x: 0, delay: 200 }, 2050, 'easeOutQuad');
		javaScript.transition({ opacity: 1, x: 0, delay: 300 }, 2100, 'easeOutQuad');
		angularJ.transition({ opacity: 1, x: 0, delay: 400 }, 2150, 'easeOutQuad');
		rubyLang.transition({ opacity: 1, x: 0, delay: 500 }, 2200, 'easeOutQuad');
		rubyFrame.transition({ opacity: 1, x: 0, delay: 600 }, 2250, 'easeOutQuad');
  	}, function() {
		bearColor.transition({ opacity: 0, scale: 1 }, 1000, 'easeOutQuad');
		bearStroke.transition({ opacity: 1, scale: 1 }, 1000, 'easeOutQuad');
		developer.transition({ opacity: 0 }, 1000, 'easeOutQuad');

		htmlTag.transition({ opacity: 0, x: -25, delay: 600 }, 2000, 'easeOutQuad');
		bootStrap.transition({ opacity: 0, x: 25, delay: 500 }, 2050, 'easeOutQuad');
		javaScript.transition({ opacity: 0, x: -25, delay: 400 }, 2100, 'easeOutQuad');
		angularJ.transition({ opacity: 0, x: 25, delay: 300 }, 2150, 'easeOutQuad');
		rubyLang.transition({ opacity: 0, x: -25, delay: 200 }, 2200, 'easeOutQuad');
		rubyFrame.transition({ opacity: 0, x: 25, delay: 100 }, 2250, 'easeOutQuad');
  	}
);

									/* START RABBIT ANIMATION POSITION */
	photoshop.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	illustrator.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
	afterEffects.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	cinema.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
	seo.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	content.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');

									/* RABBIT ANIMATION */
rightRabbitWrapper.hover(
	function() {
		rabbitColor.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		rabbitStroke.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		
		photoshop.transition({ opacity: 1, x: 0, delay: 100 }, 2000, 'easeOutQuad');
		illustrator.transition({ opacity: 1, x: 0, delay: 200 }, 2050, 'easeOutQuad');
		afterEffects.transition({ opacity: 1, x: 0, delay: 300 }, 2100, 'easeOutQuad');
		cinema.transition({ opacity: 1, x: 0, delay: 400 }, 2150, 'easeOutQuad');
		seo.transition({ opacity: 1, x: 0, delay: 500 }, 2200, 'easeOutQuad');
		content.transition({ opacity: 1, x: 0, delay: 600 }, 2250, 'easeOutQuad');
  	}, function() {
		rabbitColor.transition({ opacity: 0, scale: 1 }, 1000, 'easeOutQuad');
		rabbitStroke.transition({ opacity: 1, scale: 1 }, 1000, 'easeOutQuad');

		photoshop.transition({ opacity: 0, x: -25, delay: 600 }, 2000, 'easeOutQuad');
		illustrator.transition({ opacity: 0, x: 25, delay: 500 }, 2050, 'easeOutQuad');
		afterEffects.transition({ opacity: 0, x: -25, delay: 400 }, 2100, 'easeOutQuad');
		cinema.transition({ opacity: 0, x: 25, delay: 300 }, 2150, 'easeOutQuad');
		seo.transition({ opacity: 0, x: -25, delay: 200 }, 2200, 'easeOutQuad');
		content.transition({ opacity: 0, x: 25, delay: 100 }, 2250, 'easeOutQuad');
  	}
);








var c = document.getElementById("developer");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
chinese = chinese.split("");
var font_size = 20;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1; 
	function draw(){
		ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
		ctx.fillRect(0, 0, c.width, c.height);
		ctx.fillStyle = "#E4E4E4"; //0F0
		ctx.font = font_size + "px arial";
		for(var i = 0; i < drops.length; i++){
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++;
		};
	};
setInterval(draw, 160);














