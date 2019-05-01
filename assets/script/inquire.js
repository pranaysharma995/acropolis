$(document).ready(function()
{
     
     
     
             //add typing animation in name value of form 
             
                       
          var type_text=["Custom Software Development  ","Web Development  ","eCommerce Development  ","Mobile App Development  ","Internet of Things  ","Blockchain Development  ","Artificial Intelligence  ","Augmented Reality  ","Digital Marketing  "];
        var index_of_typing_text=0;
        var hero_banner_title=$(".hero-banner-title");
        var name="David Carlos";
        var email="name@company.com";
        var phone_number="912 345 6789 ";
        var message="Your message here";
    
        
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
})