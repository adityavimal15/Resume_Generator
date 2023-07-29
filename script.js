function addNewSField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("border-solid");
    newNode.classList.add("border-black");
    newNode.classList.add("bg-gray-300");
    newNode.classList.add("w-3/5");
    newNode.classList.add("mt-2");
    newNode.classList.add("block");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");
    

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewPField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("border-solid");
    newNode.classList.add("border-black");
    newNode.classList.add("bg-gray-300");
    newNode.classList.add("w-3/5");
    newNode.classList.add("mt-2");
    newNode.classList.add("block");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    

    let peOb=document.getElementById("pe");
    let peAddButtonOb=document.getElementById("peAddButton");

    peOb.insertBefore(newNode,peAddButtonOb);
}
function addNewAField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("border-solid");
    newNode.classList.add("border-black");
    newNode.classList.add("bg-gray-300");
    newNode.classList.add("w-3/5");
    newNode.classList.add("mt-2");
    newNode.classList.add("block");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    

    let aeOb=document.getElementById("ae");
    let aeAddButtonOb=document.getElementById("aeAddButton");

    aeOb.insertBefore(newNode,aeAddButtonOb);
}


function generateCV(){

    let namefield=document.getElementById("namefield").value;

    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=namefield;

    document.getElementById("nameT2").innerHTML=namefield;
    document.getElementById("nameT3").innerHTML=namefield;

    document.getElementById("professionT1").innerHTML=document.getElementById("profession").value;
    document.getElementById("professionT2").innerHTML=document.getElementById("profession").value;
    document.getElementById("professionT3").innerHTML=document.getElementById("profession").value;

    document.getElementById("aboutT1").innerHTML=document.getElementById("you").value;
    document.getElementById("aboutT2").innerHTML=document.getElementById("you").value;
    document.getElementById("aboutT3").innerHTML=document.getElementById("you").value;

    document.getElementById("addressT1").innerHTML=document.getElementById("address").value;
    document.getElementById("addressT2").innerHTML=document.getElementById("address").value;
    document.getElementById("addressT3").innerHTML=document.getElementById("address").value;

    document.getElementById("linkedinT1").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("linkedinT2").innerHTML=document.getElementById("linkedin").value;
    document.getElementById("linkedinT3").innerHTML=document.getElementById("linkedin").value;

    
    document.getElementById("facebookT1").innerHTML=document.getElementById("facebook").value;
    document.getElementById("facebookT2").innerHTML=document.getElementById("facebook").value;
    document.getElementById("facebookT3").innerHTML=document.getElementById("facebook").value;

    
    document.getElementById("instaT1").innerHTML=document.getElementById("insta").value;
    document.getElementById("instaT2").innerHTML=document.getElementById("insta").value;
    document.getElementById("instaT3").innerHTML=document.getElementById("insta").value;
    
    let skills=document.getElementsByClassName("skill");
    let str="";
    for (let e of skills)
    {
        str=str += `<li> ${e.value} </li>`;
    }
    document.getElementById("skillsT1").innerHTML=str;
    document.getElementById("skillsT2").innerHTML=str;
    document.getElementById("skillsT3").innerHTML=str;

    let works=document.getElementsByClassName("work");
    let str1="";
    for (let e of works)
    {
        str1=str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("workexperienceT1").innerHTML=str1;
    document.getElementById("workexperienceT2").innerHTML=str1;
    document.getElementById("workexperienceT3").innerHTML=str1;

    let academics=document.getElementsByClassName("academic");
    let str2="";
    for (let e of academics)
    {
        str2=str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("academicsT1").innerHTML=str2;
    document.getElementById("academicsT2").innerHTML=str2;
    document.getElementById("academicsT3").innerHTML=str2;

    document.getElementById("information").style.display='none';
    document.getElementById("template").style.display='block';
}

function view(){
    document.getElementById("template").style.display='none';
    document.getElementById("first_template").style.display='block';
}function view1(){
    document.getElementById("template").style.display='none';
    document.getElementById("second_template").style.display='block';
}
function view2(){
    document.getElementById("template").style.display='none';
    document.getElementById("third_template").style.display='block';
}
function back1(){
    document.getElementById("first_template").style.display='none';
    document.getElementById("template").style.display='block';
}
function back2(){
    document.getElementById("second_template").style.display='none';
    document.getElementById("template").style.display='block';
}
function back3(){
    document.getElementById("third_template").style.display='none';
    document.getElementById("template").style.display='block';
}
function back4(){
    document.getElementById("template").style.display='none';
    document.getElementById("information").style.display='block';
}

function printCV(){
    window.print();
}
