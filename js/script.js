/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItem = document.getElementsByClassName("student-item cf"); // list of students
//console.log(listItem);

const itemsPerPage = 10; //number of items displayed per page


// a function that will only show the ten items we want to show, the rest will be hidden
function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
   for (i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      listItem[i].style.display = "";
   } else {
      listItem[i].style.display = "none";
     }
   }
}


// A function that will generate, append, and add functionality to the pagination buttons.
function appendPageLinks (list) {
  let pageDiv = document.querySelector(".page"); 
  let paginationDiv = document.createElement("div"); //created a dynamic page structure - div, ul, li & a
  paginationDiv.className = "pagination";
  pageDiv.appendChild(paginationDiv);
  let pageUL = document.createElement("ul");
  paginationDiv.appendChild(pageUL);
  let pageNumber = Math.ceil(list.length / itemsPerPage); // calculate the number of pages needed

  for (j = 1; j < pageNumber; j++) {
   let pageLI = document.createElement("li");
   let pageA = document.createElement("a");
   pageLI.appendChild(pageA);
   pageUL.appendChild(pageLI);
   pageA.href = "#";
   pageA.innerHTML = `${j}`;
  };

  pageA[0].className = "active";
  //https://developer.mozilla.org/en-US/docs/Web/API/Event/target event target resources
  pageA.addEventListener("click", (e) => {
    for (let k = 0; k < pageA.length; k++) {
      pageA[k].classname = "";
      e.target.className = "active";
    }
  })
};


showPage(listItem, 1);
appendPageLinks (listItem);

/*
Add a “click” event listener to each A element. 
A loop can be helpful here.
When a pagination link is clicked:
The active class name should be removed from all pagination links. 
A loop can be helpful for this step.

The active class name should be added to the link that was just clicked. 
The target property of the event object should be useful here.
The function to show a page should be called, passing in as arguments, 
the global variable for the list items, and the page number that should be shown. 
The text content of the 
A element that was just clicked can be helpful here.

*/

//showPage(listItem, 1);

