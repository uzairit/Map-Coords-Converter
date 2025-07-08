const lat = document.getElementById('lat')
const lon = document.getElementById('lon')
const convertBtn = document.getElementById('convertBtn')
const map = document.getElementById('map')
const MyLocationBtn = document.getElementById('MyLocationBtn')

function showMap(latitude, longitude) {
    const iframe = document.createElement('iframe')
    iframe.src = `https://www.google.com/maps/?q=${latitude},${longitude}&output=embed`;
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.sandbox = "allow-scripts allow-same-origin allow-popups";
    map.innerHTML = "";
    map.appendChild(iframe);
    map.style.display = 'block';
}

convertBtn.addEventListener('click', () => {
    if (lat.value && lon.value) {
        showMap(lat.value, lon.value)
    }
    else {
        alert('Please fill Both Section')
    }

})
MyLocationBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        lat.value = position.coords.latitude;
        lon.value = position.coords.longitude;
        showMap(lat.value, lon.value)
    }, () => {
        alert("Location access denied or unavailable.");
    });
})