if (document.querySelector('.js-map-2')) {
  let center = [45.219504, 39.222179];

  function init() {
    let mapElement = document.querySelector('.js-map-2');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: 15
    });

    // Определяем размер и смещение иконки по умолчанию
    let iconSize = [48, 56];
    let iconOffset = [-24, -56];

    let placeMark = new ymaps.Placemark([45.219504, 39.222179], {
      hintContent: 'Регион мечты',
      balloonContentHeader: 'Регион мечты',
      balloonContentFooter: 'Краснодарский край, ст. Динская, ул. Красная, 71, оф.2'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map/balun.svg',
      iconImageSize: iconSize,
      iconImageOffset: iconOffset
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placeMark);

    placeMark.events.add('mouseenter', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun-hover.svg');
    });

    placeMark.events.add('mouseleave', function (e) {
      e.get('target').options.set('iconImageHref', './img/map/balun.svg');
    });
  }

  ymaps.ready(init);
};
