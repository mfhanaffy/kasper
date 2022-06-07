$(document).ready(

    $(".PORTFOLIO .big-card .nine").slideUp(1),
    $(".PORTFOLIO .big-card .ten").slideUp(1),
    $(".PORTFOLIO .big-card .eleven").slideUp(1),
    $(".PORTFOLIO .big-card .twelve").slideUp(1),


    $("#button_search").on("click" , function(){
        $("#SEARCH").toggleClass("search_active")
    }),
    $("#click-right").on("click" , function(){
        $(".landing ul li").each(function(){
            $(".landing ul li").removeClass("center")
        })
        if( $("#landing").hasClass("image1") ){
            $("#landing").removeClass("image1");
            $("#landing").addClass("image2");
            $("#landing_three").addClass("center")
        }else if ($("#landing").hasClass("image2") ){
            $("#landing").removeClass("image2");
            $("#landing").addClass("image3");
            $("#landing_one").addClass("center")
        }else if ($("#landing").hasClass("image3") ){
            $("#landing").removeClass("image3");
            $("#landing").addClass("image1");
            $("#landing_tow").addClass("center")
        };
    }),
    $("#click-left").on("click" , function(){
        $(".landing ul li").each(function(){
            $(".landing ul li").removeClass("center")
        })
        if( $("#landing").hasClass("image1") ){
            $("#landing").removeClass("image1");
            $("#landing").addClass("image3");
            $("#landing_one").addClass("center")
        }else if ($("#landing").hasClass("image3") ){
            $("#landing").removeClass("image3");
            $("#landing").addClass("image2");
            $("#landing_three").addClass("center")
        }else if ($("#landing").hasClass("image2") ){
            $("#landing").removeClass("image2");
            $("#landing").addClass("image1");
            $("#landing_tow").addClass("center")
        }
    }),
    $("#landing_one").on("click" , function(){
        $(".landing ul li").each(function(){
            $(".landing ul li").removeClass("center");
            $("#landing_one").addClass("center")
        })
        if( $("#landing").hasClass("image1") ){
            $("#landing").removeClass("image1");
            $("#landing").addClass("image3");
        }else if ($("#landing").hasClass("image2") ){
            $("#landing").removeClass("image2");
            $("#landing").addClass("image3");
        }
    }),
    $("#landing_tow").on("click" , function(){
        $(".landing ul li").each(function(){
            $(".landing ul li").removeClass("center");
            $("#landing_tow").addClass("center")
        })
        if( $("#landing").hasClass("image2") ){
            $("#landing").removeClass("image2");
            $("#landing").addClass("image1");
        }else if ($("#landing").hasClass("image3") ){
            $("#landing").removeClass("image3");
            $("#landing").addClass("image1");
        }
    }),
    $("#landing_three").on("click" , function(){
        $(".landing ul li").each(function(){
            $(".landing ul li").removeClass("center");
            $("#landing_three").addClass("center")
        })
        if( $("#landing").hasClass("image1") ){
            $("#landing").removeClass("image1");
            $("#landing").addClass("image2");
        }else if ($("#landing").hasClass("image3") ){
            $("#landing").removeClass("image3");
            $("#landing").addClass("image2");
        }
    }),
    $("#portfolio_more").on("click" , function(){
        if( $("#portfolio_more").text() === "more"){
            $("#portfolio_more").text("hidden");
            $(".PORTFOLIO .big-card .nine").slideDown(500);
            $(".PORTFOLIO .big-card .ten").slideDown(500);
            $(".PORTFOLIO .big-card .eleven").slideDown(500);
            $(".PORTFOLIO .big-card .twelve").slideDown(500)
        // $(".PORTFOLIO .big-card .card").each(function(){
        //     $(".PORTFOLIO .big-card .card").removeClass("portfolio_hidden");})
        }else if ($("#portfolio_more").text() === "hidden"){
            $("#portfolio_more").text("more");
            $(".PORTFOLIO .big-card .nine").slideUp(500);
            $(".PORTFOLIO .big-card .ten").slideUp(500);
            $(".PORTFOLIO .big-card .eleven").slideUp(500);
            $(".PORTFOLIO .big-card .twelve").slideUp(500)
        }
    }),
    $(".PORTFOLIO .contaner .chose ul li").on("click" , function(){
        $("#portfolio_more").text("more");
        $(".PORTFOLIO .contaner .chose ul li").each(function(){
            $(".PORTFOLIO .contaner .chose ul li").removeClass("active")
        });
        $(this).addClass("active");
        if(this.id === "App"){
            $(".PORTFOLIO .big-card .card").each(function() {
                $(".PORTFOLIO .big-card .card").fadeOut(1)
            }),
            $(".PORTFOLIO .big-card .one").fadeIn(1000),
            $(".PORTFOLIO .big-card .tow").fadeIn(1000),
            $(".PORTFOLIO .big-card .three").fadeIn(1000)
        };
        if(this.id === "Photo"){
            $(".PORTFOLIO .big-card .card").each(function() {
                $(".PORTFOLIO .big-card .card").fadeOut(1)
            }),
            $(".PORTFOLIO .big-card .four").fadeIn(1000),
            $(".PORTFOLIO .big-card .five").fadeIn(1000),
            $(".PORTFOLIO .big-card .six").fadeIn(1000)
        };
        if(this.id === "Web"){
            $(".PORTFOLIO .big-card .card").each(function() {
                $(".PORTFOLIO .big-card .card").fadeOut(1)
            }),
            $(".PORTFOLIO .big-card .seven").fadeIn(1000),
            $(".PORTFOLIO .big-card .eight").fadeIn(1000),
            $(".PORTFOLIO .big-card .nine").fadeIn(1000)
        };
        if(this.id === "Print"){
            $(".PORTFOLIO .big-card .card").each(function() {
                $(".PORTFOLIO .big-card .card").fadeOut(1)
            }),
            $(".PORTFOLIO .big-card .ten").fadeIn(1000),
            $(".PORTFOLIO .big-card .eleven").fadeIn(1000),
            $(".PORTFOLIO .big-card .twelve").fadeIn(1000)
        };
        if(this.id === "All"){

            $(".PORTFOLIO .big-card .card").each(function() {
                $(".PORTFOLIO .big-card .card").fadeOut(1000)
            }),
            $(".PORTFOLIO .big-card .one").fadeIn(1000),
            $(".PORTFOLIO .big-card .tow").fadeIn(1000),
            $(".PORTFOLIO .big-card .three").fadeIn(1000),
            $(".PORTFOLIO .big-card .four").fadeIn(1000),
            $(".PORTFOLIO .big-card .five").fadeIn(1000),
            $(".PORTFOLIO .big-card .six").fadeIn(1000),
            $(".PORTFOLIO .big-card .seven").fadeIn(1000),
            $(".PORTFOLIO .big-card .eight").fadeIn(1000)
        }
    }),
    $("#icon1_TESTIMONIALS").on("click" , function(){
        $("#icon2_TESTIMONIALS").removeClass("center");
        $("#icon1_TESTIMONIALS").addClass("center");
        $(".our-skills .contaner .TESTIMONIALS .project_personality .all-personality").removeClass("rotate_TESTIMONIALS")
    }),
    $("#icon2_TESTIMONIALS").on("click" , function(){
        $("#icon1_TESTIMONIALS").removeClass("center");
        $("#icon2_TESTIMONIALS").addClass("center");
        $(".our-skills .contaner .TESTIMONIALS .project_personality .all-personality").addClass("rotate_TESTIMONIALS")
    }),
    $("#menue_sidebare").on("click" , function(){
        $(this).toggleClass("menue_sidebare");
        $(".header .contaner nav").toggleClass("nav_hidden_bybutton");
    }),
    $(document).on("click" , function(e){
        if(e.target.id !== "button_search" && e.target.id !== "SEARCH" ){
            $("#SEARCH").removeClass("search_active")};
            console.log(e.target.id);
    })
)

// $("#portfolio_more").text()