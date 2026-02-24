1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans. 1.getElementById - we can grab one exact element by using it's id.
     2.getElementsClassName- we can gram multiple elements by using same class.
     3.querySelector- it looks through the webpage grab the first element,even if there are many other elements that matches 
     4. querySelectorAll - it looks through the webpage,and collect every elements

2.How do you create and insert a new element into the DOM?   
    Ans: const p = document.createElement("p");
      p.innerText = 'here's a new paragraph'
      document.body.appendChild(p);

3.What is Event Bubbling? And how does it work?  
 Ans.when we click on a button which is a child element,event runs on that button, then event goes to the buttons parent,then it goes to the parent's parent,it keeps going up to the document