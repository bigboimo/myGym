// Function to load client testimonials dynamically from data.json
function loadClientTestimonials() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const clients = data.find(item => item.id === 'clients');
        if (clients && clients.testimonials) {
          const container = document.getElementById('client-testimonials');
  
          clients.testimonials.forEach(client => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const p = document.createElement('p');
            const h4 = document.createElement('h4');
  
            img.src = client.image;
            img.alt = 'client testimonial';
  
            p.textContent = client.description;
            h4.textContent = client.header;
  
            div.classList.add('client-testimonial'); // Add the class for styling
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(h4);
            container.appendChild(div);
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
}

// Call the function to load the client testimonials when the page loads
window.onload = loadClientTestimonials;

