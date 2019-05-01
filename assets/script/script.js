	$(document).ready(function()
	{
	    //script for hiring model animation 
	    
	    
	    
var setHiringProcess=function()
{
    let currentDiv=$(".hiring-process").find(".hiring-box.active");
    let index=$(".hiring-box").index(currentDiv);
        if( index <= 0)
        {
                               $(".hiring-box-division").addClass("transition");
                    $($($(".hiring-process > div").get(index+1)).find(".hiring-box-division")).addClass("active");
                    $($(".hiring-process > div").get(index+1)).addClass("active");
         
        $(".hiring-process > div").removeClass("active");
         $($(".hiring-process > div").get(index+1)).addClass("active");
        }
    if(index > 0 & index < 4)
    {
        $($($(".hiring-process > div").get(index+1)).find(".hiring-box-division")).addClass("active");
        $(".hiring-process > div").removeClass("active");
         $($(".hiring-process > div").get(index+1)).addClass("active");
    }
    else if(index >= 4)
    {
                  $(".hiring-box-division").removeClass("transition");
                  $(".hiring-process > div").removeClass("active");
          $(".hiring-box-division").removeClass("active");
    }
}
setInterval(setHiringProcess,3000);
	    
	    //script for engagement model widget 
	    
	    
$(".full-time-hiring-container,.8-hours").hover(function()
{
    $(".8-hours").addClass("active");
    $($(".box-three .value-container").get(0)).addClass("active");
      $($(".box-four .value-container").get(0)).addClass("active");
        $($(".box-five .value-container").get(0)).addClass("active");
},function()
{
     $(".8-hours").removeClass("active");
     $($(".box-three .value-container").get(0)).removeClass("active");
     $($(".box-four .value-container").get(0)).removeClass("active");
        $($(".box-five .value-container").get(0)).removeClass("active");
})
$(".part-time-hiring-container,.4-hours").hover(function()
{
    $(".4-hours").addClass("active");
    $($(".box-three .value-container").get(1)).addClass("active");
      $($(".box-four .value-container").get(0)).addClass("active");
        $($(".box-five .value-container").get(0)).addClass("active");
},function()
{
     $(".4-hours").removeClass("active");
     $($(".box-three .value-container").get(1)).removeClass("active");
     $($(".box-four .value-container").get(0)).removeClass("active");
        $($(".box-five .value-container").get(0)).removeClass("active");
})
$(".hourly-hiring-container,.hours-basis").hover(function()
{
    $(".hours-basis").addClass("active");
    $($(".box-three .value-container").get(2)).addClass("active");
      $($(".box-four .value-container").get(0)).addClass("active");
        $($(".box-five .value-container").get(0)).addClass("active");
},function()
{
     $(".hours-basis").removeClass("active");
     $($(".box-three .value-container").get(2)).removeClass("active");
     $($(".box-four .value-container").get(0)).removeClass("active");
        $($(".box-five .value-container").get(0)).removeClass("active");
})
	    
	        //script for firefox browser to support whatsapp api
    
    if(navigator.userAgent.toLowerCase().indexOf('firefox') !== -1 || navigator.userAgent.search("Safari") >= 0 || navigator.userAgent.toLowerCase().indexOf('Safari') !== -1) {
               //script run only on firefox and safari
               $(".icon-image.whatsapp-widget a").attr("href","https://web.whatsapp.com/send?phone=919999876594")
            }
            
            
            
            
	    function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
	   var cookie_status=getCookie("status") //check the available cookies
	   if(cookie_status.length) //if cookies found
	   {
	      
	       $(".cookies-banner-container").hide();
	   }
	   else //if cookies not found
	   {
	      
	       $(".cookies-banner-container").show();
	   }
	   
	   $(".allow-all").on("click",function(e)
	   {
	       e.preventDefault();
	       let curDate=new Date();
	       let utcDate=curDate.getUTCDate();
	       
	       $(".cookies-banner-container").hide();
	       document.cookie="status=allow; path=/; ";
	   });
	     $(".cookies-close").on("click",function(e)
	   {
	       e.preventDefault();
	       let curDate=new Date();
	       let utcDate=curDate.getUTCDate();
	       
	       $(".cookies-banner-container").hide();
	       document.cookie="status=notAllow; path=/; ";
	   });
	   
	       $(".scrolling-top-button").on("click",function(e)
    {
        let top=0;
         $('html, body').animate({
        scrollTop:top
      }, 1000, function(){
   
})
    });
    
    
    //script for button tab text
    
    $(".tab-button").on("click",function()
    {
        $(".tab-button").removeClass("active");
        $(this).addClass("active");
        let index=parseFloat($(this).index());
        $(".button-content").removeClass("active");
        $($(".button-content").get(index)).addClass("active");
    })
    
    
    /* script for solution button and solution title component */
    
    $(".solution-button").on("click",function()
    {
    $(".solution-button").removeClass("active");
    $(this).addClass("active");
        let index=parseFloat($(this).index());
        $(".solution-title,.solution-description,.solution-link").removeClass("active");
        $($(".solution-title").get(index)).addClass("active");
               $($(".solution-description").get(index)).addClass("active");
                      $($(".solution-link").get(index)).addClass("active");
        
    })
    $(".up-button").hover(function()
    {
       $(".scrolling-top-button").addClass("more-left"); 
    },function()
    {
          $(".scrolling-top-button").removeClass("more-left"); 
    })
	    var new_scrolling_value=[];
	    var service_list=$(".q_done_mrkr");
	    
	    //array for animation-text-heading
	    var animation_text_heading=["Design","Development","Creative"];
	    var animation_text_sub_heading=["One","Two","Three"];
	    var character=[];
	    
	    //adding animtion in animation text
	    
	    //step one select oen input from animation text heading split them and then add one by one in animation text heading
	    var animation_count=0;
	    
	    
	    //script for scrolling button section
        for(let i=0;i<service_list.length;i++)
        {
           let offset=$(service_list[i]).offset().left;
           new_scrolling_value.push(offset);
        }
        for(let i=0;i<new_scrolling_value.length;i++)
        {
          
        }
	    
	    
	          var list_of_section=$("body").find(".page-section");
    console.log(list_of_section);
    for(let i=0;i<list_of_section.length;i++)
    {
        let id_text=$(list_of_section[i]).attr("id");
        $(".scrolling-list").append("<li>"+id_text+"</li>");
        $(".hero-banner-box-list").append("<li><a href='#'>"+id_text+"</a></li>");
        $(".hero-banner-box-list li:nth-child(1)").addClass("active");
    }
    
    $(".scrolling-button-container").on("mouseover",function()
    {
        $(".scrolling-list-container").show();
    });
     $(".scrolling-button-container").on("mouseout",function()
    {
            $(".scrolling-list-container").hide();
    });
    
    
    /* $(".scrolling-button").on("touchstart",function(e)
    {
        e.stopPropagation();
        $(".scrolling-list-container").toggle();
        console.log("Toggle");
    });
    $(".scrolling-button-container").on("touchstart",function(e)
    {
                alert("Parent");
        return false;
    })
    */
    
    
    $(".scrolling-list li,.hero-banner-box-list li a").on("click",function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        let text=$(this).text();
        let element_id="#"+text;
        console.log(element_id);
        let top=parseFloat(($(element_id).offset().top)-50);
        console.log(top);
         $('html, body').animate({
        scrollTop:top
      }, 1000, function(){
   
})
    });
    /* 
     $(".scrolling-list li,.hero-banner-box-list li a").on("touchstart",function(e)
    {
        e.preventDefault();
        e.stopPropagation();
        let text=$(this).text();
        let element_id="#"+text;
        console.log(element_id);
        let top=parseFloat(($(element_id).offset().top)-50);
        console.log(top);
         $('html, body').animate({
        scrollTop:top
      }, 1000, function(){
   
})
    });
    */
    $(".hero-banner-box-list li").on("click",function()
    {
        $(".hero-banner-box-list li").removeClass("active");
        $(this).addClass("active");
    })
	    var industry_hover_effect_list=["tech_web()","tech_mobile()","tech_open_source()","tech_cloud()","tech_trending()","tech_api()","tech_consultancy()","tech_hire()"]
	    window.onload=function()
	    {
	        $(".loading-container-speed").fadeOut(2000);
	    } 

	    
	    //make address-button width dynamic
	    
	       var key_count=0;//variable for key count
	       
	       var toggle_count=1;//variable for toggle count in mobile device

    
    var email_box_width=parseFloat($(".address-button").css("width")); //variable for email-box-width
    
    
    $(".address-button").on("keydown",function(e)
                  {
        
        //STEP ONE ************ Check whether user press any keys other than backspace keys  ***********
        
        
        //Code for backspace keys ***********************
        
        if(e.keyCode == 8 || e.which == 32 || e.key == 32 || e.code == 32 || e.charCode == 8)
            {
                
                key_count-- //decrease the key code by one
                
                if(key_count < 0)
                    {
                        key_count=0; //if key code value less than zero then fix it to 0
                    }
                else if(key_count > 30) //if key code value greater than 20
                            {
                        
                    email_box_width=email_box_width-10; //decrease width by 10px;
                $(".address-button").css("width",email_box_width+"px");
                       console.log($(".address-button").css("width"));
                            }
                
                    
            }
        // End of backspace block ***********************************
        
        //Other keys section comes here *********************************************
        
        else{
            
        key_count++;//increase the key count
            
               if(key_count >= 30)  //if key code greater than 20 or equal too
            {
               
                 if(e.keyCode == 8 || e.which == 32 || e.key == 32 || e.code == 32 || e.charCode == 8) //if backspace button is pressed
                    {
                        if(key_count > 20) //if key count greater than 20
                            {
                        
                    email_box_width=email_box_width-10; //reduce width by 10
                $(".address-button").css("width",email_box_width+"px");
                       console.log($(".address-button").css("width"));
                            }
                    }
                else{ //if key count less than 20
                email_box_width=email_box_width+10; //increase width by 10
                if(email_box_width < 700) //check width reaches the max-width limit
                    {
                        //if max width limit is not reached
                $(".address-button").css("width",email_box_width+"px");
                console.log($(".address-button").css("width"));
                    }
                    
                    else{
                        console.log("limit max"); //if width reaches to max limit
                    }
                }
                
               
            }
        }
        console.log(key_count);
        
        
    })

	    
        
	    
	    var img_index=1;
	    //script for start project button click
	    
	   
	    //script for mobile menu top nav 
	    
	    $(".mobile-menu-toggle-button").on("click",function()
	    {
	        console.log(toggle_count);
	        
	       if(toggle_count % 2 != 0)
	       {
	           $($(".mobile-menu-toggle-button").find("i")).attr("class","fa fa-times");
	           $(".mobile-menu-overall-container").slideDown();
	           	         $(".mobile-menu-container.main-page").slideDown(300);
	           	         toggle_count++;
	       }
	       else
	       {
	           $($(".mobile-menu-toggle-button").find("i")).attr("class","fa fa-align-justify");
	             $(".mobile-menu-overall-container").slideUp(300);
	             toggle_count++
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
	     $(".about-us-menu-back-button,.our-culture-menu-back-button,.insight-menu-back-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.company-page").show();
	        
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
	    //script for about us menu button
	      $(".about-us-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.about-us").show();
	    });
	    //script for our culture menu button
	      $(".our-culture-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.our-culture").show();
	    });
	    //script for insight menu button
	      $(".insight-menu-button").on("click",function(e)
	    {
	        e.preventDefault();
	        $(".mobile-menu-container").hide();
	        $(".mobile-menu-container.insight").show();
	    });
	    
	    
	    //script for footer fixed section
	    
	    $(".up-button").on("click",function(e)
	    {
	        
	        $(".live-chat-component.whatsapp-button,.live-chat-component.msg-button,.live-chat-component.mail-button,.live-chat-component.live-chat-button").slideToggle().promise().then(function()
	        {
	            img_index++;
	            changeImageInLiveChat(img_index);
	        });
	        
	       
	        


	        
	    });
	    var touch_status=2;
	      $(".up-button").on("touchstart",function(e)
	    {
	        if(touch_status%2 == 0)
	        {
	        $(".live-chat-component.whatsapp-button,.live-chat-component.msg-button,.live-chat-component.mail-button,.live-chat-component.live-chat-button").slideUp().promise().then(function()
	        {
	            touch_status++;
	            changeImageInLiveChat(touch_status);
	        });
	        }
	        else
	        {
	                $(".live-chat-component.whatsapp-button,.live-chat-component.msg-button,.live-chat-component.mail-button,.live-chat-component.live-chat-button").slideDown().promise().then(function()
	        {
	            touch_status++;
	            changeImageInLiveChat(touch_status);
	        });
	        }
	        
	       
	        


	        
	    });
	    var changeImageInLiveChat=function(value)
	    {
	        if(value%2 !== 0)
	        {
	            $($(".up-button").find("img")).attr("src","https://www.acropolisinfotech.com/assets/img/footer-widget/chat.png");
	            console.log("Hide");
	            	        $($(".up-button").find(".icon-text p")).text("Live Chat");
	        }
	        else
	        {
	            $($(".up-button").find("img")).attr("src","https://www.acropolisinfotech.com/assets/img/cancel.png");
	            console.log("Open");
	            	        $($(".up-button").find(".icon-text p")).text("Close");
	        }

	    }
	    
	    $(".icon-image").hover(function()
	    {
	        $(".live-chat").css("width","160px");
	      $($(this).parent()).css("background-color","#fff");
	       $($(this).parent()).css("box-shadow","1px 1px 10px #000");
	        $($($(this).parent()).find(".icon-text")).css("background-color","#fff");
	        $($($(this).parent()).find(".icon-text")).attr("width","70%");
	          $($($(this).parent()).find(".icon-text")).css("display","block");
	          $(this).css("box-shadow","0px 0px 0px #000");
	        
	    },function()
	    {
	         $(".live-chat").css("width","auto");
	         $($(this).parent()).css("background-color","transparent");
	         $($(this).parent()).css("box-shadow","0px 0px 0px #fff");
	        $($($(this).parent()).find(".icon-text")).css("background-color","transparent");
	        $($($(this).parent()).find(".icon-text")).attr("width","0%");
	          $($($(this).parent()).find(".icon-text")).css("display","none");
	          $(this).css("box-shadow","1px 1px 10px #000");
	    });
