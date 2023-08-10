function checkForUrl(url) {
  console.log("::: Running checkForUrl :::", url);
  let pattern =
    /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})?$/;

  if (pattern.test(url)) {
    alert("Correct URL!");
  } else {
    alert("Incorrect URL. Please enter correct URL");
  }
}

export { checkForUrl };
