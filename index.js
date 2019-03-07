function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target')
}

// function increaseRankBy(n){
//   var rankedL=document.querySelectorAll('.ranked-list');
//   for(var i=0;i<rankedL.length;i++){
//   var li=rankedL[i].querySelectorAll('li');
//   for(var ii=0;ii<li.length;ii++){
//     var num=li[ii].innerHTML;
//     li[ii].innerHTML=parseInt(li[ii].innerHTML)+n
//   }
//   }
// }

function increaseRankBy(n){
    var cows=document.querySelectorAll('.ranked-list li')
    for (var i=0;i<cows.length;i++){
        cows[i].innerHTML=parseInt(cows[i].innerHTML)+n;
    }
}

function deepestChild(){
  var total=document.querySelectorAll('#grand-node div')
  return total[total.length-1]
}