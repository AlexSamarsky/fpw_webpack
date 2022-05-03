console.log('test webpack')


fetch("http://localhost:3000/sports")
    .then(response => { return response.json() })
    .then(data => { document.write(JSON.stringify(data)) })