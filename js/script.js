/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listItem = document.getElementsByClassName("student-item cf");
//console.log(listItem);

const itemsPerPage = 10; 


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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


// Create the `appendPageLinks function` to generate, append, and add 
// functionality to the pagination buttons.


function appendPageLinks (list) {
  let pageDiv = document.createElement(".page");
  let paginationDiv = document.createElement('div');
  paginationDiv.className = "pagination";
  let ul = document.createElement("ul");
  pageDiv.appendChild(paginationDiv);
  paginationDiv.appendChild(ul);
  let pageNumber = Math.ceil(list.length / itemsPerPage);
  
  for (j = 0; j < pageNumber; j++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   let a = document.createElement("a");
   li.appendChild(a);
   


  }


}






li
a href
