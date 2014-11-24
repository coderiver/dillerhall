head.ready(function() {

	//map
	// ymaps.ready(init);
	// var myMap,
	// 	myPlacemark;

	// function init(){
	// 	myMap = new ymaps.Map ("map", {
	// 		center: [53.899367, 27.5623000],
	// 		zoom: 16,
	// 	});
	// 	myPlacemark = new ymaps.Placemark([53.899367, 27.5623000], {
	// 		hintContent: 'Адрес'
	// 	}, {
	// 		iconLayout: 'default#image',
	// 		iconImageHref: 'img/icons/marker.png',
	// 		iconImageSize: [100, 87],
	// 		iconImageOffset: [-20, -80]
	// 	});
	// 	myMap.controls
	// 		.remove('zoomControl')
	// 		.remove('mapTools')
	// 		.remove('smallMapDefaultSet')
	// 		.remove('trafficControl')
	// 		.remove('largeMapDefaultSet')
	// 		.remove('routeEditor')
	// 		.remove('typeSelector');
	// 	myMap.geoObjects.add(myPlacemark);
	// };

	

});


	function initialize() {
	var stylez = [
		{
			featureType: "all",
			elementType: "all",
			stylers: [
			  { saturation: -100 } // <-- THIS
			]
		}
	];
		var mapOptions = {
		   zoom: 16,
		   center: new google.maps.LatLng(53.899367, 27.5630000),
		   disableDefaultUI: true,
		   scrollwheel: true,
		  zoomControl: true,
		 mapTypeControlOptions: {
		     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
		 }
		}
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
		map.mapTypes.set('tehgrayz', mapType);
		map.setMapTypeId('tehgrayz');
		var image = 'img/icons/marker.png';
		var myLatLng1 = new google.maps.LatLng(53.899367, 27.5630000);
		var marker1 = new google.maps.Marker({
			position: myLatLng1,
			map: map,
			title: 'Uluru (Ayers Rock)', 
			icon: image
	});

	}
	  // Asynchronous Loading
	function loadScript() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
		    'callback=initialize';
		document.body.appendChild(script);
	}
	window.onload = loadScript;