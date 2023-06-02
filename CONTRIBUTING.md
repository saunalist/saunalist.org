# Steps to contribute

1. Fork this repository.
2. Clone the forked repository, e.g. `git clone https://github.com/shortlater/saunalist.org.git`
3. Open the repository in your favorite editor, e.g. `cd saunalist.org && code .`.
4. Copy and paste a previous entry in the sauna list, e.g.:

```
(function() {
                    var pinSymbol = {
                        path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                        fillColor: '#FFFFFF',
                        fillOpacity: 1,
                        strokeColor: '#000000',
                        strokeWeight: 2,
                        scale: 1
                    };

                    var pinMarker = new google.maps.Marker({
                        position: {lat:  35.7034904 , lng:  139.6011096 },
                        map: map,
                        icon: pinSymbol,
                    });


                    var infoWindow = new google.maps.InfoWindow({
                        content: "<div style='font-family: Arial, sans-serif;'><h2>ROOFTOP Sauna</h2><p>Sauna heat: 90 degrees</p><p>Cold plunge: 20 degrees</p><p>Bathtub cold plunges on a roof, of varying temperature. Experience sunset totonou at this one-of-a-kind sauna.</p><p><a href='https:\/\/maps.google.com\/?q=place_id:ChIJlxDznifvGGARKGJPDLXWVT4'>Google Maps Link</a></p></div>"
                    });

                    [pinMarker].forEach(function(marker) {
                        marker.addListener('click', function() {
                            if (currentInfoWindow) {
                                currentInfoWindow.close();
                            }
                            infoWindow.open(map, marker);
                            currentInfoWindow = infoWindow;
                        });
                    });
                })();
  ```

5. Edit the entry to match the sauna you want to add. Make sure to change the name of the sauna, the coordinates, and the description.
6. Find the Google Maps API Place identifier from https://www.google.com/maps/place/Saunita/ and add it as well.
7. Commit your changes and push them to your forked repository.
8. Create a pull request to this repository, and add any comments that are missing to these instructions if you feel like improving the sauna list.