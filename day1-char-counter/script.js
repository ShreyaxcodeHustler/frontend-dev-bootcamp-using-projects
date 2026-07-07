const textArea =document.getElementById("myInput");//helps js find the textarea element 
const counter =document.getElementById("Counter");//helps find the counter element
//feel free to open the html file in the browser and check whether the html  is able to find the js source and refernce it properly after this step
//save the file->  Inspect → Console tab) and refresh. Type textarea into the console and press enter run the html file(open with live server)

textArea.addEventListener("input", function(){
    const length=textArea.value.length;
    counter.textContent = `${length}/100 characters`;
    //above code are enough for a basic textcounter project 
    if (length>100){
        counter.style.color="red";
    } else{
        counter.style.color="black";
    }
    
});