document.addEventListener('DOMContentLoaded', function () {
//this means that this code would run automatically once it's opened
   
    const greeting = document.getElementById("greeting");
    const name = document.getElementById("name");
    const form = document.getElementById("form");
    //get the input field by its id we assigned on the html given

     form.addEventListener("submit", function (event) { 
        event.preventDefault();
        //preventing the default action of the button so we can change it 
        
        const name2 = name.value.trim();
        //get the value of the name by it's input
        if(name2)
        {greeting.textContent = 'Welcome, ' + name2 + '!';}
        });

        
        }); 


