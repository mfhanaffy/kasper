//test
// document.onclick = function(e){
//     console.log(e.target.id);
// }
let click_left = document.getElementById("click-left")
let click_right = document.getElementById("click-right")
let landing = document.getElementById("landing")
let allLi = document.querySelectorAll(".landing ul li")


// start  swap photo by shares

allLi.forEach(function(){
    click_left.onclick = function(){ 
        if(landing.classList.contains("image1") ){
            landing.classList.remove("image1") ;
            landing.classList.add("image2") ;
            allLi.forEach(
                function(e){
                    if(e.id !== "landing_one"){
                        e.classList.remove("center")
                    }else{
                        e.classList.add("center")
                    }
                }
                
            )
           
        }else if(landing.classList.contains("image2")){
            landing.classList.remove("image2") ;
            landing.classList.add("image3") ;
            allLi.forEach(
                function(e){
                    if(e.id !== "landing_three"){
                        e.classList.remove("center")
                    }else{
                        e.classList.add("center")
                    }
                }
                
            )

        }else if(landing.classList.contains("image3")){
            landing.classList.remove("image3") ;
            landing.classList.add("image1")
            allLi.forEach(
                function(e){
                    if(e.id !== "landing_tow"){
                        e.classList.remove("center")
                    }else{
                        e.classList.add("center")
                    }
                }
                
            ) ;}
    }
    click_right.onclick = function(){
        if(landing.classList.contains("image1") ){
        landing.classList.remove("image1") ;
        landing.classList.add("image3") ;
        allLi.forEach(
            function(e){
                if(e.id !== "landing_three"){
                    e.classList.remove("center")
                }else{
                    e.classList.add("center")
                }
            }
            
        )
    } else if(landing.classList.contains("image3")){
        landing.classList.remove("image3") ;
        landing.classList.add("image2") ;
        allLi.forEach(
            function(e){
                if(e.id !== "landing_one"){
                    e.classList.remove("center")
                }else{
                    e.classList.add("center")
                }
            }
            
        )
    } else if(landing.classList.contains("image2")){
        landing.classList.remove("image2") ;
        landing.classList.add("image1")
        allLi.forEach(
            function(e){
                if(e.id !== "landing_tow"){
                    e.classList.remove("center")
                }else{
                    e.classList.add("center")
                }
            }
            
        ) ;}
    }

})


// End swap photo by shares
// start swap photo by circle
    allLi.forEach(function(e){
        e.onclick = function(){
            allLi.forEach(function(e){
            e.classList.remove("center")
        })
        if(this.id === "landing_one")
        {
            this.classList.add("center")
            if(landing.classList.contains("image1") ){
                landing.classList.remove("image1") ;
                landing.classList.add("image2") ;}
            if(landing.classList.contains("image3") ){
                landing.classList.remove("image3") ;
                landing.classList.add("image2") ;}
        }else if(this.id === "landing_tow")
        {
            this.classList.add("center")
            if(landing.classList.contains("image2") ){
                landing.classList.remove("image2") ;
                landing.classList.add("image1") ;}
            if(landing.classList.contains("image3") ){
                landing.classList.remove("image3") ;
                landing.classList.add("image1") ;}
        }else if(this.id === "landing_three")
        {
            this.classList.add("center")
            if(landing.classList.contains("image2") ){
                landing.classList.remove("image2") ;
                landing.classList.add("image3") ;}
            if(landing.classList.contains("image1") ){
                landing.classList.remove("image1") ;
                landing.classList.add("image3") ;}
        }
        }
    })




//Start Search
let SearchIcon = document.getElementById("button_search") ;
let search = document.getElementById("SEARCH");

SearchIcon.onclick = function (){
    search.classList.toggle("search_active")

}

document.onclick = function(e){
    if(e.target.id !==  "button_search" && e.target.id !==  "SEARCH"){
        search.classList.remove("search_active")
    }
}
// End Search
//start portfolio

let PORTFOLIO_text = document.querySelectorAll(".PORTFOLIO .contaner .chose ul li");
let PORTFOLIO_button =  document.getElementById("portfolio_more")
let PORTFOLIO_card =  document.querySelectorAll(" .big-card > div")


