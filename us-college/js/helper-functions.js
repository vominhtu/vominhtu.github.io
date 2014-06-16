function toggleSchoolList(listId){
    var schoolList = document.getElementById(listId);
    if (schoolList.style.display != "block") {
        schoolList.style.display = "block";
    } else {
        schoolList.style.display = "none";
    }
}