//script for our services section 

$(".service-list>li").on("click",function()
{
    console.log("services list is clicked");
        $(".service-list>li").removeClass("active");
    $(this).addClass("active");

});
$(".service-list-container-list li").on("mouseover",function()
{
        $(".q_done_mrkr").removeClass("active");
    $($(this).find(".q_done_mrkr")).addClass("active");

    console.log($(this));
    let index=$(this).index();
       if(index ==0)
    {
        let current_element=$(this);
        console.log(current_element);
         angular.element(current_element).scope().tech_web();
         angular.element(current_element).scope().$apply();
    }
    else if(index ==1)
    {
        let current_element=$(this);
         console.log(current_element);
          angular.element(current_element).scope().tech_mobile();
         angular.element(current_element).scope().$apply();
    }
     else if(index ==2)
    {
         let current_element=$(this);
         console.log(current_element);
          angular.element(current_element).scope().tech_open_source();
         angular.element(current_element).scope().$apply();
    }
     else if(index ==3)
    {
        let current_element=$(this);
         console.log(current_element);
          angular.element(current_element).scope().tech_cloud();
         angular.element(current_element).scope().$apply();
    }
     else if(index ==4)
    {
        let current_element=$(this);
          console.log(current_element);
           angular.element(current_element).scope().tech_trending();
         angular.element(current_element).scope().$apply();
    }
     else if(index ==5)
    {
        let current_element=$(this);
          console.log(current_element);
           angular.element(current_element).scope().tech_api();
         angular.element(current_element).scope().$apply();
    }
     else if(index ==6)
    {
       let current_element=$(this);
          console.log(current_element);
                     angular.element(current_element).scope().tech_consultancy();
         angular.element(current_element).scope().$apply();
    }
     else if(index==7)
    {
         let current_element=$(".service-list-container-list > li").get(index);
          console.log(current_element);
           angular.element(current_element).scope().tech_hire();
         angular.element(current_element).scope().$apply();
    }
    
});
//script for button tab





