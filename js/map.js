document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Fetch the sauna data from the JSON file
    fetch('/data/saunas.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(sauna => {
                var mapUrl = sauna.url;
                var coordinates = [sauna.coordinates.lat, sauna.coordinates.lng];
                var marker = L.marker(coordinates).addTo(map);
                marker.bindPopup(`<b><a href="${sauna.url}" target="_blank">${sauna.name}</a></b><br>${sauna.description}`);            });
        });

    function extractCoordinates(mapUrl) {
        // Extract latitude and longitude from the Google Maps URL
        var regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
        var match = mapUrl.match(regex);
        if (match) {
            var latitude = parseFloat(match[1]);
            var longitude = parseFloat(match[2]);
            return [latitude, longitude];
        }
        return [0, 0];
    }
});