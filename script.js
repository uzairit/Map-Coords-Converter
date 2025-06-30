const lat = document.getElementById('lat')
const lon = document.getElementById('lon')
const convertBtn = document.getElementById('convertBtn')
const map = document.getElementById('map')
const MyLocationBtn = document.getElementById('MyLocationBtn')

convertBtn.addEventListener('click', () => {
    if (lat.value && lon.value) {
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
    else {
        alert('Please fill Both Section')
    }

})
MyLocationBtn.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        lat.value = latitude;
        lon.value = longitude;
        const iframe = document.createElement('iframe')
        iframe.src = `https://www.google.com/maps/?q=${latitude},${longitude}&output=embed`;
        iframe.allowFullscreen = true;
        iframe.loading = "lazy";
        iframe.referrerPolicy = "no-referrer-when-downgrade";
        iframe.sandbox = "allow-scripts allow-same-origin allow-popups";
        map.innerHTML = "";
        map.appendChild(iframe);
        map.style.display = 'block';
    }, () => {
        alert("Location access denied or unavailable.");
    });
})
