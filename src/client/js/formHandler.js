import { checkForUrl } from "./urlChecker";

async function callServer(formText) {
  const res = await fetch(`http://localhost:8081/test?url=${formText}`);
  return await res.json();
}

function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("url").value;

  let urlError = checkForUrl(formText);

  if (urlError) {
    alert(urlError);
    return;
  }
  console.log("::: Form Submitted :::");

  callServer(formText).then(function (data) {
    // console.log("Response data:", data);
    // console.log("Message:", data.message);
    document.getElementById(
      "scoretag"
    ).innerHTML = `The polarity of this website is : ${data.score_tag}`;
    document.getElementById(
      "subjectivity"
    ).innerHTML = `The subjectivity of this website is : ${data.subjectivity}`;
    document.getElementById(
      "text"
    ).innerHTML = `The URL of the article : ${data.sentence_list[0].text}`;
  });
}

export { handleSubmit };
export { callServer };
