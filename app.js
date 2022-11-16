let list =document.getElementById('list');
let header = document.getElementById('header');
let list2 = document.getElementById('list2');
function list1(){
    header.style.cssText =` opacity: 1;` ;
    list.style.display="none"
    list2.style.display="block"
}
function list3(){
    header.style.cssText =` opacity: 0;` ;
    list.style.display="block";
    list2.style.display="none";
}