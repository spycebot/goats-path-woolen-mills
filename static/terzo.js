/* 

console.log(inputValue)
*/
console.log("Hello, Console!");
input = document.getElementById("form_seeker_role");
// document.getElementById("form_seeker_role").innerHTML("TEST");
// input.innerText("TEST");
// console.log(input.innerHTML);
// const inputValue = input.value;

const wrapper = document.getElementById('column_left');

console.log("dir wrapper children");
console.dir(wrapper.children);

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        //console.log("Wrapper click not button")
        return;
    }
})

const collection = document.getElementsByClassName("optional");
console.log("dir collection");
console.dir(collection);
for (let i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', (event) => {
        console.log(collection[i].name)
        console.dir(this);
        console.dir(event.target.id);
    })
}