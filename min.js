document.addEventListener('DOMContentLoaded', function () {
    // Sample telecom services data
    const telecomServices = [
        'High-speed Internet',
        'Voice over IP (VoIP) Solutions',
        'Data Storage and Backup',
        'Cloud Computing',
        'Network Security Services'
        // Add more services as needed
    ];

    // Get the services list element
    const servicesList = document.getElementById('servicesList');

    // Populate the services list dynamically
    telecomServices.forEach(service => {
        const listItem = document.createElement('li');
        listItem.textContent = service;
        servicesList.appendChild(listItem);
    });
});
