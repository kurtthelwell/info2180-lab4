document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('search');
  const resultDiv = document.getElementById('result');
  const searchField = document.getElementById('searchField');

  button.addEventListener('click', () => {
    let query = searchField.value.trim();
    query = encodeURIComponent(query);

    const url = query ? `superheroes.php?query=${query}` : 'superheroes.php';

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = '<p>There was an error fetching data.</p>';
      });
  });
});
