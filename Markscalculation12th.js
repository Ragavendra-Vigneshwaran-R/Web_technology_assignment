const readmorebtn1=document.querySelector('#mark1');
const text1=document.querySelector('.moretext');
readmorebtn1.addEventListener('click',(e)=>{
    text1.classList.toggle('show-more');
})
const calculate1=document.querySelector('#calculate');
calculate1.addEventListener('click',(e)=>{
    let g1=parseFloat(document.getElementById("g1").value);
    let g2=parseFloat(document.getElementById("g2").value);
    let g3=parseFloat(document.getElementById("g3").value);
    let g4=parseFloat(document.getElementById("g4").value);
    let g5=parseFloat(document.getElementById("g5").value);
    let g6=parseFloat(document.getElementById("g6").value);
    let total_mark=(g1+g2+g3+g4+g5+g6);
    let cut=g3+(g4/2)+(g5/2);
    let cut_off=cut.toFixed(1);
    document.getElementById("result").innerHTML="Your 12th Total mark is "+total_mark +"<br>"+"<br>"+"Your engineering cutoff is "+cut_off;
})