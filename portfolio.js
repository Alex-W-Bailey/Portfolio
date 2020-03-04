$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Profile
$("#profile_github").on("click", function(){
    window.open("https://github.com/xKingAlex");
})
$("#profile_linkedin").on("click", function(){
    window.open("https://www.linkedin.com/in/alex-bailey-19280718a/");
})
$("#profile_resume").on("click", function(){
    window.open("https://docs.google.com/document/d/1KzQwaYdD7HtloREO0K09QqX-bMcyPIRPflbgtNmXIpE/edit?usp=sharing");
})


//Schedulez
$("#schedez_github").on("click", function(){
    window.open("https://github.com/xKingAlex/Schedulez");
})
$("#schedez_project").on("click", function(){
    window.open("http://scheduleez.herokuapp.com/");
})
$("#schedez_projectInfo").on("click", function(){
    window.location = "file:///C:/Users/Alexj/Documents/Code/Portfolio/project2.html"
})

//Nsearch
$("#nsearch_github").on("click", function(){
    window.open("https://github.com/xKingAlex/NSearch");
})
$("#nsearch_project").on("click", function(){
    window.open("https://xkingalex.github.io/NSearch/");
})
$("#nsearch_projectInfo").on("click", function(){
    window.open("https://xkingalex.github.io/Portfolio/project1.html");
})

//RPS
$("#rps_github").on("click", function(){
    window.open("https://github.com/xKingAlex/Allocat");
})
$("#rps_project").on("click", function(){
    window.open("https://allocat.herokuapp.com/");
})
$("#rps_projectInfo").on("click", function(){
    window.location = "https://xkingalex.github.io/Portfolio/project3.html"
})

$("#back-btn").on("click", function(){
    window.location = "https://xkingalex.github.io/Portfolio/index.html"
})
