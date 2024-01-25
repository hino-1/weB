const app = new Vue({
el:"#app",
data:{
    count:60*60

},
created(){
    setInterval(() => {
       this.count=this.count -1 
$("#hour").text(Math.floor(c / 3600));
    }, 1000)
}
})
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
var w = now.getDay();
var wd = ['日', '月', '火', '水', '木', '金', '土'];
var h = now.getHours();
var mi = now.getMinutes();
var s = now.getSeconds();
target = document.getElementById('date');
target.innerHTML = y + '年' + m + '月' + d + '日' + h + '時' + mi + '分' + s + '秒' + '(' + wd[w] + ')';
window.onload = function() {
    const spinner = document.getElementById('loading');
   
    // Add .loaded to .loading
    spinner.classList.add('loaded');
  }
