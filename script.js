const educators=[{
    id:1,
    text:"We have observed a positive direct corelation between student usage and student achievments. Students who are achieving their usage goals are showing growth oh their nationally normed assessments. This was present prior to and even during the pandemic.",
    img:"img/educator2.jpeg",
    name:"MICHAEL FEENEY",
    position:"EXECUTIVE DIRECTOR, PINELLAS COUNT SCHOOLS"
},
{
    id:2,
    text:"Our kids are much more equipped to go into a new grade level when they've had not only classroom instruction but also the support of DreamBox to further refine the skill development that we're looking for.",
    img:"img/educator1.jpeg",
    name:"SPOKANE PUBLIC SCHOOLS,WA",
    position:"WESTVIEW ELEMENTARY"
},
{
    id:3,
    text:"Reading plus not only provides our students with diffrentiated,rigorous instruction, but also offers students choice in what they are reading,building engagement and investement.We recognized that we needed to find a way for all students to have access to texts so that reading comprehension was still at the forefront of our instruction, and our reading.Plus has allowed us to do this where students, their families, and staff are able to celebrate students success and use  data points to communicate where growth needs happen. ",
    img:"img/educator3.jpeg",
    name:"KATIE DELAURENCE",
    position:"ADMINISTRATOR,HENDORSON COLLEDIATE"
}];
const img=document.getElementById("educator-img");
const white=document.getElementById("lightwhitetext");
const Name=document.getElementById("name");
const Position=document.getElementById("position");
const nextBtn=document.querySelector(".forward");
const preBtn=document.querySelector(".backward");
let currentEducator=0;
window.addEventListener("DOMContentLoaded",function(){
    showeducator(currentEducator);
})
function showeducator(educator){
    const item=educators[educator];
    img.src=item.img;
    white.textContent=item.text;
    Name.textContent=item.name;
    Position.textContent=item.position;
}
nextBtn.addEventListener("click",function(){
    currentEducator++;
    if(currentEducator>educators.length-1)
    {
        currentEducator=0;
    }
    showeducator(currentEducator);
})
preBtn.addEventListener("click",function(){
    currentEducator--;
    if(currentEducator<0)
    {
        currentEducator=educators.length-1;
    }
    showeducator(currentEducator);
})
