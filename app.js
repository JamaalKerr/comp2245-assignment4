document.getElementById('search').addEventListener('click', function () {
    fetch('superheroes.php')
        .then(response => response.text())
        .then(data => {
            const superheroes = data.split('\n');
            const ul = document.getElementById('superheroes-list');
            ul.innerHTML = ''; // Clear the list

            superheroes.forEach(hero => {
                const li = document.createElement('li');
                li.textContent = hero;
                ul.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