//script for stats section in web development page 


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
var remove_active_class=null;

setInterval(get_random_industry,3000);

$(".industry-icon").hover(function()
{  
    remove_active_class=setInterval(function()
    {
     $(".industry-icon").removeClass("active");
    },1);
},function()
{
    clearInterval(remove_active_class);
    
})
//get country code by selecting country name 

$(".country-code-flag").on("change",function()
{
    console.log("country is changed");
    console.log($(this.options[this.selectedIndex]).attr('value'));
    var country_code=$(this.options[this.selectedIndex]).attr('cunt_code');
    $(".country-code-text-value").val(country_code);
})


var start_interval_in_industry=setInterval(get_random_industry,3000);

//stop the interval when hover over any industry icon

$(".industry-icon").hover(function()
{
    clearInterval(start_interval_in_industry);
    console.log("hover");
    
},function()
{
})



        var type_text=["Custom Software Development  ","Web Development  ","eCommerce Development  ","Mobile App Development  ","Internet of Things  ","Blockchain Development  ","Artificial Intelligence  ","Augmented Reality  ","Digital Marketing  "];
        var index_of_typing_text=0;
        var hero_banner_title=$(".hero-banner-title");
        var name="David Carlos";
        var email="name@company.com";
        var phone_number="912 345 6789 ";
        var message="Your message here";

        $(window).on("scroll",function(e)
        {
           
             if($(this).scrollTop() > 280)
        {
            $(".scrolling-top-button").show();
            $(".scrolling-list-component").show();
            $(".scrolling-button").addClass("bounce");
        }
        else
        {
             $(".scrolling-list-component").hide();
               $(".scrolling-top-button").hide();
               $(".scrolling-button").removeClass("bounce");
        }
        
            if($(this).scrollTop() > 5)
            {
                $(".top-nav").addClass("fixed-nav-bar");
                
            }
            else
            {
                 $(".top-nav").removeClass("fixed-nav-bar"); 
                 
            }
        });
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
    
        
        var split_name="",split_email="",split_phone_number="",
        split_message="";
        var name_index=0,email_index=0,phone_number_index=0,message_index=0;
          split_name=name.split("");
          split_email=email.split("");
          split_phone_number=phone_number.split("");
          split_message=message.split("");
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
         var spilt_message_text=function()
        {
          
            var current_text=split_message[message_index];
           var previous_value=$("textarea.message").val();
           $("textarea.message").val(previous_value+current_text);
           
            increase_message_index();
            
            
            
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
         var increase_message_index=function()
        {
            message_index=message_index+1;
            if(message_index > split_message.length)
            {
                message_index=0;
                clear_message_value();
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
         var clear_message_value=function()
        {
            $("textarea.message").val("");
            
        }
        
        clear_name_placeholder();
        clear_email_placeholder();
        clear_phone_number_placeholder();
        clear_message_value();
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
        var message_interval=setInterval(spilt_message_text,400);
        $("textarea.message").on("click",function()
        {
            clearInterval(message_interval);
            clear_message_value();
        })
               //script for success stories 
        //typescript code for success stories
class SuccessStories {
    constructor() {
        this.sliding_amount = 480;
        this.index_amount = 0;
        this.sliding_button_amount= 0;
        this.set_slide_for_one = function () {
            this.sliding_amount = 0;
            this.index_amount=0;
            this.sliding_button_amount=0;
            return this.sliding_amount;
        };
        this.set_slide_for_two = function () {
            this.sliding_amount = 480;
            this.index_amount = 1;
            this.sliding_button_amount=150*1;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 10;
            return this.sliding_amount;
        };
        this.set_slide_for_three = function () {
            this.sliding_amount = 480;
            this.index_amount = 2;
            this.sliding_button_amount=150*2;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 20;
            return this.sliding_amount;
        };
        this.set_slide_for_four = function () {
            this.sliding_amount = 480;
            this.index_amount = 3;
            this.sliding_button_amount=150*3;
            
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 30;
            return this.sliding_amount;
        };
        this.set_slide_for_five = function () {
            this.sliding_amount = 480;
            this.index_amount = 4;
            this.sliding_button_amount=150*4;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 40;
            return this.sliding_amount;
        };
         this.set_slide_for_six = function () {
            this.sliding_amount = 480;
            this.index_amount = 5;
            this.sliding_button_amount=150*5;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 50;
            return this.sliding_amount;
        };
         this.set_slide_for_seven = function () {
            this.sliding_amount = 480;
            this.index_amount = 6;
            this.sliding_button_amount=150*6;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 60;
            return this.sliding_amount;
        };
        
        this.set_slide_for_eight = function () {
            this.sliding_amount = 480;
            this.index_amount = 7;
            this.sliding_button_amount=150*7;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 80;
            return this.sliding_amount;
        };
        this.set_slide_for_nine = function () {
            this.sliding_amount = 480;
            this.index_amount = 8;
            this.sliding_button_amount=150*8;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 100;
            return this.sliding_amount;
        };
        this.set_slide_for_ten = function () {
            this.sliding_amount = 480;
            this.index_amount = 9;
            this.sliding_button_amount=150*9;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 110;
            return this.sliding_amount;
        };
        this.set_slide_for_eleven = function () {
            this.sliding_amount = 480;
            this.index_amount = 10;
            this.sliding_button_amount=150*10;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 120;
            return this.sliding_amount;
        };
        this.set_slide_for_twelve = function () {
            this.sliding_amount = 480;
            this.index_amount = 11;
            this.sliding_button_amount=150*11;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 130;
            return this.sliding_amount;
        };
        this.set_slide_for_thirteen = function () {
            this.sliding_amount = 480;
            this.index_amount = 12;
            this.sliding_button_amount=150*12;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 150;
            return this.sliding_amount;
        };
         this.set_slide_for_fourteen = function () {
            this.sliding_amount = 480;
            this.index_amount = 13;
            this.sliding_button_amount=150*13;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 160;
            return this.sliding_amount;
        };
       this.set_slide_for_fifteen = function () {
            this.sliding_amount = 480;
            this.index_amount = 14;
            this.sliding_button_amount=150*14;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 170;
            return this.sliding_amount;
        };
        this.set_slide_for_sixteen = function () {
            this.sliding_amount = 480;
            this.index_amount = 15;
            this.sliding_button_amount=150*15;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 190;
            return this.sliding_amount;
        };
        this.set_slide_for_seventeen = function () {
            this.sliding_amount = 480;
            this.index_amount = 16;
            this.sliding_button_amount=150*16;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 200;
            return this.sliding_amount;
        };
         this.set_slide_for_eighteen = function () {
            this.sliding_amount = 480;
            this.index_amount = 17;
            this.sliding_button_amount=150*17;
            this.sliding_amount = (this.sliding_amount * this.index_amount) + 250;
            return this.sliding_amount;
        };
    }
    
    get SlidingAmount() {
        return this.sliding_amount;
    }
    set SlidingAmount(value) {
        this.sliding_amount = this.sliding_amount + value;
    }
    get IndexAmount() {
        return this.index_amount;
    }
    set IndexAmount(value) {
        this.index_amount = this.index_amount + value;
    }
}
let my_success_stories = new SuccessStories();





//end of typescript code for success-stories
        
        
        
        
        
        
        
        //code for aura web studio button
               
        $(".success-stories-list .aura-web-studio").on("click",function()
                             {
            var translate_value=-parseFloat(my_success_stories.set_slide_for_one());
            console.log(translate_value);
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+my_success_stories.sliding_button_amount+"px)");
            $(".success-stories-sample-image img").attr("src","assets/img/success-story/aurawebstudio.png");
            $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .aura-web-studio").next()).addClass("next");
            $(this).addClass("active");
            $(".work-sample-container .aura-web-studio").addClass("active");
            
            console.log("Aura web studio");
        });
        
        //code for sentho button
          $(".success-stories-list .arclegal").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_two());
              console.log(translate_value);
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount))+"px)");
            
            
              $(".success-stories-sample-image img").attr("src","assets/img/success-story/sentho.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .arclegal").next()).addClass("next");
            $(".work-sample-container .arclegal").addClass("active");
            console.log("Sentho");
        });
        
        //code for renaissance button
          $(".success-stories-list .renaissance").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_four());
              console.log(translate_value);
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
                       $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
                         $(".success-stories-sample-image img").attr("src","assets/img/success-story/renaissance.png");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .renaissance").next()).addClass("next");
            $(".work-sample-container .renaissance").addClass("active");
        });
        //code for customcare button
          $(".success-stories-list .ccc").on("click",function()
                             {
          var translate_value=-parseFloat(my_success_stories.set_slide_for_six());
           console.log(translate_value);
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-250))+"px)");
                      $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
              $(".success-stories-sample-image img").attr("src","assets/img/success-story/customcare.png");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .customcare").next()).addClass("next");
            $(".work-sample-container .customcare").addClass("active");
        });
        
        //code for bharatphoton button
          $(".success-stories-list .bharatphoton").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_three());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-50))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .bharatphoton").next()).addClass("next");
            $(".work-sample-container .bharatphoton").addClass("active");
        });
        //code for royal enfield button
          $(".success-stories-list .royal-enfield").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_twelve());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-640))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/customcare.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .royal-enfield").next()).addClass("next");
            $(".work-sample-container .royal-enfield").addClass("active");
        });
         //code for sentho button
          $(".success-stories-list .sentho").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_thirteen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-660))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .sentho").next()).addClass("next");
            $(".work-sample-container .sentho").addClass("active");
        });
        
        //code for voltas button
          $(".success-stories-list .voltas").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_seventeen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-857))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/customcare.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .voltas").next()).addClass("next");
            $(".work-sample-container .voltas").addClass("active");
        });
        //code for samsung button
          $(".success-stories-list .samsung").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_fourteen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-740))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .samsung").next()).addClass("next");
            $(".work-sample-container .samsung").addClass("active");
        });
        //code for stringbean button
          $(".success-stories-list .stringbean").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_fifteen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-785))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .stringbean").next()).addClass("next");
            $(".work-sample-container .stringbean").addClass("active");
        });
        //code for renaissance button
          $(".success-stories-list .renaissance").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_sixteen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-825))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .renaissance").next()).addClass("next");
            $(".work-sample-container .renaissance").addClass("active");
        });
        //code for hidesign button
          $(".success-stories-list .hidesign").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_seven());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-280))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .hidesign").next()).addClass("next");
            $(".work-sample-container .hidesign").addClass("active");
        });
         //code for jet Airways
          $(".success-stories-list .jet-airways").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_eight());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-340))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .jet-airways").next()).addClass("next");
            $(".work-sample-container .jet-airways").addClass("active");
        });
        //code for kraft
          $(".success-stories-list .kraft").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_nine());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-380))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .kraft").next()).addClass("next");
            $(".work-sample-container .kraft").addClass("active");
        });
         //code for levis
          $(".success-stories-list .levis").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_ten());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-470))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .levis").next()).addClass("next");
            $(".work-sample-container .levis").addClass("active");
        });
        //code for vodaphone button
          $(".success-stories-list .vodaphone").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_eighteen());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
             $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-950))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .vodaphone").next()).addClass("next");
             $(".work-sample-container .vodaphone").addClass("active");
                             });
             
             
            //code for casio button
          $(".success-stories-list .casio").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_four());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-60))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .casio").next()).addClass("next");
            $(".work-sample-container .casio").addClass("active");
        });
        
          //code for pepsi button
          $(".success-stories-list .pepsi").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_eleven());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-550))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .pepsi").next()).addClass("next");
            $(".work-sample-container .pepsi").addClass("active");
        });
        
          //code for casio button
          $(".success-stories-list .ceat").on("click",function()
                             {
             var translate_value=-parseFloat(my_success_stories.set_slide_for_five());
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+(-(my_success_stories.sliding_button_amount-160))+"px)");
             $(".success-stories-sample-image img").attr("src","assets/img/success-story/bharatphoton.png");
                        $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(this).addClass("active");
                        $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .ceat").next()).addClass("next");
            $(".work-sample-container .ceat").addClass("active");
        });
        $(".happy-clients .carousel-indicators li").on("click",function()
                                                      {
             $(".happy-clients .carousel-indicators li").removeClass("active");
            $(this).addClass("active");
             $(".success-stories-list li").removeClass("active");
        
            $(this).addClass("active");
        })
        
        //script for arrow button container 
                $(".success-stories-list .aura-web-studio").trigger("click",function()
                             {
            var translate_value=-parseFloat(my_success_stories.set_slide_for_one());
            console.log(translate_value);
            $(".work-sample-container .item").css("transform","translateX("+translate_value+"px)");
            $(".success-stories-list li").css("transform","translateX("+my_success_stories.sliding_button_amount+"px)");
            $(".success-stories-sample-image img").attr("src","assets/img/success-story/aurawebstudio.png");
            $(".success-stories-list li ,.work-sample-container .item").removeClass("active");
            $(".work-sample-container .item").removeClass("next");
            $($(".work-sample-container .aura-web-studio").next()).addClass("next");
            $(this).addClass("active");
            $(".work-sample-container .aura-web-studio").addClass("active");
            
            console.log("Aura web studio");
        });
        
        $(".arrow-button-container").on("click",function()
        {
            console.log("arrow-button-clicked");
            let current_index=my_success_stories.index_amount;
            if(current_index === 0)
            {
                $(".success-stories-list .aura-web-studio").trigger("click");
                console.log("second slide");
            }
            else if(current_index === 1)
            {
                 $(".success-stories-list .sentho").trigger("click");
                console.log("third slide");
            }
            else if(current_index === 2)
            {
                 $(".success-stories-list .renaissance").trigger("click");
                console.log("fourth slide");
            }
             else if(current_index === 3)
            {
                 $(".success-stories-list .ccc").trigger("click");
                console.log("fourth slide");
            }
        });
        //scriot for left-arrow
        
        $(".left-arrow").on("click",function()
        {
           
                $(".success-stories-list .bharatphoton").trigger("click");
        })
        
        /* Add a focus event listener to the input type="email" */
        /*contact form on submit*/
    
     //script for testimonial slider
     
     $(".testimonial-arrow-container.left").on("click",function()
     {
        $(".testimonial-container").animate({
            left:"295px"
            
        },2000,function()
        {
            $(".testimonial-box").first().before($(".testimonial-box").last());
            $(".testimonial-container").css("left","-425px");
            
            
        })
     });
     $(".testimonial-arrow-container.right").on("click",function()
     {
       $(".testimonial-container").animate({
            left:"-1160px"
            
        },2000,function()
        {
            $(".testimonial-box").last().before($(".testimonial-box").first());
            $(".testimonial-container").css("left","-425px");
            
            
        })
     });

    
    var count_mail_character=0;
    
    $(".address-button").change(function(e)
    {
        console.log("clicked");
        count_mail_character =count_mail_character+1;
        let width=parseFloat($(this).css("width"));
        console.log(width);
        if(count_mail_character > 45)
        {
            width=width+0.1;
            $(this).css("width",width+"%");
            
            
        }
        
    });
    
    

        
        
});
