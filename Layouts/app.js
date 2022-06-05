// Declaring UI variables
const UIform = document.querySelector('#form'),
      UIformTitle = document.querySelector('#form-title'),
      UIformDiscription = document.querySelector('#form-discription'),
      UIformDate = document.querySelector('#form-date'),
      UIformBtn = document.querySelector('#form-btn'),
      taskSection = document.querySelector('#task-section');
//   localStorage.clear()
const  editTask = document.querySelector('#editTask'),
            editformTitle = document.querySelector('#form-title1'),
            editformDiscription = document.querySelector('#form-discription1'),
            editformDate = document.querySelector('#form-date1'),
            editformBtn = document.querySelector('#form-btn1');
loadEventListeners()
    
function loadEventListeners(){ 
  // DOM content loaded
  document.addEventListener('DOMContentLoaded', displayTask);
   
 //adding event listener to form btn
  UIform.addEventListener('submit', addNewTask);

}

// adding task on submit event
function addNewTask(e){
    window.location.href = "index.html"
    if (UIformTitle.value === '') {
        alert('please enter your Title')
        taskSection = null
    } else if (UIformDiscription.value === '') {
        alert('please enter your discripton')
        taskSection = null
    } else if (UIformDate.value === ''){
        alert('enter a valid date')
        taskSection = null
    };

// add tasks to local storage
    StoreTasktoLocalStorage();

 e.preventDefault()
};

// store task in local storage
function StoreTasktoLocalStorage () {
    let titles, discriptions, dates;
    if (localStorage.getItem('titles', 'discriptions', 'dates') === null) {
        titles = [];
        discriptions = [];
        dates = [];
    } else{
        titles = JSON.parse(localStorage.getItem('titles'));
        discriptions = JSON.parse(localStorage.getItem('discriptions'));
        dates = JSON.parse(localStorage.getItem('dates'));
    }

    titles.push(UIformTitle.value);
    discriptions.push(UIformDiscription.value);
    dates.push(UIformDate.value);

    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('discriptions', JSON.stringify(discriptions));
    localStorage.setItem('dates', JSON.stringify(dates));

    UIformTitle.value = '' 
    UIformDiscription.value = '' 
    UIformDate.value = ''
    
}

// displaying task at the index html file
function displayTask (){
    let titles, discriptions, dates;
    if (localStorage.getItem('titles', 'discriptions', 'dates') === null) {
        titles = [];
        discriptions = [];
        dates = [];
    } else{
        titles = JSON.parse(localStorage.getItem('titles'));
        discriptions = JSON.parse(localStorage.getItem('discriptions'));
        dates = JSON.parse(localStorage.getItem('dates'));
    }

    titles && discriptions && dates.forEach( function(task, index){
    // creating my continer holding all task
 const AllTaskCont = document.createElement('div');
       AllTaskCont.className = 'mt-5 bg-white p-4 rounded-xl',
       AllTaskCont.id = 'task-cont';
  
  //   creating h2
  const h2 = document.createElement('h2');
        h2.className = 'text-3xl mb-3 text-black';
        h2.id = 'task-title';
  
  //  creating ptag
  const p = document.createElement('p');
        p.className = 'text-base text-gray-700 px-4';
        p.id = 'task-discription';
  
  //   creatind a div that holds date done and edit
  const dateDoneEdit = document.createElement('div');
        dateDoneEdit.className = 'mt-5 flex justify-between';
        dateDoneEdit.id = 'date-done-edit';
  
   // creating a div for just date and done
  const dateDone = document.createElement('div');
        dateDone.className = 'flex justify-between gap-6 md:gap-12';
        dateDone.id = 'date-done';
  
  //creating a div for date alone
  const taskDate = document.createElement('div');
        taskDate.className = 'text-sm';
        taskDate.id  = 'task-date';
  
  //   creating a div for done button
  const doneBtn = document.createElement('button');
      doneBtn.className = 'h-10 px-5 text-indigo-100 transition-colors duration-150  bg-red-700 rounded-lg focus:shadow-outline';
      doneBtn.id = 'task-done';
      doneBtn.textContent = 'Undone';
  
  // appending the taskdate and done btn to datedone
  dateDone.appendChild(taskDate)
  dateDone.appendChild(doneBtn);
  
  // creating a div for edit button
  const edit = document.createElement('div');
        edit.className = 'mr-5 md:mr-10';
        edit.id = 'edit';
    
  //   creating edit button
  const editBtn = document.createElement('button');
        editBtn.className = 'h-10 px-5 text-indigo-100 transition-colors transition-colors duration-150 bg-green-700 rounded-lg  focus:shadow-outline hover:bg-indigo-800';
        editBtn.id = 'task-edit';
        editBtn.textContent = 'Edit'
       
   //  appending the to the div
   edit.appendChild(editBtn);
  
  //  append the two button to it's container
   dateDoneEdit.appendChild(dateDone)
   dateDoneEdit.appendChild(edit);
  //  append all the div to it's general container
   AllTaskCont.appendChild(h2)
   AllTaskCont.appendChild(p)
   AllTaskCont.appendChild(dateDoneEdit);

   h2.textContent = titles[index]
   p.textContent = discriptions[index]
   taskDate.textContent = dates[index]

   taskSection.appendChild(AllTaskCont);

   // adding event listener to all my created buttons
   doneBtn.addEventListener('click', changeBtnForDone);
   editBtn.addEventListener('click', editingTask);

//    foreach ends
    })  // foreach ending here
  }



  //  function for all my added buttons
   //   for done button
   function changeBtnForDone(e){
    const taskDone = e.target
    if (taskDone.id === 'task-done') {
      if (confirm('you are about to completed a task')) {
        taskDone.style.background = 'indigo'
        taskDone.textContent = 'Done';
      }
      
    };
    
    e.preventDefault();
   };

 // for edit button
  function editingTask(e, index){
      if (e.target.id = 'task-edit') {
        window.location.href = "edit.html"
let       titles = JSON.parse(localStorage.getItem('titles'));
 let       discriptions = JSON.parse(localStorage.getItem('discriptions'));
   let     dates = JSON.parse(localStorage.getItem('dates'));

        editformTitle.value = titles[index]
        editformDiscription.value = discriptions[index]
        editformDate.value = dates[index]
     }
     e.preventDefault();
   }
   