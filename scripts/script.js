/* Start Method For Loading Section */
window.onload = function () {
    var load = document.getElementById("loading");
    load.classList.add("hideLoad");
};
/* End Method For Loading Section */

/* Start Method go to the top of page */
function goTo () {
    window.scroll(0 , 0);
}
/* End Method go to the top of page */

/* Start Method To Toggle the Menu List */
function toggNav () {
    var list = document.getElementById("list");
    list.classList.toggle("togNav");
}
/* End Method To Toggle the Menu List */

/* Start Method for Fhowing Feutures */
function showSection (eventElem , fixedIC , fixedClass , uniqueId)
{
    var selectedItem = document.getElementById(eventElem) , 
        items = document.getElementsByClassName(fixedIC) ,
        sections = document.getElementsByClassName(fixedClass) ,
        currentElem = document.getElementById(uniqueId);
    for (var i = 0; i < sections.length; i++)
    {
         items[i].classList.remove("selected");
         sections[i].classList.add("hideSection");
    }
    selectedItem.classList.add("selected");
    currentElem.classList.remove("hideSection");
}
/* End Method for Fhowing Feutures */