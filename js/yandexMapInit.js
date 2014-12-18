ymaps.ready(init);
	var myMap;
	function init(){     
		myMap = new ymaps.Map ("map", {
			center: [53.90614, 27.54849],
			zoom: 12
		});
		myMap.controls
            // Adds the zoom control button. The position of the control on the map is passed as a parameter.
            .add('zoomControl', {
                right: '35',
                top: '350'
            })
            // You cannot add two elements of the same type using a key:
            // .add('zoomControl', { // it won't be added to the map
            //     right : '60px',
            //     top : '100px'
            // })

            // Adds the list of map types
            //.add('typeSelector')
            // Adds the scale line
            // .add('scaleLine', {
            //     left: '80',
            //     bottom: '10'
            // });

        // Defines a custom set of buttons
        // var myToolbar = new ymaps.control.MapTools({
        //     items: ['drag', 'ruler']
        // });

        // Add the custom toolbar to the map at the specified position
        // myMap.controls.add(myToolbar, {
        //     top: '100',
        //     right: '100'
        // });
		//first mark
		myPlacemark = new ymaps.Placemark([53.90614, 27.54849], { 
			balloonContent: '<span class="ymap__title">Автосалон AV</span><span class="ymap__gray">официальный дилер Audi</span><p>г. Минск, ул. Серова, 1</p><p>+375 29 191-88-88</p><p><a href="#">www.audi.by</a></p>'
		}, {
			balloonShadow: false
		});
		//second mark
		myPlacemark2 = new ymaps.Placemark([53.93099, 27.54069], { 
			balloonContent: '<span class="ymap__title">Автосалон AV-2</span><span class="ymap__gray">официальный дилер Audi</span><p>г. Минск, ул. Серова, 1</p><p>+375 29 191-88-88</p><p><a href="#">www.audi.by</a></p>'
		}, {
			balloonShadow: false
		});
		//third mark
		myPlacemark3 = new ymaps.Placemark([53.90672, 27.52199], { 
			balloonContent: '<span class="ymap__title">Автосалон AV-3</span><span class="ymap__gray">официальный дилер Audi</span><p>г. Минск, ул. Серова, 1</p><p>+375 29 191-88-88</p><p><a href="#">www.audi.by</a></p>'
		}, {
			balloonShadow: false
		});

		myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemark2)
			.add(myPlacemark3);
	}