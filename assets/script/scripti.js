	$(document).ready(function()
	{
	    
	    //script for start project button click
	    
	    $(".start-project-button").on("click",function()
	    {
	        location.href="http://pranay.acropolisglobal.com/Acropolis/company-page/enquire-now.html";
	    })
	    //script for mobile menu top nav 
	    
	    $(".mobile-menu-toggle-button").on("click",function()
	    {
	        var display=$(".mobile-menu-overall-container").css("display");
	        console.log(display);
	       if(display === "none")
	       {
	           $($(".mobile-menu-toggle-button").find("i")).attr("class","fa fa-times");
	           $(".mobile-menu-overall-container").slideDown();
	           	         $(".mobile-menu-container.main-page").slideDown(300);
	       }
	       else
	       {
	           $($(".mobile-menu-toggle-button").find("i")).attr("class","fa fa-align-justify");
	             $(".mobile-menu-overall-container").slideUp(300);
	       }
	       
	    })
	    
	    //script for back button
	    
	    $(".industry-menu-back-button,.company-menu-back-button,.partnership-menu-back-button,.offering-menu-back-button").on("click",function(e)
	    {
	        e.preventDefault();
	        console.log("Back Button Is Clicked");
	         $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.main-page").show();
	        
	    });
	    $(".expertise-service-menu-back-button,.enterprise-service-menu-back-button,.process-menu-back-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.offering-page").show();
	        
	    })
	    
	    
	    //script for offering menu button 
	    $(".offering-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.offering-page").show();
	    });
	       //script for expertise menu button 
	    $(".expertise-service-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.expertise-page").show();
	    });
	     //script for enterprise menu button 
	    $(".enterprise-service-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.enterprise-page").show();
	    });
	    //script for process menu button 
	    $(".process-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.process-page").show();
	    });
	    
	    //script for industry menu button
	       $(".industry-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.industries-page").show();
	        console.log("Industry Menu");
	    });
	     //script for partnership menu button
	       $(".partnership-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.partnership-page").show();
	    });
	     //script for company menu button
	       $(".company-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.company-page").show();
	    });
	    
	    
	    //script for footer fixed section
	    
	    $(".up-button").on("click",function()
	    {
	        var height=parseFloat($($(this).parent()).css('height'));
	        if(height === 40)
	        {
	        $($(this).find("i")).attr('class','fa fa-times');
	        $($(this).find(".icon-text p")).text("Close");
	        }
	        else
	        {
	        $($(this).find("i")).attr('class','fa fa-caret-up');
	        $($(this).find(".icon-text p")).text("Open");
	        }
	        
	        console.log(height);
	        $(".live-chat").toggleClass("height-200");
	    });
	    $(".live-chat-component").hover(function()
	    {
	        $(this).css("background-color","green");
	        $($(this).find(".icon-text")).attr("width","50%");
	          $($(this).find(".icon-text")).css("display","block");
	        
	    },function()
	    {
	         $(this).css("background-color","transparent");
	         $($(this).find(".icon-text")).attr("width","0%");
	          $($(this).find(".icon-text")).css("display","none");
	    })
//script for our services section 

$(".service-list>li").on("click",function()
{
    console.log("services list is clicked");
        $(".service-list>li").removeClass("active");
    $(this).addClass("active");

})

//script for more-solution-button 
$(".more-solution-button").on("click",function()
{
    $(".wearable-solution-box-container").toggle();
})

//script for getting random industry

var get_random_industry=function()
{
   var random_industry=Math.floor(Math.random() * 10);
   var current_industry=$(".industry-icon").get(random_industry);
   $(".industry-icon").removeClass("active");
   $(current_industry).addClass("active");
}

//get country code by selecting country name 

