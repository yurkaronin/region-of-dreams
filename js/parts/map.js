if (document.querySelector('.js-map')) {
  let center = [45.235888, 39.230156];

  function init() {
    let mapElement = document.querySelector('.js-map');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: 13
    });

    let iconSize = [48, 48];
    let iconOffset = [-24, -24];

    const categories = {
      pharmacy: [],
      hospital: [],
      school: [],
      kindergarten: [],
      park: [],
      bank: [],
      store: [],
      shoppingCenter: []
    };

    function createPlacemark(coords, category, name) {
      let placemark = new ymaps.Placemark(coords, {
        hintContent: name,
        balloonContentHeader: name,
        balloonContentFooter: 'Подробная информация доступна при клике'
      }, {
        iconLayout: 'default#image',
        iconImageHref: `./img/map/${category}.svg`,
        iconImageSize: iconSize,
        iconImageOffset: iconOffset,
        visible: true
      });

      // Обработчики событий для изменения иконки
      placemark.events.add('mouseenter', function (e) {
        e.get('target').options.set('iconImageHref', `./img/map/${category}-hover.svg`);
      });
      placemark.events.add('mouseleave', function (e) {
        e.get('target').options.set('iconImageHref', `./img/map/${category}.svg`);
      });

      map.geoObjects.add(placemark);
      categories[category].push(placemark);
    }

    function getRandomCoords(center, radius = 0.09) {
      let y = center[0] + (Math.random() - 0.5) * radius;
      let x = center[1] + (Math.random() - 0.5) * radius;
      return [y, x];
    }

    Object.keys(categories).forEach(category => {
      for (let i = 0; i < 6; i++) {
        let randomCoords = getRandomCoords(center);
        createPlacemark(randomCoords, category, `${category} ${i + 1}`);
      }
    });

    document.querySelectorAll('.mark-list__button').forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-target');
        const isVisible = categories[category][0].options.get('visible');
        categories[category].forEach(placemark => {
          placemark.options.set('visible', !isVisible);
        });
      });
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);
  }

  ymaps.ready(init);
}





// Для Андрея

// Пример структуры данных:
// const mapData = [
//   { category: 'pharmacy', name: 'Аптека 1', coords: [45.235888, 39.230156] },
//   { category: 'hospital', name: 'Больница 1', coords: [45.236000, 39.231000] },
//   { category: 'school', name: 'Школа 1', coords: [45.237000, 39.232000] },
//   // Добавьте другие объекты
// ];

// Интеграция данных в код:
// Удаление функции генерации случайных координат: Если вы используете реальные данные, функция для генерации случайных координат не потребуется.
// Изменение логики добавления меток: Вместо генерации меток в цикле с использованием случайных координат, вы будете итерировать по массиву mapData и создавать метки для каждого элемента.

// в итоге получится примерно вот так

// if (document.querySelector('.js-map')) {
//   let center = [45.235888, 39.230156];

//   function init() {
//     let mapElement = document.querySelector('.js-map');
//     let map = new ymaps.Map(mapElement, {
//       center: center,
//       zoom: 13
//     });

//     let iconSize = [48, 48];
//     let iconOffset = [-24, -24];

//     const mapData = [
//       { category: 'pharmacy', name: 'Аптека 1', coords: [45.235888, 39.230156] },
//       { category: 'hospital', name: 'Больница 1', coords: [45.236000, 39.231000] },
//       { category: 'school', name: 'Школа 1', coords: [45.237000, 39.232000] },
//       // Добавьте другие объекты
//     ];

//     mapData.forEach(item => {
//       let placemark = new ymaps.Placemark(item.coords, {
//         hintContent: item.name,
//         balloonContentHeader: item.name,
//         balloonContentFooter: 'Подробная информация доступна при клике'
//       }, {
//         iconLayout: 'default#image',
//         iconImageHref: `./img/map/${item.category}.svg`,
//         iconImageSize: iconSize,
//         iconImageOffset: iconOffset,
//         visible: true
//       });

//       placemark.events.add('mouseenter', function (e) {
//         e.get('target').options.set('iconImageHref', `./img/map/${item.category}-hover.svg`);
//       });
//       placemark.events.add('mouseleave', function (e) {
//         e.get('target').options.set('iconImageHref', `./img/map/${item.category}.svg`);
//       });

//       map.geoObjects.add(placemark);
//     });

//     document.querySelectorAll('.mark-list__button').forEach(button => {
//       button.addEventListener('click', () => {
//         const category = button.getAttribute('data-target');
//         const isVisible = map.geoObjects.toArray().some(placemark => placemark.options.get('visible') && placemark.properties.get('category') === category);
//         map.geoObjects.each(placemark => {
//           if (placemark.properties.get('category') === category) {
//             placemark.options.set('visible', !isVisible);
//           }
//         });
//       });
//     });

//     map.controls.remove('geolocationControl');
//     map.controls.remove('searchControl');
//     map.controls.remove('trafficControl');
//     map.controls.remove('typeSelector');
//     map.behaviors.disable(['scrollZoom']);
//   }

//   ymaps.ready(init);
// }


