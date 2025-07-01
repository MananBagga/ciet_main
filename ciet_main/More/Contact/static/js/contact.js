   
        // Placeholder for Google Maps initialization
        function initMap() {
    try {
        const location = { lat: 28.5429, lng: 77.1855 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: location,
        });
        new google.maps.Marker({
            position: location,
            map: map,
            title: "Central Institute of Educational Technology (NCERT)",
        });
    } catch (error) {
        console.error("Error loading Google Maps:", error);
        document.getElementById("map").innerHTML = "<p>Unable to load map. Please try again later.</p>";
    }
}
    