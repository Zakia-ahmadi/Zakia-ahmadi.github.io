    
     var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }

/*--------------Date----------*/ 
    var today = new Date();
    var date = today.getDate()+ '/' +(today.getMonth() + 1)+ '/' + today.getFullYear();
    document.getElementById("currentDate").innerHTML = date;
  
/*--------------Time----------*/ 
    let time = document.getElementById("currentTime");
    setInterval(() =>{
 let t = new Date();
    time.innerHTML = t.toLocaleTimeString();
    },1000)
   


    