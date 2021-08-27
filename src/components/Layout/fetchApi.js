export function fetchApi(url) {
    fetch(`http://example.com/${url}`)
  .then(response => response.json())
  .then(data => data);
  }