addEventListerner('DOMContentLoaded', (event) => {
//this means that this code would run automatically once it's opened
   
    const button = document.getElementById('submit');
    //get the input field by its id we assigned on the html given
    const input = document.getElementById('name')

        button.addEventListener('click', (event) => {event.preventDefault();
        //preventing the default action of the button so we can change it 
        
        const name = input.ariaValueMax;
        //get the value of the name by it's input
        const para = document.getElementById('greeting');
        //get the paragraph element by it's id

        para.textContent = 'Welcome ${name}!';
        input.value = '';
        });

        
        }); 


