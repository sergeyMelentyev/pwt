 "use strict";
									/* VARIABLES */
var bearVivus,
	rabbitVivus,
	customWebVivus,
	leftArrowVivus,
	rightArrowVivus,
	timeoutID,
	preloaderHider = $('.preloaderHider'),
	preloaderWrapper = $('.preloaderWrapper'),

	thoughtsBearWrapper = $('.thoughtsBearWrapper'),
	thoughtsRabbitWrapper = $('.thoughtsRabbitWrapper'),
	firstThoughtBearMover = $('.firstThoughtBearMover'),
	secondThoughtBearMover = $('.secondThoughtBearMover'),
	thirdThoughtBearMover = $('.thirdThoughtBearMover'),
	firstThoughtBear = $('.firstThoughtBear'),
	secondThoughtBear = $('.secondThoughtBear'),
	thirdThoughtBear = $('.thirdThoughtBear'),
	fourthThoughtBear = $('.fourthThoughtBear'),
	thoughtsBearSvgLeft = $('#thoughtsBearSvgLeft'),
	thoughtsBearImageWrapper = $('.thoughtsBearImageWrapper'),
	thoughtsBearImageLeft = $('.thoughtsBearImageLeft'),
	thoughtsBearPngLeft = $('.thoughtsBearPngLeft'),
	thoughtsBearImageLeftWrapper = $('.thoughtsBearImageLeftWrapper'),
	thoughtsBearTextLeftWrapper = $('.thoughtsBearTextLeftWrapper'),
	customWebWrapper = $('.customWebWrapper'),

	bearLeftArrow = $('#bearLeftArrow'),
	rabbitRightArrow = $('#rabbitRightArrow'),
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


											/* PRELOADER WRAPPER */

window.addEventListener("load", function load(event){
	window.removeEventListener("load", load, false); 
	preloaderHider.transition({ x: 500 }, 10, 'easeOutQuad');
	delayedStart();
	console.log('ONLOAD EVENT FIRES'); 
},false);
function delayedStart() {
	// some function here
	timeoutID = window.setTimeout(startApplication, 1000);
	console.log('DELAYED START 3000MS DONE');
}
function startApplication () {
	preloaderHider.transition({ x: 0 }, 1000, 'easeOutQuad');
	setTimeout(function() {
		drawBear();
	}, 1000);
	console.log('APP FIRES');
};


var drawBear = function(){
	bearStroke.transition({ opacity: 1 }, 200, 'easeOutQuad');
	rabbitStroke.transition({ opacity: 1 }, 200, 'easeOutQuad');
	bearVivus = new Vivus('bearStrokeVivus', {
	    type: 'async',
	    duration: 100
		},
	    function(){
	    	console.log('BEAR SVG DONE');
    	});
	rabbitVivus = new Vivus('rabbitStrokeVivus', {
	    type: 'async',
	    duration: 100
		},
	    function(){
	    	preloaderKill();
	    	console.log('RABBIT SVG DONE');
    	});
};

var preloaderKill = function(){
	preloaderWrapper.transition({ opacity: 1 }, 200, 'easeOutQuad');
	setTimeout(function() {
		preloaderWrapper.css({'display': 'none'});
	}, 300);
};
var drawLeftArrow = function(){
	leftArrowVivus = new Vivus('bearLeftArrow', {
    type: 'oneByOne',
    duration: 5000
	},
    function(){
    	console.log('LEFT ARROW SVG DONE');
	});
};
var drawRightArrow = function(){
	rightArrowVivus = new Vivus('rabbitRightArrow', {
    type: 'oneByOne',
    duration: 5000
	},
    function(){
    	console.log('LEFT ARROW SVG DONE');
	});
};

									/* START BEAR ANIMATION POSITION */
htmlTag.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
bootStrap.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
javaScript.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
angularJ.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
rubyLang.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
rubyFrame.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
bearLeftArrow.transition({ opacity: 0 }, 10, 'easeOutQuad');

									/* BEAR ANIMATION */
