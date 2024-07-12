
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,
    zoom: 13,
});

const marker = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 35 })
            .setHTML(
                `<h5>${restaurantName}</h5>`
            )
    )
    .addTo(map);

map.addControl(new mapboxgl.NavigationControl())