$(".country-code-flag").on("change",function()
{
    console.log("country is changed");
    console.log($(this.options[this.selectedIndex]).attr('value'));
    var country_code=$(this.options[this.selectedIndex]).attr('cunt_code');
    $(".country-code-text-value").val(country_code);
})
setInterval(get_random_industry,3000);



        var type_text=["Web Development","Mobile Develoment","Digital Marketing","Blockchain Technology"];
        var index_of_typing_text=0;
        var hero_banner_title=$(".hero-banner-title");
        var name="David";
        var email="hello@acroplis.com";
        var phone_number="909000909";

        $(window).on("scroll",function(e)
        {
            if($(this).scrollTop() > 20)
            {
                $(".top-nav").addClass("fixed-nav-bar");
                $(".estimate-product").addClass("background-green");
            }
            else
            {
                 $(".top-nav").removeClass("fixed-nav-bar"); 
                  $(".estimate-product").removeClass("background-green");
            }
        })
		$(".dropdown").hover(function()
		{
$($(this).find(".dropdown-content-services")).show();
		},function()
		{
$($(this).find(".dropdown-content-services")).hide();
		});
        var split_text="";
        var set_split_text=function()
        {
            split_text=type_text[index_of_typing_text].split("");
            
        }
        var increase_split_index=function(){
            index_of_typing_text=index_of_typing_text+1;
            if(index_of_typing_text >= type_text.length)
                {
                    index_of_typing_text=0;
                }
        }
        var clear_screen=function()
        {
            $(".hero-banner-title").html("");
          
        }
         var h1=$(".hero-banner-title");
        var index=0;
        set_split_text();
        var typing_interval=function(){
            var typing=setInterval(function()
                          {
            
            h1.append(split_text[index]);
            index=index+1;
            if(index > split_text.length)
                {
                  index=0;
                    clear_screen();
                    increase_split_index();
                    set_split_text();
                    
                        
                        
                }

        },300)
        };
        typing_interval();
        //add typing animation in name value of form 
        
        var split_name="",split_email="",split_phone_number="";
        var name_index=0,email_index=0,phone_number_index=0;
          split_name=name.split("");
          split_email=email.split("");
          split_phone_number=phone_number.split("");
        var spilt_name_text=function()
        {
          
            var current_text=split_name[name_index];
            
           var previous_value=$("input[name='name']").attr("placeholder");
           $("input[name='name']").attr("placeholder",previous_value+current_text);
           
            increase_name_index();
            
            
            
        }
        var increase_name_index=function()
        {
            name_index=name_index+1;
            if(name_index > split_name.length)
            {
                name_index=0;
                clear_name_placeholder();
            }
        }
         var spilt_email_text=function()
        {
          
            var current_text=split_email[email_index];
           var previous_value=$("input[name='email']").attr("placeholder");
           $("input[name='email']").attr("placeholder",previous_value+current_text);
           
            increase_email_index();
            
            
            
        }
         var spilt_phone_number_text=function()
        {
          
            var current_text=split_phone_number[phone_number_index];
           var previous_value=$("input[name='phone-number']").attr("placeholder");
           $("input[name='phone-number']").attr("placeholder",previous_value+current_text);
           
            increase_phone_number_index();
            
            
            
        }
        var increase_email_index=function()
        {
            email_index=email_index+1;
            if(email_index > split_email.length)
            {
                email_index=0;
                clear_email_placeholder();
            }
        }
        var increase_phone_number_index=function()
        {
            phone_number_index=phone_number_index+1;
            if(phone_number_index > split_phone_number.length)
            {
                phone_number_index=0;
                clear_phone_number_placeholder();
            }
        }
        var clear_name_placeholder=function()
        {
            $("input[name='name']").attr("placeholder","");
            
        }
        var clear_email_placeholder=function()
        {
            $("input[name='email']").attr("placeholder","");
            
        }
        var clear_phone_number_placeholder=function()
        {
            $("input[name='phone-number']").attr("placeholder","");
            
        }
        
        clear_name_placeholder();
        clear_email_placeholder();
        clear_phone_number_placeholder();
        var name_interval=setInterval(spilt_name_text,400);
        $("input[name='name']").on("click",function()
        {
            clearInterval(name_interval);
            clear_name_placeholder();
        });
         var email_interval=setInterval(spilt_email_text,400);
        $("input[name='email']").on("click",function()
        {
            clearInterval(email_interval);
            clear_email_placeholder();
        });
         var phone_number_interval=setInterval(spilt_phone_number_text,400);
        $("input[name='phone-number']").on("click",function()
        {
            clearInterval(phone_number_interval);
            clear_phone_number_placeholder();
        })
        
        //script for success stories 
        
        $(".aura-web-studio").on("click",function()
                             {
            var translate_value=-438*1;
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-sample-image img").attr("src","assets/img/success-story/aurawebstudio.png");
            $(".success-stories-list li").removeClass("active");
            $(this).addClass("active");
        });
          $(".sentho").on("click",function()
                             {
            var translate_value=-438*2;
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").removeClass("active");
            $(this).addClass("active");
        });
          $(".renaissance").on("click",function()
                             {
            var translate_value=-438*3;
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").removeClass("active");
            $(this).addClass("active");
        });
          $(".ccc").on("click",function()
                             {
            var translate_value=-438*4;
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").removeClass("active");
            $(this).addClass("active");
        });
          $(".bharatphoton").on("click",function()
                             {
            var translate_value=-438*0;
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
              $(".success-stories-list li").removeClass("active");
            $(this).addClass("active");
        });
        $(".happy-clients .carousel-indicators li").on("click",function()
                                                      {
             $(".happy-clients .carousel-indicators li").removeClass("active");
            $(this).addClass("active");
             $(".success-stories-list li").removeClass("active");
        
            $(this).addClass("active");
        })
        
        /* Add a focus event listener to the input type="email" */
        /*contact form on submit*/
        $("[name='contact-form']").on("submit",function(e)
        {
            e.preventDefault();
            $(".loading-container").show();
            
        var data={
        name:$(".name").val(),
        email:$(".email").val(),
        country_code_flag:$(".country-code-flag").val(),
        country_code:$(".country-code").val(),
        phone_number:$(".phone-number").val(),
        message:$(".message").val(),
        project_budget:$(".project-budget option:selected").text()
        };
        console.log(data);
        $.ajax({
            type:"post",
            url:"http://pranay.acropolisglobal.com/Acropolis/sendMail.php",
            data:data,
            success:function(data)
            {
            console.log(data);
            $(".loading-container").hide();
            $("#myModal").modal('show');
            $(".name").val(""),
            $("email").val(""),
            $(".phone-number").val(),
            $(".message").val()
            }
        })
        
        
        
        
        
        });
    
        
        /*enquire form on submit*/
        
        $("[name='enquire-form']").on("submit",function(e)
        {
            e.preventDefault();
            $(".loading-container").show();
            
            var data={
                 name:$(".name").val(),
                mobile:$(".mobile").val(),
                relation_with_hr:$(".relation-with-hr option:selected").text(),
                project_budget:$(".project-budget option:selected").text(),
                email:$(".email").val(),
                website:$(".website").val(),
                company:$(".company").val(),
                describe:$(".describe").text()
            };
            console.log(data);
            $.ajax({
                type:"post",
                url:"http://pranay.acropolisglobal.com/Acropolis/enquireMail.php",
                data:data,
                success:function(data)
                {
                    console.log(data);
                     $(".loading-container").hide();
                     $("#myModal").modal('show');
                    $(".name").val(""),
                    $(".mobile").val(""),
                    $(".email").val(""),
                    $(".website").val(""),
                    $(".company").val("")
                }
               
            })
            
        });
     /*enquire form on submit*/
     
      /*current opening on submit*/
     
             $("[name='apply-form']").on("submit",function(e)
             {
               e.preventDefault();
               $("#myModalApply").modal('hide');
               $(".loading-container").show();
               
               var data={
                   name:$(".name").val(),
                   email:$(".email").val(),
                   title:$(".post-title").val(),
                   notice:$(".notice-period").val(),
                   experience:$(".experience").val(),
                   file:$(".file").val(),
                   message:$(".message").val()
                 };
                 
                 
            console.log(data);     
               $.ajax({
                   type:"post",
                   url:"http://pranay.acropolisglobal.com/Acropolis/applyMail.php",
                   data:data,
                   success:function()
                   {
                    console.log(data);
                    $(".loading-container").hide();
                     $("#myModalMessage").modal('show');
                    $(".name").val(""),
                    $(".email").val(""),
                    $(".post-title").val(""),
                    $(".notice-period").val(""),
                    $(".experience").val("");
                    $(".file").val(""),
                    $(".message").val("")
                       
                   }
                   
               })
     
              });
     
    /*current opening on submit*/ 
    
        
});
