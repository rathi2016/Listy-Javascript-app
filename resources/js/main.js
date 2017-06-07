function buttonClick(){
 var value = document.getElementById('item').value;
 if(value) {
    addItemToList(value)
  value = document.getElementById('item').value = '' ;

 }
}

function removeItem

function addItemToList(item){
  var lis = document.getElementById('list');
   var el = document.createElement('li');
   el.innerText = item ;

   var buttons = document.createElement('div');
   buttons.classList.add('buttons');

   var remove = document.createElement('button');
   remove.classList.add('remove')
   remove.innerHTML = "delete"


   remove.addEventListener('click', removeItem);

   var complete = document.createElement('button');
   complete.classList.add('complete')
   complete.innerHTML = "done"

   buttons.appendChild(remove);
   buttons.appendChild(complete);
   el.appendChild(buttons);
   lis.insertBefore(el, list.childNodes[0]);
}


document.getElementById('addItem').addEventListener('click', buttonClick);
