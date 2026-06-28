//======================================//
//              SAGAR
//======================================//

const API_KEY = "81473d4304fc42e49d4826a4b6e4663a";

async function fetchNews(category = "general") {

    // ❌ ERROR 1:
    // Used smart quotes (‘ ’) instead of backticks (` `).
    // ❌ ERROR 2:
    // URL is broken into multiple lines.
    // ❌ ERROR 3:
    // Extra spaces in query parameters (country = us, apiKey=${ API_KEY }).

    const url = category === "world"
        ? `https://newsapi.org/v2/everything?q=world%20news&apiKey=${API_KEY}`
        : `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.status !== "ok") {
        throw new Error(data.message || "News request failed");
    }

    return data.articles;
}

async function fetchSearchResults(query) {

    // ❌ ERROR:
    // Used smart quotes instead of backticks.
    // Use template literal because ${} is used.

    const url =
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;

    const response = await fetch(url);

    const data = await response.json();

    if (data.status !== "ok") {
        throw new Error(data.message || "Search request failed");
    }

    return data.articles;
}