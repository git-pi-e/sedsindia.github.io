const candidates = [
    {
        name: "Sejal Budholiya",
        position: "Chair and Vice Chair",
        link: "https://drive.google.com/file/d/1ks3Gb7XQ1Gjj4kp16ZkZ7mMUcMvB-woT/preview",
    },
    {
        name: "Nathan Shankar",
        position: "Chair and Secretary",
        link: "https://drive.google.com/file/d/106OS3BDMRyG6IomomlTnnrHRtKSWngf-/preview",
    },
    {
        name: "Adithya S",
        position: "Vice Chair",
        link: "https://drive.google.com/file/d/1ad9rAgHo22dcAXgIUw6mYYGjJvOIjm3A/preview",
    },
    {
        name: "Megha Choudhary",
        position: "Vice Chair",
        link: "https://drive.google.com/file/d/1bh4d8fmI4W2V8IjWSuYINIaPqmQhQl_N/preview",
    },
    {
        name: "Aviral Kumar Goel",
        position: "Vice Chair and At Large",
        link: "https://drive.google.com/file/d/1NrO8rcP10W3eiR5u6MR2fcdsNkk4S7Wf/preview",
    },
    {
        name: "Samanyu Okade",
        position: "Secretary and At Large",
        link: "https://drive.google.com/file/d/12QLkOn7rQcV07sMNeL9SCeG5bWeNcuWi/preview",
    },
    {
        name: "Aaruni Sharma",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1BpiAAiJyihZyo70CfQjtbxyuQUkcdGDZ/preview",
    },
    {
        name: "Neil Shah",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1-zyMq-PlZG5CZFW6SrYN6FJVTlPKYqFY/preview",
    },
    {
        name: "Priyanka V",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1EIIn_5ckBkOILYQ_cVUWbTb3WB1S-WQD/preview",
    },
    {
        name: "Abhilash Nataraj S",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1yagwjtO8jjGX3xJPek5aoxXT4-Eq632T/preview",
    },
    {
        name: "S Kirthika",
        position: "Secretary",
        link: "https://drive.google.com/file/d/1uwFNJDxaQfjvcpg_n8ZILANqhtLs-1Fk/preview",
    },
    {
        name: "Shriram Joshi",
        position: "Treasurer",
        link: "https://drive.google.com/file/d/1z26HI64BzkKw_WWfydwhTQN8eSgwXp8K/preview",
    },
    {
        name: "Hrutwick Sawant",
        position: "Corporate Affairs & Funding Director",
        link: "https://drive.google.com/file/d/12mnYyuSiPxTyn1A6qWyf8gNpByUTk8iP/preview",
    },
    {
        name: "Mohammed Aslam",
        position: "Corporate Affairs & Funding Director and At Large",
        link: "https://drive.google.com/file/d/1bvpnVxhYzWvCjR8Lcz9bCSBjlDW-BPLP/preview",
    },
    {
        name: "Ohmprakash V",
        position: "At Large",
        link: "https://drive.google.com/file/d/1hWP0LGLbnDqVoQDOjqxHRax97en-FK8i/preview",
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
      var link = document.createTextNode("View SOP");

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