function changeGender(){
    if(document.getElementsByName('gender')[3].checked == true){
        document.getElementById('message').style.display = 'block';
    }
    else{
        document.getElementById('message').style.display = 'none';
    }
}

function enterOther(){
    if(document.getElementById('other').value.length < 5){
        document.getElementById('message').innerText = 
        "Maximum of 250 characters. Currently Used: " +
            document.getElementById('other').value.length
         + " characters.";

         document.getElementById('other').removeAttribute('readonly'); 
    }
    else{
        document.getElementById('other').setAttribute('readonly','true');
        
    }
}

function selectArea(areaId){
    if(areaId == 1){
        document.getElementById("area_1").style.backgroundColor = "#dddd6f";
        document.getElementById("area_2").style.backgroundColor = "";
        document.getElementById("area_3").style.backgroundColor = "";
    }
    if(areaId == 2){
        document.getElementById("area_1").style.backgroundColor = "";
        document.getElementById("area_2").style.backgroundColor = "#dddd6f";
        document.getElementById("area_3").style.backgroundColor = "";
    }
    if(areaId == 3){
        document.getElementById("area_1").style.backgroundColor = "";
        document.getElementById("area_2").style.backgroundColor = "";
        document.getElementById("area_3").style.backgroundColor = "#dddd6f";
    }
}