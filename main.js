let header = document.querySelector("#header");
let ul = document.querySelector("ul");
let story = document.querySelector('#story');
let avatar = document.querySelector("#avatar");

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/geenious");
req.addEventListener("load", function() {
  let obj = JSON.parse(this.responseText);
  console.log(obj);
  let h1 = document.createElement("h1");
  h1.textContent = obj.name;
  header.appendChild(h1);

  let basicKeys = ['Name:', 'GitHub URL:', 'Email:', 'School:', 'Website:'];
  let basicsArr = [` ${obj.name}`, ` ${obj.login}`, " jeff.irwin@live.com", ' The Iron Yard', ` ${obj.blog}`];
  for (let i = 0; i < basicsArr.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "<span>" + basicKeys[i] + "</span>" + basicsArr[i];
    ul.appendChild(li);
  }

  let p = document.createElement("p");
  p.textContent = obj.bio;
  story.appendChild(p);

  let img = document.createElement("img")
  img.src = obj.avatar_url;
  avatar.appendChild(img);

});
req.send();
