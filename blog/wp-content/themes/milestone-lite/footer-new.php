<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Milestone Lite
 */
?>
<!-- opening of footer section -->
<div class="row footer-container">
      <div class="col-md-12 footer">
          
                  <div class="col-md-6 col-xs-12 col-sm-6 footer-logo">
                  <a href="https://www.acropolisinfotech.com"><img src="../assets/img/acropolis-footer.png" alt="Acropolis Infotech" title="Acropolis Infotech"></a>
                  
                  </div>
                    <div class="clearfix visible-xs"></div>
                  
                  <div class="col-md-6 col-sm-6 col-xs-12 footer-subscribe">
                    <form class="contact" name="contact-form" action="#" method="poost">
                    <input type="text" placeholder="Enter your email address" class="address-button" value="" required="">
                    <button class="footer-subscribe-button" type="button">Subscribe</button>
                </form>
                    
                  </div>

                  
          
          <div class="col-md-12 pd-0-0">
         
          <div class="col-md-2  col-xs-6 pdt-40">
              <h5 class="footer-link-title">Company</h5>
            <ul class="list footer-list">
              <li><a href="../company-page/company-overview.html">Company Overview</a></li>
              <li><a href="../company-page/path-finder.html">Path Finders</a></li>
              <li><a href="../company-page/client-testimonial.html">Client Testimonials</a></li>
              <li><a href="../company-page/faq.html">FAQs</a></li>
              <li><a href="../company-page/contact-us.html">Contact Us</a></li>
            </ul>
          </div>
          
          
           <div class="col-md-2  col-xs-6 pdt-40">
               <h5 class="footer-link-title">Services</h5>
            <ul class="list footer-list">
              <li><a href="../web-development.html">Web Development</a></li>
              <li><a href="../mobile-app-development.html">Mobile App Development</a></li>
              <li><a href="../front-end-technology.html">Frontend Development</a></li>
              <li><a href="../chatbot.html">Chatbot Development</a></li>
              <li><a href="../dedicated-development-team.html">Hire Dedicated Developer</a></li>
            </ul>
          </div>
           <div class="clearfix visible-xs"></div>
          
          
           <div class="col-md-2  col-xs-6 pdt-40">
               <h5 class="footer-link-title">Insights</h5>
            <ul class="list footer-list">
              <li><a href="../blog">Blog</a></li>
              <li><a href="../company-page/case-studies.html">Case Studies</a></li>
              <li><a href="../portfolio">Portfolio</a></li>
              <li><a href="../company-page/our-infrastructure.html">Our Infrastructure</a></li>
              <li><a href="../company-page/our-values.html">Our Values</a></li>
            </ul>
          </div>
          
          
           <div class="col-md-2 col-xs-6 pdt-40">
               <h5 class="footer-link-title">Industries</h5>
            <ul class="list footer-list">
              <li><a href="../industries-page/healthcare.html">Healthcare</a></li>
              <li><a href="../industries-page/education.html">Education/eLearning</a></li>
              <li><a href="../industries-page/social-networking.html">Social Networking</a></li>
              <li><a href="../industries-page/eCommerce.html">eCommerce</a></li>
              <li><a href="../industries-page/retail.html">Retail</a></li>
               
            </ul>
          </div>
           <div class="clearfix visible-xs"></div>
           <div class="col-md-2 col-xs-6 pdt-40">
               <h5 class="footer-link-title">Career</h5>
            <ul class="list footer-list">
              <li><a href="../career-page/overview.html">Career Overview</a></li>
              <li><a href="../career-page/current-opening.html">Current Opening</a></li>
              <li><a href="#">Life At Acropolis</a></li>
            </ul>
          </div>
           <div class="col-md-2 col-xs-6 pdt-40">
               <h5 class="footer-link-title">Trending</h5>
            <ul class="list footer-list">
              <li><a href="../iot.html">IoT</a></li>
              <li><a href="../blockchain.html">Blockchain</a></li>
              <li><a href="../vr.html">AR/VR</a></li>
              <li><a href="../progressive-web-app.html">Progressive Web Apps</a></li>
              <li><a href="#">Machine Learning</a></li>
            </ul>
          </div>
          </div>
        <div class="col-md-12 align-center copyright-social pd-30-0">
            <div class="col-md-4 col-sm-6 col-xs-12 footer-copyright-container pd-0-0">
                 <p class="copyright-text">Copyright © Acropolis Infotech (P) Limited | All Rights Reserved</p>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-12  privacy-policy-container">
                <a href="../privacy-policy.html">NDA  Privacy Policy</a>
                <a href="../term-of-use.html">| Term of Use</a>
                <a href="../sitemap.html">| Sitemap</a>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12 footer-social-list-container pd-0-0">
            <ul class="footer-social-list list-inline">
                <li class="list-inline-item"><a target="_blank" href="https://www.facebook.com/acropolisinfotechprivatelimited/"><i class="fa fa-facebook"></i></a></li>
                 <li class="list-inline-item"><a target="_blank" href="https://twitter.com/acropolis_info"><i class="fa fa-twitter"></i></a></li>
                  <li class="list-inline-item"><a target="_blank" href="https://www.instagram.com/acropolis.infotech/"><i class="fa fa-instagram"></i></a></li>
                   <li class="list-inline-item"><a target="_blank" href="https://www.linkedin.com/company/acropolis-infotech?originalSubdomain=in"><i class="fa fa-linkedin"></i></a></li>
                    <li class="list-inline-item"><a target="_blank" href="https://www.pinterest.com/acropolis_info"><i class="fa fa-pinterest"></i></a></li>
                     <li class="list-inline-item"><a target="_blank" href="https://www.youtube.com/channel/UC7HKPJviQN3F8zzq0YgX4FQ"><i class="fa fa-youtube"></i></a></li>
            </ul>
            </div>
        </div>
       
      </div>
    </div>
    <!-- closing of footer section -->
<?php wp_footer(); ?>
<script type="text/javascript">
$(document).ready(function()
{
    $(".dropdown").hover(function()
		{
$($(this).find(".dropdown-content-services")).show();
		},function()
		{
$($(this).find(".dropdown-content-services")).hide();
		});
		
});
</script>
</body>
</html>