export let map;

window.initAutocomplete = function () {
    map = new google.maps.Map(document.getElementById("map"),{
        center: { lat: 37, lng:126 },
        zoom: 13,
        mapTypeId: "roadmap",
    });
    searchBox();
    searchBtn();
}