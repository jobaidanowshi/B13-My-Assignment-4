// console.log("checking java-script")

// STEP--1
// FOR NUMBERS IN THE DASHBOaRD! storing in three variables
const totalCount = document.getElementById('totalCount');
const interviewCount = document.getElementById('interviewCount');
const rejectedCount = document.getElementById('rejectedCount');
// console.log(totalCount)


// STEP --2
// main three buttons  storing in three variables
const allTab = document.getElementById('allTab');
const interviewTab = document.getElementById('interviewTab');
const rejectedTab = document.getElementById('rejectedTab');
// storing these three buttons in variables so that js knows when the button is clicked

// STEP --3
// three id's for three types of cards  storing in three variables
const allCards = document.getElementById('all-cards');
const interviewCards = document.getElementById('interview-cards');
const rejectedCards = document.getElementById('rejected-cards');


const cards = document.querySelectorAll(".card");


// tab button clicking
allTab.onclick = () => showSection("all");
interviewTab.onclick = () => showSection("interview");
rejectedTab.onclick = () => showSection("rejected");


//function for color moving
function resetTabStyles (){
  allTab.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]")
  interviewTab.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]")
  rejectedTab.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]")

  allTab.classList.add("bg-[#FFFFFF]", "text-[#64748B]")
  interviewTab.classList.add("bg-[#FFFFFF]", "text-[#64748B]")
  rejectedTab.classList.add("bg-[#FFFFFF]", "text-[#64748B]")
}


// showsection function
function showSection (type){
    allCards.classList.add("hidden");
    interviewCards.classList.add("hidden");
    rejectedCards.classList.add("hidden");
    resetTabStyles();

    if(type === "all"){
           allCards.classList.remove("hidden");
           allTab.classList.remove("bg-[#FFFFFF]","text-[#64748B]");
           allTab.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
    } 
    if(type === "interview") {
        interviewCards.classList.remove("hidden");
        interviewTab.classList.remove("bg-[#FFFFFF]","text-[#64748B]");
        interviewTab.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
    }
    if(type === "rejected"){
         rejectedCards.classList.remove("hidden");
         rejectedTab.classList.remove("bg-[#FFFFFF]","text-[#64748B]");
         rejectedTab.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");

    }
}

// for moving card 

cards.forEach(card => {
    
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectBtn = card.querySelector(".rejected-btn");
    const deleteBtn = card.querySelector(".delete-btn");

     interviewBtn.onclick = () => {
        moveCard(card,"interview");
     };

     rejectBtn.onclick = () => {
        moveCard(card,"rejected");
     };
     
  deleteBtn.onclick = () =>{
    deleteCard(card);
  };

})

function moveCard(card,type){
    card.dataset.status = type;
    const statusBtn = card.querySelector(".status-btn");
    if(type ==="interview"){
        interviewCards.appendChild(card);
        

    }else{
        rejectedCards.appendChild(card);
        
    }
    updateCounts();
    updateEmptyState();
}
// delete card function
function deleteCard(card){
    card.remove()
    updateCounts()
}
// update count
function updateCounts(){
 const all = document.querySelectorAll(".card").length;
 const interview = interviewCards.querySelectorAll(".card").length;
 const rejected = rejectedCards.querySelectorAll(".card").length;
 

 totalCount.innerText = all ;
  
  interviewCount.innerText = interview;
  rejectedCount.innerText = rejected;
}
