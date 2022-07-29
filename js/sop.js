const candidates = [
    {
        name: "Samanyu Okade",
        position: "Chair and Vice Chair",
        link: "https://drive.google.com/file/d/1p56NKeys3ee71y2R-FYrniuZ2kJclzBO/preview",
    },
    {
        name: "Sarigha Sriram G",
        position: "Chair and Secretary",
        link: "https://drive.google.com/file/d/1svur2FWZ2LWcdOwsNIWmLdqvS96UOH8t/preview",
    },
    {
        name: "Yash Chauhan",
        position: "Chair",
        link: "https://drive.google.com/file/d/11hneEtBcsrxfmVN4xCVS8yKEafCOVGD-/preview",
    },
    {
        name: "Piyush Mohite",
        position: "Vice Chair",
        link: "https://drive.google.com/file/d/1hdXkPbm5MB4GM0r2xQz10Upz7Qbzm1iH/preview",
    },
    {
        name: "Sushant Srivastav",
        position: "Vice Chair and Secretary",
        link: "https://drive.google.com/file/d/1zVdEXyzPKzKe7gBdPZIOk0eA-j2Cfk30/preview",
    },
    {
        name: "Anusuya V",
        position: "Vice Chair and Executive Director",
        link: "https://drive.google.com/file/d/1bU6pNezuesAps-bnRhyhJ5-t9UlLIFBd/preview",
    },
    {
        name: "Subrahmanyam Mantha",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1X8gAJ-5MQQsVbg3FrhiesH1XT9n0fA8B/preview",
    },
    {
        name: "Prakhar Agrawal",
        position: "Treasurer",
        link: "https://drive.google.com/file/d/1N7-OEIQizTbLNY9ZeOZVLSC7FHXXWmWX/preview",
    },
    {
        name: "Om Diwan",
        position: "Corporate Affairs & Funding Director",
        link: "https://drive.google.com/file/d/10lcg779g_5pAPFoqmzpSNoKnLmVVNjUe/preview",
    },
    {
        name: "Anusha R",
        position: "Corporate Affairs & Funding Director",
        link: "https://drive.google.com/file/d/1ebD_gK_7a_CphjP3a30JOQ4YmhvGBMFF/preview",
    },
    {
        name: "Tanmayee Srinivas",
        position: "At Large",
        link: "https://drive.google.com/file/d/1vB9Ab2cDRj3kWqaiisWE0rhcKGA2UTeZ/preview",
    },
    {
        name: "Mahima Swetha M",
        position: "At Large",
        link: "https://drive.google.com/file/d/1FlJYG8lYFa5d6sLFfK4Hlk5HSTv56z1w/preview",
    },
    {
        name: "K Sai Akshit",
        position: "Executive Director",
        link: "https://drive.google.com/file/d/1LMx616iTjh2a0ZD5eSTETunEYZOlG2Ii/preview",
    },
    {
        name: "Priyanka V",
        position: "Executive Director",
        link: "https://drive.google.com/file/d/1_cF2aCXXx62bJGzwnVnMj6uiXeBcTutJ/preview",
    },
]


window.addEventListener("load", function(){

    var table = document.createElement('table');

    var tableHead = document.createElement('thead');
    var row1 = tableHead.insertRow();
    var cell1 = row1.insertCell();
    cell1.innerHTML = "Name";

    var cell2 = row1.insertCell();
    cell2.innerHTML = "Positions Applying For";

    var cell3 = row1.insertCell();
    cell3.innerHTML = "Statement of Purpose";

    var tableBody = document.createElement('tbody');
    var row = tableBody.insertRow();


    for (var i = 0; i < candidates.length; i++) {
      var j=i;
      var cell1 = row.insertCell();
      cell1.innerHTML = candidates[i].name;

      var cell2 = row.insertCell();
      cell2.innerHTML = candidates[i].position;

      var cell3 = row.insertCell();
      var button = document.createElement('button');

      var a = document.createElement('a');
    //   a.addEventListener("click", function(){
    //     var cand = a.getAttribute('id')


    //     var numb = cand.match(/\d/g);
    //     numb = numb.join("");
    //     console.log(numb);


    //     localStorage.setItem('link',candidates[numb].link);
    //     sopDisplay();
    //   });
      a.setAttribute('id',candidates[j].link)
      a.setAttribute('onclick','sopDisplay(this)')

      a.target = "_blank"
      var link = document.createTextNode("View");

      a.appendChild(link);
      button.appendChild(a);

      cell3.appendChild(button);

      row = tableBody.insertRow();
    }

    table.appendChild(tableHead);
    table.appendChild(tableBody);

    document.getElementById("soptable")?.appendChild(table);
  });


  function sopDisplay(link){

    console.log(link.id)
    window.open("sopdisplay.html", "_blank");
    localStorage.setItem('link',link.id)
    finalSop();
  }

  function finalSop(){
    var iframe = document.createElement('iframe');
    iframe.src = localStorage.getItem('link');
    iframe.width = 720;
    iframe.height = 1000;
    iframe.allow = "autoplay";

    document.getElementById("sopdisplay")?.appendChild(iframe);
  }