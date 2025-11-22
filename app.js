document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnSearch");
    const resultDiv = document.getElementById("result");

    btn.addEventListener("click", () => {
        let query = document.getElementById("search").value.trim();

        // Sanitize input
        query = query.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Build URL with query param
        let url = "superheroes.php";
        if (query.length > 0) {
            url += "?query=" + encodeURIComponent(query);
        }

        // Fetch data from PHP
        fetch(url)
        .then(response => response.text())
        .then(data => {

            // Exercise 2: If no search, show an alert with list
            if (query.length === 0) {
                alert(data);
            }

            // Exercise 3: Put results in the result div
            resultDiv.innerHTML = data;
        })
        .catch(error => {
            resultDiv.innerHTML = "Error fetching superheroes.";
        });
    });
});
