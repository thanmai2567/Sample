function fetchData(url) {
    return new Promise((resolve, reject) => {
      if (url.includes("error")) {
        reject("Failed to fetch data. URL contains 'error'.");
      } else {
        resolve("Data fetched successfully.");
      }
    });
  }
  
  fetchData("https://example.com/data")
    .then(response => {
      console.log(response); 
    })
    .catch(error => {
      console.log(error);  
    });
 
  
    fetchData("https://example.com/error")
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);  
    });
  

    