leftBearWrapper.hover(
	function() {
		bearColor.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		bearStroke.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		developer.transition({ opacity: 1 }, 1500, 'easeOutQuad');
		
		htmlTag.transition({ opacity: 1, x: 0, delay: 50 }, 500, 'easeOutQuad');
		bootStrap.transition({ opacity: 1, x: 0, delay: 100 }, 550, 'easeOutQuad');
		javaScript.transition({ opacity: 1, x: 0, delay: 150 }, 600, 'easeOutQuad');
		angularJ.transition({ opacity: 1, x: 0, delay: 200 }, 650, 'easeOutQuad');
		rubyLang.transition({ opacity: 1, x: 0, delay: 250 }, 700, 'easeOutQuad');
		rubyFrame.transition({ opacity: 1, x: 0, delay: 300 }, 750, 'easeOutQuad');
		
		drawLeftArrow();
		bearLeftArrow.transition({ opacity: 0.4 }, 1000, 'easeOutQuad');
  	}, function() {
		bearColor.transition({ opacity: 0, scale: 1 }, 1000, 'easeOutQuad');
		bearStroke.transition({ opacity: 1, scale: 1 }, 1000, 'easeOutQuad');
		developer.transition({ opacity: 0 }, 1000, 'easeOutQuad');

		htmlTag.transition({ opacity: 0, x: -25, delay: 50 }, 500, 'easeOutQuad');
		bootStrap.transition({ opacity: 0, x: 25, delay: 100 }, 550, 'easeOutQuad');
		javaScript.transition({ opacity: 0, x: -25, delay: 150 }, 600, 'easeOutQuad');
		angularJ.transition({ opacity: 0, x: 25, delay: 200 }, 650, 'easeOutQuad');
		rubyLang.transition({ opacity: 0, x: -25, delay: 250 }, 700, 'easeOutQuad');
		rubyFrame.transition({ opacity: 0, x: 25, delay: 300 }, 750, 'easeOutQuad');

		bearLeftArrow.transition({ opacity: 0 }, 1000, 'easeOutQuad');
  	}
);	
bearLeftArrow.hover(
	function() {
		bearLeftArrow.transition({ opacity: 1, scale: 1.02 }, 500, 'easeOutQuad');

		htmlTag.transition({ opacity: 0.4, x: 10, delay: 50 }, 350, 'easeOutQuad');
		bootStrap.transition({ opacity: 0.4, x: 10, delay: 100 }, 350, 'easeOutQuad');
		javaScript.transition({ opacity: 0.4, x: 10, delay: 150 }, 350, 'easeOutQuad');
		angularJ.transition({ opacity: 0.4, x: 10, delay: 200 }, 350, 'easeOutQuad');
		rubyLang.transition({ opacity: 0.4, x: 10, delay: 250 }, 350, 'easeOutQuad');
		rubyFrame.transition({ opacity: 0.4, x: 10, delay: 300 }, 350, 'easeOutQuad');
	}, function(){
		bearLeftArrow.transition({ opacity: 0.4, scale: 1 }, 500, 'easeOutQuad');

		htmlTag.transition({ opacity: 1, x: 0, delay: 50 }, 350, 'easeOutQuad');
		bootStrap.transition({ opacity: 1, x: 0, delay: 100 }, 350, 'easeOutQuad');
		javaScript.transition({ opacity: 1, x: 0, delay: 150 }, 350, 'easeOutQuad');
		angularJ.transition({ opacity: 1, x: 0, delay: 200 }, 350, 'easeOutQuad');
		rubyLang.transition({ opacity: 1, x: 0, delay: 250 }, 350, 'easeOutQuad');
		rubyFrame.transition({ opacity: 1, x: 0, delay: 300 }, 350, 'easeOutQuad');
	}
);


									/* BEAR THOUGHTS START ANIMATION */
var bearPosition = $('.leftBearWrapper');
bearPosition.height = window.innerHeight;
bearPosition.width = window.innerWidth;
bearLeftArrow.click(function(){
	leftBearWrapper.transition({ x: bearPosition.width }, 1000, 'easeOutQuad');
	rightRabbitWrapper.transition({ x: bearPosition.width }, 1000, 'easeOutQuad');
	firstThoughtBearFunc();
});

									/* BEAR THOUGHTS FINAL ANIMATION */
var firstThoughtBearFunc = function(){
	thoughtsBearWrapper.css({'visibility': 'initial'});
	firstThoughtBearMover.transition({ y: -75 }, 10000, 'easeOutQuad');
	firstThoughtBear.cooltext({
		sequence:[
			{
				action: "animation",
				animation: "cool16",
				order: "random",
				speed: 50,
				stagger: 150
			}
		],
		onComplete: function(){
			setTimeout(function() {
				firstThoughtBear.transition({ y: -50, opacity: 0 }, 1000, 'easeOutQuad');
				secondThoughtBearFunc();
			}, 1000);
		}
	});
};