//text 
PORTFOLIO_card.forEach(
    function(){
        PORTFOLIO_text.forEach(function(e){
            e.onclick = function(){
                PORTFOLIO_text.forEach(function(e){
                e.classList.remove("active");
                })
                 if(this.id === "All"){
                    PORTFOLIO_card.forEach(function(e){
                        if(e.classList.contains("one") || e.classList.contains("tow") || e.classList.contains("three") || e.classList.contains("four") || e.classList.contains("five") || e.classList.contains("six") || e.classList.contains("seven") || e.classList.contains("eight") ){
                            e.classList.remove("portfolio_hidden") 
                            PORTFOLIO_button.style.display = "block"
                           
                           
                        }else{
                            e.classList.add("portfolio_hidden") 
                        }
                    })
                    console.log("all");
                 }else if(this.id === "App"){
                    PORTFOLIO_card.forEach(function(e){
                        if(e.classList.contains("one") || e.classList.contains("tow") || e.classList.contains("three")){
                            e.classList.remove("portfolio_hidden") 
                            PORTFOLIO_button.style.display = "none"
                           
                        }else{
                            e.classList.add("portfolio_hidden") 
                        }
                    })
                 }else if(this.id === "Photo"){
                    PORTFOLIO_card.forEach(function(e){
                        if(e.classList.contains("four") || e.classList.contains("five") || e.classList.contains("six")){
                            e.classList.remove("portfolio_hidden") 
                            PORTFOLIO_button.style.display = "none"
                           
                        }else{
                            e.classList.add("portfolio_hidden") 
                        }
                    })
                    console.log("Photo");
                 }else if(this.id === "Web"){
                    PORTFOLIO_card.forEach(function(e){
                        if(e.classList.contains("seven") || e.classList.contains("eight") || e.classList.contains("nine")){
                            e.classList.remove("portfolio_hidden") 
                            PORTFOLIO_button.style.display = "none"
                           
                        }else{
                            e.classList.add("portfolio_hidden") 
                        }
                    })
                    console.log("Web");
                 }else if(this.id === "Print"){
                    PORTFOLIO_card.forEach(function(e){
                        if(e.classList.contains("ten") || e.classList.contains("eleven") || e.classList.contains("twelve")){
                            e.classList.remove("portfolio_hidden") 
                            PORTFOLIO_button.style.display = "none"
                           
                        }else{
                            e.classList.add("portfolio_hidden") 
                        }
                    })
                    console.log("Print");
                 }
                this.classList.add("active");
                
                
            }
        })
    }
)
// button
PORTFOLIO_card.forEach(function(){

    PORTFOLIO_button.onclick = function(){

                
                PORTFOLIO_card.forEach(function(e){
                    if(e.classList.contains("nine") || e.classList.contains("nine") || e.classList.contains("ten") || e.classList.contains("eleven") ||e.classList.contains("twelve") ){

                        e.classList.toggle("portfolio_hidden")
                        if(e.classList.contains("portfolio_hidden")){
                            PORTFOLIO_button.innerHTML ="More"
                        }else{
                            PORTFOLIO_button.innerHTML ="hidden"
                        }
                    }
                })
            }})
// *****************************************
//start TESTIMONIALS
let TESTIMONIALS = document.getElementById("all-personality")
let TESTIMONIALS_icon = document.querySelectorAll(".TESTIMONIALS ul li")
console.log(TESTIMONIALS_icon);
TESTIMONIALS_icon.forEach(function(e){
    e.onclick = function (){
        TESTIMONIALS_icon.forEach(function(e){
                e.classList.remove("center")
        })
        this.classList.add("center")
        if(this.id === "icon1_TESTIMONIALS"){
            TESTIMONIALS.classList.remove("rotate_TESTIMONIALS")
        }else {
            TESTIMONIALS.classList.add("rotate_TESTIMONIALS")
        }
    }
})

// header
let button_header = document.getElementById("menue_sidebare")
let content_header = document.getElementById("nav")



button_header.onclick = function(){
        content_header.classList.toggle("nav_hidden_bybutton")
    
    }
document.onclick = function(e){
    if(e.target.id !== "menue_sidebare" && e.target.id !== "button_search"){
       if( content_header.classList.contains("nav_hidden_bybutton")){
        content_header.classList.remove("nav_hidden_bybutton")}
    }
}
// 