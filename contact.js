// Function to load team information dynamically from data.json
function loadTeam() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const team = data.find(item => item.id === 'contact');
        if (team && team.team) {
          // Find the container where you want to add the team information
          const container = document.getElementById('team-container');
  
          // Loop through the team members and create elements for each
          team.team.forEach(member => {
            // Create elements
            const div = document.createElement('div');
            const h3 = document.createElement('h3');
            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
  
            // Set text content
            h3.textContent = member.name;
            p1.textContent = `Contact: ${member.contact}`;
            p2.textContent = `Email: ${member.email}`;
            p3.textContent = `Class: ${member.class}`;
  
            // Append elements to container
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            container.appendChild(div);
            container.appendChild(document.createElement('br'));
          });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the function to load the team information when the page loads
  window.onload = loadTeam;
  