var secondThoughtBearFunc = function(){
	firstThoughtBearMover.css({'visibility': 'hidden'});
	secondThoughtBearMover.transition({ y: -75 }, 10000, 'easeOutQuad');
	secondThoughtBear.cooltext({
		sequence:[
			{
				action: "animation",
				animation: "cool16",
				order: "random",
				speed: 50,
				stagger: 150,
				delay: 1
			}
		],
		onComplete: function(){
			setTimeout(function() {
				secondThoughtBear.transition({ y: -30, opacity: 0 }, 1500, 'easeOutQuad');
				thirdThoughtBearFunc();
			}, 1500);
		}
	});
};

var thirdThoughtBearFunc = function(){
	secondThoughtBearMover.css({'visibility': 'hidden'});
	thirdThoughtBearMover.transition({ y: -100 }, 15000, 'easeOutQuad');
	thirdThoughtBear.cooltext({
		sequence:[
			{
				action: "animation",
				animation: "cool16",
				order: "random",
				speed: 75,
				stagger: 500,
				delay: 1
			}
		],
		onComplete: function(){
			setTimeout(function() {
				thirdThoughtBear.transition({ y: -30, opacity: 0 }, 1500, 'easeOutQuad');
				fourthThoughtBearFunc();
			}, 4000);
		}
	});
};


									/* CODE GALLARY START ANIMATION POSITION */
thoughtsBearSvgLeft.transition({ scale: 0.95, opacity: 0 }, 10, 'easeOutQuad');
thoughtsBearPngLeft.transition({ scale: 0.95, opacity: 0 }, 10, 'easeOutQuad');
customWebWrapper.transition({ x: -15, opacity: 0 }, 10, 'easeOutQuad');

var fourthThoughtBearFunc = function(){
	fourthThoughtBear.transition({ y: 20, opacity: 1 }, 1500, 'easeOutQuad');
	thoughtsBearPngLeft.transition({ scale: 0.95, opacity: 0.2 }, 750, 'easeOutQuad');
	thoughtsBearTextLeftWrapper.transition({ opacity: 0.2 }, 750, 'easeOutQuad');
	thoughtsBearWrapper.css({'z-index': '9'});
	thoughtsBearImageWrapper.css({'visibility': 'initial'});
	thoughtsBearImageLeftWrapper.hover(
		function() {
			thoughtsBearTextLeftWrapper.transition({ opacity: 1 }, 750, 'easeOutQuad');
			thoughtsBearSvgLeft.transition({ scale: 1, opacity: 1 }, 750, 'easeOutQuad');
			thoughtsBearPngLeft.transition({ scale: 1, opacity: 1 }, 750, 'easeOutQuad');
			customWebVivus = new Vivus('thoughtsBearSvgLeft', {
			    type: 'async',
			    duration: 50
			},
		    function(){
		    	console.log('CUSTOM WEB');
	    	});
	    	customWebWrapper.transition({ x: 0, opacity: 1 }, 750, 'easeOutQuad');
		}, function(){
			thoughtsBearTextLeftWrapper.transition({ opacity: 0.2 }, 750, 'easeOutQuad');
			thoughtsBearSvgLeft.transition({ scale: 0.95, opacity: 0 }, 750, 'easeOutQuad');
			thoughtsBearPngLeft.transition({ scale: 0.95, opacity: 0.2 }, 750, 'easeOutQuad');
			customWebWrapper.transition({ x: -15, opacity: 0 }, 750, 'easeOutQuad');
		}
	);
};


var rabbitPosition = $('.rightRabbitWrapper');
rabbitPosition.height = window.innerHeight;
rabbitPosition.width = window.innerWidth;
rabbitRightArrow.click(function(){
	if (rabbitCounter === 0) {
		leftBearWrapper.transition({ x: - rabbitPosition.width / 2 }, 1000, 'easeOutQuad');
		rightRabbitWrapper.transition({ x: - rabbitPosition.width / 2 }, 1000, 'easeOutQuad');
		rabbitRightArrow.transition({ rotate: '0deg' }, 500, 'easeOutQuad');
		rabbitCounter++;	
	} else if (rabbitCounter > 0){
		leftBearWrapper.transition({ x: 0 }, 1000, 'easeOutQuad');
		rightRabbitWrapper.transition({ x: 0 }, 1000, 'easeOutQuad');
		rabbitRightArrow.transition({ rotate: '180deg' }, 500, 'easeOutQuad');
		rabbitCounter = 0;
	};
});





									/* START RABBIT ANIMATION POSITION */
	photoshop.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	illustrator.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
	afterEffects.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	cinema.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
	seo.transition({ opacity: 0, x: -25 }, 10, 'easeOutQuad');
	content.transition({ opacity: 0, x: 25 }, 10, 'easeOutQuad');
	rabbitRightArrow.transition({ opacity: 0, x: -25,  rotate: '180deg' }, 10, 'easeOutQuad');

									/* RABBIT ANIMATION */
