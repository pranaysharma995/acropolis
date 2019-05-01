$(document).ready(function()
{
            var portfolio_button_container=$(".portfolio-button-container").offset().top;
            console.log(portfolio_button_container);

        $(window).on("scroll",function(e)
        {
           
             let scroll=$(this).scrollTop();
                if(scroll > portfolio_button_container-50)
                {
                    $(".portfolio-button-container").addClass("fixed-portfolio");
                }
                else
                {
                    $(".portfolio-button-container").removeClass("fixed-portfolio");
                }
        });
        $(".search-container button").on("click",function()
        {
            console.log("Hello");
            $(this).css("box-shadow","0px 0px 0px #fff");
            $(".search-container input").toggleClass("show-searchbox");
        })
})