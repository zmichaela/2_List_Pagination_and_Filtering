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
};


// A function that will generate, append, and add functionality to the pagination buttons.
function appendPageLinks (list) {
  let pageDiv = document.querySelector(".page"); 
  let paginationDiv = document.createElement("div"); //created a dynamic page structure - div, ul, li & a
  paginationDiv.className = "pagination";
  pageDiv.appendChild(paginationDiv); //appended paginationDiv to pageDiv
  let pageUL = document.createElement("ul");
  paginationDiv.appendChild(pageUL); //appended UL to paginationDiv 
  let pageNumber = Math.ceil(list.length / itemsPerPage); // calculated the number of pages needed

  for (j = 0; j < pageNumber; j++) { //loop to create an LI for every 10 students
   let pageLI = document.createElement("li");
   let pageA = document.createElement("a");
   pageLI.appendChild(pageA); //appended A to LI
   pageUL.appendChild(pageLI); //appended LI to UL
   pageA.href = "#";
   pageA.innerHTML = `${j + 1}`;
  
   //set first page as active
   if (pageA.innerHTML == 1) {
     pageA.className = "active";
   };
 
   showPage(listItem, 1);

  //on button click, display the correct page and change the correct className to active
   pageA.addEventListener("click", (e) => {
    let allAnchors = document.querySelectorAll(".pagination a");
    for (let k = 0; k < allAnchors.length; k++) { 
      allAnchors[k].classList.remove("active"); 
    } 
    showPage(listItem, e.target.innerHTML);
    e.target.className = "active"; //changes class on the linked we clicked on to active  
    })
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Event/target event target resources


showPage (listItem, 1)

appendPageLinks (listItem);

   // let allAnchors = document.querySelectorAll("[href='#']");