rightRabbitWrapper.hover(
	function() {
		rabbitColor.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		rabbitStroke.transition({ opacity: 0.6, scale: 1.05 }, 1500, 'easeOutQuad');
		
		photoshop.transition({ opacity: 1, x: 0, delay: 50 }, 500, 'easeOutQuad');
		illustrator.transition({ opacity: 1, x: 0, delay: 100 }, 550, 'easeOutQuad');
		afterEffects.transition({ opacity: 1, x: 0, delay: 150 }, 600, 'easeOutQuad');
		cinema.transition({ opacity: 1, x: 0, delay: 200 }, 650, 'easeOutQuad');
		seo.transition({ opacity: 1, x: 0, delay: 250 }, 700, 'easeOutQuad');
		content.transition({ opacity: 1, x: 0, delay: 300 }, 750, 'easeOutQuad');

		drawRightArrow();
		rabbitRightArrow.transition({ opacity: 0.4, x: 0 }, 1000, 'easeOutQuad');
  	}, function() {
		rabbitColor.transition({ opacity: 0, scale: 1 }, 1000, 'easeOutQuad');
		rabbitStroke.transition({ opacity: 1, scale: 1 }, 1000, 'easeOutQuad');

		photoshop.transition({ opacity: 0, x: -25, delay: 50 }, 500, 'easeOutQuad');
		illustrator.transition({ opacity: 0, x: 25, delay: 100 }, 550, 'easeOutQuad');
		afterEffects.transition({ opacity: 0, x: -25, delay: 150 }, 600, 'easeOutQuad');
		cinema.transition({ opacity: 0, x: 25, delay: 200 }, 650, 'easeOutQuad');
		seo.transition({ opacity: 0, x: -25, delay: 250 }, 700, 'easeOutQuad');
		content.transition({ opacity: 0, x: 25, delay: 300 }, 750, 'easeOutQuad');

		rabbitRightArrow.transition({ opacity: 0, x: -25 }, 1000, 'easeOutQuad');
  	}
);
rabbitRightArrow.hover(
	function() {
		rabbitRightArrow.transition({ opacity: 1, scale: 1.02 }, 500, 'easeOutQuad');

		photoshop.transition({ opacity: 0.4, x: -10, delay: 50 }, 350, 'easeOutQuad');
		illustrator.transition({ opacity: 0.4, x: -10, delay: 100 }, 350, 'easeOutQuad');
		afterEffects.transition({ opacity: 0.4, x: -10, delay: 150 }, 350, 'easeOutQuad');
		cinema.transition({ opacity: 0.4, x: -10, delay: 200 }, 350, 'easeOutQuad');
		seo.transition({ opacity: 0.4, x: -10, delay: 250 }, 350, 'easeOutQuad');
		content.transition({ opacity: 0.4, x: -10, delay: 300 }, 350, 'easeOutQuad');
	}, function(){
		rabbitRightArrow.transition({ opacity: 0.4, scale: 1 }, 500, 'easeOutQuad');

		photoshop.transition({ opacity: 1, x: 0, delay: 50 }, 350, 'easeOutQuad');
		illustrator.transition({ opacity: 1, x: 0, delay: 150 }, 350, 'easeOutQuad');
		afterEffects.transition({ opacity: 1, x: 0, delay: 200 }, 350, 'easeOutQuad');
		cinema.transition({ opacity: 1, x: 0, delay: 250 }, 350, 'easeOutQuad');
		seo.transition({ opacity: 1, x: 0, delay: 300 }, 350, 'easeOutQuad');
		content.transition({ opacity: 1, x: 0, delay: 350 }, 350, 'easeOutQuad');
	}
);


									/* CODE INFORMATION SIDE */



















var c = document.getElementById("developer");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var chinese = "01";
chinese = chinese.split("");
var font_size = 20;
var columns = c.width/font_size;
var drops = [];
for(var x = 0; x < columns; x++)
	drops[x] = 1; 
	function draw(){
		ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
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

		//Hide arrows while scrolling
/*
    $(window).on('scroll', function(){
    $('.scroll-to').hide();

    clearTimeout($(this).data('timer'));

    $(this).data('timer', setTimeout(function() {
        $('.scroll-to').show();
    }, 300));
});
*/
