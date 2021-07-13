var i = 0;
function update(){
    i++;
    var number_of_family_member_in_array = 5
    if(i > number_of_family_member_in_array)
    {
        i=0
    }
    var updatedimage = pictures[i];
    var updatedname = names[i];
    document.getElementById("familyimg").src = updatedimage;
    document.getElementById("h41").innerHTML = updatedname;
}