const apiKey = 'qw4OGnMnZGpzVTa2N7mHgcSvXLnSZuhKvm5CH7a3';

// APOD (Astronomy Picture of the Day) API
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('apod-img').src = data.url;
        document.getElementById('apod-title').innerText = data.title;
        document.getElementById('apod-desc').innerText = data.explanation;
    })
    .catch(error => console.error('APOD API Error:', error));

// Mars Rover Photos API
fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const photo = data.photos[0];
        document.getElementById('mars-rover-img').src = photo.img_src;
        document.getElementById('mars-rover-date').innerText = `Date Taken: ${photo.earth_date}`;
        document.getElementById('mars-rover-rover').innerText = `Rover: ${photo.rover.name}`;
    })
    .catch(error => console.error('Mars Rover API Error:', error));

    // EPIC API (Get the most recent image metadata)
    fetch(`https://api.nasa.gov/EPIC/api/natural/images?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const latestImage = data[0];
                const date = latestImage.date.split(" ")[0]; // Get the date part only
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date.replace(/-/g, '/')}/png/${latestImage.image}.png`;
    
                document.getElementById('epic-img').src = imageUrl;
                document.getElementById('epic-date').innerText = `Image Date: ${date}`;
                document.getElementById('epic-caption').innerText = latestImage.caption;
            } else {
                document.getElementById('epic-caption').innerText = 'No images available.';
            }
        })
        .catch(error => console.error('EPIC API Error:', error));

// InSight API (Get the latest weather data)
fetch(`https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`)
    .then(response => response.json())
    .then(data => {
        const solKeys = data.sol_keys;
        const latestSol = solKeys[solKeys.length - 1];
        const latestData = data[latestSol];

        document.getElementById('sol').innerText = `Sol: ${latestSol} (Martian day)`;
        document.getElementById('temperature').innerText = `Temperature: High - ${latestData.AT.mx}°C, Low - ${latestData.AT.mn}°C`;
        document.getElementById('wind').innerText = `Wind Speed: ${latestData.HWS.av} m/s`;
        document.getElementById('pressure').innerText = `Pressure: ${latestData.PRE.av} Pa`;
    })
    .catch(error => console.error('InSight API Error:', error));