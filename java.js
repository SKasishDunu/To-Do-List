let InputBox= document.querySelector('#inputBox');
let List= document.querySelector('#list');

InputBox.addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        addItem(this.value)
        this.value = ""
    }
})

let addItem = (InputBox) => {
    let ListItem = document.createElement("li");
    ListItem.innerHTML= `${InputBox}<i></i>`;

    ListItem.addEventListener("click", function(){
        this.classList.toggle("done");
    })

    ListItem.querySelector("i").addEventListener("click", function(){
        ListItem.remove();
    })

    List.appendChild(ListItem);
}