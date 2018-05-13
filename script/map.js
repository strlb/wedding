ymaps.ready(function(){
    var myMap = new ymaps.Map("map", {
      center: [56.927320, 43.365056],
      zoom: 8
    }),
    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [56.927320, 43.365056]// координаты точки
      }
    });
myMap.geoObjects.add(myGeoObject); // Размещение геообъекта на карте.        
    });