let center;

export function searchBtn() {
    if (searchBar) {
        console.log("searchBar is define");

        center = new google.maps.LatLng(37, 126);
        map.addListener("center_changed", function (){
            center = map.getCenter();
        });
    }
}

function showCafe() {
    let requset = {
        location: center;
        radius: "500",
        type: ["cafe"]
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(requset, callback);
}

function callback(results, status) {
    clearMarker();

    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            makePlaceMarker(results[i]);
        }
    } else {
        alert("no results");
    }
}