document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([0, 0], 1);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    // Fetch the sauna data from the JSON file
    fetch('/saunas.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(sauna => {
                var mapUrl = sauna.url;
                var coordinates = [sauna.lat, sauna.lng];
                var marker = L.marker(coordinates).addTo(map);
                marker.bindPopup(`<b><a href="${sauna.url}" target="_blank">${sauna.name}</a></b><br>${sauna.description}`);});
        });
});