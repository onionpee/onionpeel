import { map } from "./initMap";

export function makePlaceMarker(place) {
    console.log(place);
    if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
    }
    let bounds = new google.maps.LatLngBounds();

    const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
    };

    markers.push(
        new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
        })
    );

    if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
    } else {
        bounds.extend(place.geometry.location);
    }
    map.fitBounds(bounds);
}