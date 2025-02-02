document.getElementById('donateForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const donorData = {
        name: document.getElementById('name').value,
        blood_type: document.getElementById('blood_type').value,
        location: document.getElementById('location').value
    };

    fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(donorData)
    })
    .then(response => response.json())
    .then(data => alert(data.status))
    .catch(error => console.error('Error:', error));
});

document.getElementById('findForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const bloodType = document.getElementById('search_blood_type').value;

    fetch(`/find/${bloodType}`, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        data.forEach(donor => {
            const donorInfo = document.createElement('p');
            donorInfo.textContent = `Name: ${donor.name}, Location: ${donor.location}`;
            resultsDiv.appendChild(donorInfo);
        });
    })
    .catch(error => console.error('Error:', error));
});
