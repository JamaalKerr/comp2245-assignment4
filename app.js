document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const resultDiv = document.getElementById("result");

  searchButton.addEventListener("click", function() {
    // Get the value from the input field
    const searchTerm = document.getElementById("searchInput").value;
    // Make an AJAX request using fetch API
    fetch(`http://localhost/comp2245-assignment4/superheroes.php?HeroSearch=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json())
      .then(superheroes => {
        // Convert the data to a string for alert
        const superheroList = superheroes.map(superhero => superhero.alias).join('\n');

        // Display the superhero list in an alert
        alert("List of Superheroes:\n" + superheroList);
        if (superheroes.length > 0) {
          // Display the superhero list in the result div
          displaySuperheroes(superheroes);
        } else {
          // Display a message in the result div if no superheroes are found
          resultDiv.innerHTML = "<p>Superhero not found</p>";
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  });

  // Function to display superheroes in the result div
  function displaySuperheroes(superheroes) {
    resultDiv.innerHTML = ""; // Clear previous content

    if (superheroes.length === 1) {
      const superhero = superheroes[0];
      // Display the superhero information in the result div
      resultDiv.innerHTML = `
        <h3>${superhero.alias}</h3>
        <h4>${superhero.name}</h4>
        <p>${superhero.biography}</p>
      `;
    } else {
      // Convert the data to a string for display in the result div
      const superheroList = superheroes.map(superhero => `<li>${superhero.name}</li>`).join('');
      resultDiv.innerHTML = `<ul>${superheroList}</ul>`;
    }
  }
});

