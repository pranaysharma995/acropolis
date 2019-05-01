<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div class="container">
 *
 * @package Milestone Lite
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <title>Enterprise Customer Software Development Company | Mobile App | Web App | IT Services</title>
    <link rel="shortcut icon" type="image/png" href="../assets/img/fevicon/fevicon.png"/>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<?php wp_head(); ?>
<style type="text/css">
    .mobile-version{
        display:none;
        
    }
</style>
</head>
<body <?php body_class(); ?>>
   <div class="container-fluid">
       <!-- opening of top nav desktop-version -->
   <div class="row top-nav pd-10-0 desktop-version">
        <!-- opening of logo section -->
        <div class="col-md-4 logo align-center pd-10-0">
        <a href="https://www.acropolisinfotech.com"><img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/logo.png" alt="Acropolis Infotech" title="Acropolis Infotech"></a>
        </div>
        <!-- closing of logo section -->
        <!-- opening of pagelink section -->
        <div class="col-md-8 pagelink pd-0-0 center align-center">
            <ul class="list list-inline  pagelink-list pd-0-0 mg-0-0">
            <li class="pd-15-10 dropdown list-inline-item"><a href="#" class="fz-14 color-black">Offering</a>
            
              <!-- dropdown menu of offering comes here -->
              <div class="dropdown-content-services pd-10-0">
                  <div class="green-filter"></div>
                  <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/particle-background-offering-540.jpg" class="dropdown-background" alt="Background-image">
                  
                <div class="col-md-10 col-md-offset-1 z-index-10">
                  <div class="col-md-4">
                    <h3 class="menu-title">EXPERTISE SERVICES</h3>
                    <div class="col-md-12 services-block">
                       <ul class="list dropdown-list">
                      <li><a href="../web-development.html">Web Apps Development</a></li>
                      <li><a href="../mobile-app-development.html">Mobile Apps development</a></li>
                      <li><a href="../staff-augmentation.html">Staff Augmentation</a></li>
                      <li><a href="../front-end-technology.html">Front End Technologies</a></li>
                      <li><a href="../microsoft-technology.html">Microsoft Technologies</a></li>
                      <li><a href="../iot.html">Internet Of Things(IOT)</a></li>
                      <li><a href="../vr.html">AR/VR</a></li>
                      <li><a href="../cloud.html">Cloud &amp; Devops</a></li>
                      <li><a href="../chatbot.html">Chatbot Development</a></li>
                      <li><a href="../wearable.html">Wearable</a></li>
                      <li><a href="../ai.html">Artificial Intelligence</a></li>
                      <li><a href="../big-data.html">Big Data</a></li>
                      <li><a href="../blockchain.html">Blockchain</a></li>
                      </ul>
                      </div>
                  </div>
                  <div class="col-md-4">
                    <h3 class="menu-title">Enterprise Services</h3>
                    <div class="col-md-12 services-block">
                      <ul class="list dropdown-list">
                      <li><a href="../business-consulting.html">Business Consulting</a></li>
                      <li><a href="../technology-consulting.html">Technology Consulting</a></li>
                      <li><a href="../product-prototype.html">Product Prototyping</a></li>
                      <li><a href="../managed-services.html">Managed Services</a></li>
                             <li><a href="enterprise-mobility.html">Enterprise Mobility</a></li>
                      <li><a href="../product-engineering.html">Product Engineering</a></li>
                      <li><a href="../quality-assurance.html">Quality Assurance &amp; Testing</a></li>
                       <li><a href="../digital-transformation.html">Digital Transformation</a></li>
                      <li><a href="../product-maintainance.html">Maintainance &amp; Support</a></li>
                      <li><a href="../system-integration.html">Enterprise System Integration</a></li>
                      <li><a href="../cloud-integration.html">Cloud Integration</a></li>
                      <li><a href="../dashboard.html">It Metrix And Dashboard</a></li>
                    </ul>
                  </div>

                  </div>
                  <div class="col-md-4">
                    <h3 class="menu-title">PROCESS</h3>
                    <div class="col-md-12 services-block">


                    <ul class="list dropdown-list">
                      <li><a href="development-methodlogy.html">Development Methodlogy</a></li>
                      <li><a href="../delivery-model.html">Delivery Models</a></li>
                      <li><a href="../pricing-model.html">Pricing Models</a></li>
                    </ul>
                  </div>
                  </div>
              </div>
            </div>
            </li><li class="pd-15-10 dropdown list-inline-item"><a href="#" class="fz-14 color-black">Industries</a>

              <!-- dropdown menu comes here -->
              <div class="dropdown-content-services pd-10-0 ">
                  <div class="green-filter"></div>
                  
                                      <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/particle-background-industries-242.jpg" class="dropdown-background" alt="Background-image" />

                <div class="col-md-10 col-md-offset-1 z-index-10">
                    <h3 class="menu-title color-white absolute-index">industries</h3>
                  <div class="col-md-4">
                       <ul class="list dropdown-list">
                      <li><a href="../industries-page/healthcare.html">Healthcare</a></li>
                      <li><a href="../industries-page/education.html">Education</a></li>
                      <li><a href="../industries-page/social-networking.html">Social Networking</a></li>
                      <li><a href="../industries-page/retail.html">Retail</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4">
                      <ul class="list dropdown-list">
                      <li><a href="../industries-page/manufacturing.html">Manufacturing</a></li>
                      <li><a href="../industries-page/eCommerce.html">eCommerce</a></li>
                      <li><a href="../industries-page/energy.html">Energy</a></li>
                      <li><a href="../industries-page/travel-and-hospitality.html">Travel &amp; Hospitality</a></li>
                    </ul>
                  </div>
                  <div class="col-md-4">


                    <ul class="list dropdown-list">
                      <li><a href="../industries-page/real-estate.html">Real Estate</a></li>
                      <li><a href="../industries-page/media-and-entertainment.html">Media &amp; Entertainment</a></li>
                      <li><a href="../industries-page/logistics-and-distribution.html">Logistics &amp; Distribution</a></li>
                       <li><a href="../industries-page/construction.html">Construction</a></li>
                    </ul>
                  </div>
                  </div>
              </div>
        </li>
                    <li class="pd-15-10 dropdown list-inline-item "><a href="#" class="fz-14 color-black z-index-10">Partnership</a>
                    

                    <div class="dropdown-content-services pd-20-0">
                         <div class="green-filter"></div>
                  
                                      <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/particle-background-partnership-320.jpg" class="dropdown-background" alt="Background-image" />
                        <div class="col-md-4 z-index-10">
                            <a href="../partnership-page/referal-partner.html" class="partnership-link">
                            <h3 class="menu-title">Referal Partner</h3>
                            <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/referral-partner.png" alt="Referral Partner">
                            <p class="section-description">Lorem ipsum dolor sit amet, ea ponderum scribentur qui. Sed impetus numquam honestatis in.</p>
                            </a>
                            
                        </div>
                        <div class="col-md-4 z-index-10">
                            <a href="../partnership-page/affiliate-partner.html" class="partnership-link">
                                <h3 class="menu-title">Affiliate Partner</h3>
                            <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/affiliate-partner.png" alt="Referral Partner">
                            <p class="section-description">Lorem ipsum dolor sit amet, ea ponderum scribentur qui. Sed impetus numquam honestatis in.</p>
                            </a>
                            
                        </div>
                        <div class="col-md-4 z-index-10">
                            <a href="../partnership-page/strategic-partnership.html" class="partnership-link">
                                <h3 class="menu-title">Strategic Partner</h3>
                            <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/strategic-partner.png" alt="Referral Partner">
                            <p class="section-description">Lorem ipsum dolor sit amet, ea ponderum scribentur qui. Sed impetus numquam honestatis in.</p>
                            </a>
                            
                        </div>
                    </div></li>
            <li class="pd-15-10 list-inline-item"><a href="#" class="fz-14 color-black">Portfolio</a></li>
            <li class="pd-15-10 dropdown list-inline-item"><a href="#" class="fz-14 color-black">Company</a>
            
              <!-- dropdown menu of company  comes here -->
              <div class="dropdown-content-services pd-10-0" style="display: none;">
                  <div class="green-filter"></div>
                  
                                      <img src="<?php echo get_bloginfo('template_url'); ?>/assets/img/particle-background-company-365.jpg" class="dropdown-background" alt="Background-image" />
                <div class="col-md-10 col-md-offset-1 z-index-10">
                  <div class="col-md-4">
                    <h3 class="menu-title">About Us</h3>
                    <div class="col-md-12 services-block">


                    <ul class="list dropdown-list">
                      <li><a href="../company-page/company-overview.html">Company Overview</a></li>
                      <li><a href="../company-page/path-finder.html">Path Finder</a></li>
                      <li><a href="../company-page/our-values.html">Our Values</a></li>
                      <li><a href="../company-page/center-of-excellence.html">Center Of Excellence</a></li>
                      <li><a href="../our-infrastructure.html">Our Infratrucsture</a></li>
                      <li><a href="../company-page/contact-us.html">Contact Us</a></li>
                      <li><a href="../company-page/enquire-now.html">Enquire Now</a></li>
                      <li><a href="../company-page/client-testimonial.html">Client Testimonial</a></li>
                    </ul>
                  </div>
                  </div>
                  <div class="col-md-4">
                    <h3 class="menu-title">Insights</h3>
                    <div class="col-md-12 services-block">


                    <ul class="list dropdown-list">
                      
                      <li><a href="../company-page/certification.html">Certification</a></li>
                     
                      <li><a href="../blog">Blog</a></li>
                      <li><a href="../portfolio">Portfolio</a></li>
                      <li><a href="../company-page/case-studies.html">Case Studies</a></li>
                      <li><a href="../company-page/faq.html">FAQ</a></li>
                    </ul>
                  </div>
                  </div>
                    <div class="col-md-4">
                    <h3 class="menu-title">Our Culture</h3>
                    <div class="col-md-12 services-block">


                    <ul class="list dropdown-list">
                      <li><a href="../company-page/career.html">Career Overview</a></li>
                      <li><a href="../company-page/current-opening.html">Current opening</a></li>
                    
                      <li><a href="../company-page/corporate-social.html">Corporate Social</a></li>

                    </ul>
                  </div>
                  </div>
              </div>
            </div></li>
             <li class="pd-15-10 list-inline-item"><a href="#" class="fz-14 color-black">Blog</a></li>
            <li class="pd-8-10 border-blue border-radius-20 mg-0-15 estimate-product background-green list-inline-item"><a href="#" class="fz-14 color-black pd-0-10">Estimate Your Project</a></li>
            </ul>
        </div>
        <!-- closing of pagelink section -->
    </div>
    <!-- closing of top-nav  desktop-version-->
    <!-- opening of top nav mobile version-->
    <!-- opening of top-nav mobile version -->
<div class="row top-nav mobile-version relative">
    <!--opening of logo-container -->
    <div class="col-md-6 col-xs-6 logo">
                <a href="https://www.acropolisinfotech.com"><img src="../assets/img/logo.png" alt="Acropolis Infotech" title="Acropolis Infotech"></a>
        
    </div>
    <!--closing of logo container -->
    <!-- opening of toggle-button container -->
    <div class="col-md-6 col-xs-6 toggle-button-container align-right pd-10-10">
        <button type="button" class="mobile-menu-toggle-button">
            <i class="fa fa-align-justify"></i>
        </button>
        
    </div>
    <!-- closing of toggle-button container -->
    <div class="mobile-menu-overall-container">
    <div class="mobile-menu-container main-page">
        <!-- main page menu container -->
        <ul class="list mobile-menu-list">
            <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="../portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="../blog">Blog</a></li>
        </ul>
    </div>
    <!-- opening of offering page menu container -->
        <div class="mobile-menu-container offering-page">
        <ul class="list mobile-menu-list">
              <li class="offering-menu-back-button back-button"><a href="#">Offering</a></li>
              <ul class="list mobile-menu-sublist">
            <li class="expertise-service-menu-button has-child"><a href="#">Expertise Services</a></li>
            <li class="enterprise-service-menu-button has-child"><a href="#">Enterprise Services</a></li>
            <li class="process-menu-button has-child"><a href="#">Process</a></li>
            </ul>
             <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of offering page menu container -->
      <!-- opening of expertise page menu container -->
        <div class="mobile-menu-container expertise-page">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
               <li class="expertise-service-menu-back-button back-button"><a href="#">Expertise Services</a></li>
                <ul class="list mobile-menu-sublist">
           <li><a href="../web-development.html">Web Apps Development</a></li>
                      <li><a href="../mobile-app-development.html">Mobile Apps development</a></li>
                      <li><a href="../dedicated-development-team.html">Staff Augmentation</a></li>
                      <li><a href="../front-end-technology.html">Front End Technologies</a></li>
                      <li><a href="../microsoft-technology.html">Microsoft Technologies</a></li>
                      <li><a href="../iot.html">Internet of Things(IoT)</a></li>
                      <li><a href="../vr.html">AR/VR</a></li>
                      <li><a href="../cloud.html">Cloud & Devops</a></li>
                      <li><a href="../chatbot.html">Chatbot Development</a></li>
                      <li><a href="../wearable.html">Wearable</a></li>
                      <li><a href="../ai.html">Artificial Intelligence</a></li>
                      <li><a href="../big-data.html">Big Data</a></li>
                      <li><a href="../blockchain.html">Blockchain</a></li>
                      </ul>
                       <li class="enterprise-service-menu-button has-child"><a href="#">Enterprise Services</a></li>
                       
            <li class="process-menu-button has-child"><a href="#">Process</a></li>
                                  <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="../portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="../blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of expertise page menu container -->
          <!-- opening of enterprise page menu container -->
        <div class="mobile-menu-container enterprise-page">
        <ul class="list mobile-menu-list">
              <li class="offering-menu-back-button back-button"><a href="#">Offering</a></li>
            <li class="expertise-service-menu-button has-child"><a href="#">Expertise Services</a></li>
            <li class="enterprise-service-menu-back-button back-button"><a href="#">Enterprise Services</a></li>
             <ul class="list mobile-menu-sublist">
                      <li><a href="../business-consulting.html">Business Consulting</a></li>
                     
                      <li><a href="../product-prototype.html">Product Prototyping</a></li>
                      <li><a href="../managed-services.html">Managed Services</a></li>
                             <li><a href="../enterprise-mobility.html">Enterprise Mobility</a></li>
                      <li><a href="../product-engineering.html">Product Engineering</a></li>
                      <li><a href="../quality-assurance.html">Quality Assurance & Testing</a></li>
                       <li><a href="../digital-transformation.html">Digital Transformation</a></li>
                      <li><a href="../product-maintainance.html">Maintainance & Support</a></li>
                      <li><a href="../system-integration.html">Enterprise System Integration</a></li>
                      <li><a href="../cloud-integration.html">Cloud Integration</a></li>
                      <li><a href="../dashboard.html">It Metrix And Dashboard</a></li>
                      </ul>
                      
                        <li class="process-menu-button has-child"><a href="#">Process</a></li>
             <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of enterprise page menu container -->
              <!-- opening of partnership page menu container -->
        <div class="mobile-menu-container partnership-page">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-back-button back-button"><a href="#">Partnership</a></li>
             <ul class="list mobile-menu-sublist">
                    <li> <a href="./partnership-page/referal-partner.html" class="partnership-link">Referral Partner</a></li>
                       <li> <a href="../partnership-page/affiliate-partner.html" class="partnership-link">Affiliate Partner</a></li>
                          <li> <a href="../partnership-page/strategic-partner.html" class="partnership-link">Strategic Partner</a></li>
                          </ul>
                           <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
                           
            <li class="portfolio-menu-button"><a href="../portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of partnership page menu container -->
                  <!-- opening of partnership page menu container -->
        <div class="mobile-menu-container company-page">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
             <li class="company-menu-back-button back-button"><a href="#">Company</a></li>
            <ul class="list mobile-menu-sublist">
            <li class="about-us-menu-button has-child"><a href="#">About Us</a></li>
            <li class="insight-menu-button has-child"><a href="#">Insighst</a></li>
            <li class="our-culture-menu-button has-child"><a href="#">Our Culture</a></li>
            </ul>
                      
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of partnership page menu container -->
        <!-- opening of insight menu container -->
        <div class="mobile-menu-container insight">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
             <li class="company-menu-back-button back-button"><a href="#">Company</a></li>
             <li class="about-us-menu-button has-child"><a href="#">About Us</a></li>
             <li class="insight-menu-back-button back-button"><a href="#">Insights</a></li>
               <ul class="list mobile-menu-sublist">
                         <li><a href="../company-page/certification.html">Certification</a></li>
                      
                      
                      <li><a href="../company-page/blog.html">Blog</a></li>
                      <li><a href="../company-page/portfolio">Portfolio</a></li>
                      <li><a href="../company-page/case-studies.html">Case Studies</a></li>
                      <li><a href="../company-page/faq.html">FAQs</a></li>
                       
                       </ul>
                <li class="our-culture-menu-button has-child"><a href="#">Our Culture</a></li>
                      
            <li class="blog-button"><a href="../blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of insight menu container -->
        <!-- opening of our culture menu container -->
        <div class="mobile-menu-container our-culture">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
             <li class="company-menu-button has-child"><a href="#">Company</a></li>
             <li class="about-us-menu-button has-child"><a href="#">About Us</a></li>
            <li class="insight-menu-button has-child"><a href="#">Insights</a></li>
             <li class="our-culture-menu-back-button back-button"><a href="#">Our Culture</a></li>
              <ul class="list mobile-menu-sublist">
                        <li><a href="company-page/career.html">Career Overview</a></li>
                      <li><a href="company-page/current-opening.html">Current opening</a></li>
                      <li><a href="company-page/corporate-social.html">Corporate Social Responsibility</a></li>
                       
                       </ul>

              
                      
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of our culture menu container -->
    <!-- opening of about us menu container -->
        <div class="mobile-menu-container about-us">
        <ul class="list mobile-menu-list">
           <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
            <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
             <li class="company-menu-button has-child"><a href="#">Company</a></li>
             <li class="about-us-menu-back-button back-button"><a href="#">About Us</a></li>
                          <ul class="list mobile-menu-sublist">
                         <li><a href="company-page/company-overview.html">Company Overview</a></li>
                      <li><a href="company-page/path-finder.html">Path Finder</a></li>
                      <li><a href="company-page/our-values.html">Our Values</a></li>
                      <li><a href="company-page/center-of-excellence.html">Center Of Excellence</a></li>
                      <li><a href="company-page/our-infrastructure.html">Our Infratrucsture</a></li>
                      <li><a href="company-page/contact-us.html">Contact Us</a></li>
                      <li><a href="company-page/inquire-now.html">Inquire Now</a></li>
                      <li><a href="company-page/client-testimonial.html">Client Testimonial</a></li>
                       
                       </ul>
                    <li class="insight-menu-button has-child"><a href="#">Insights</a></li>
             <li class="our-culture-menu-button has-child"><a href="#">Our Culture</a></li>

              
                      
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of about us menu container -->
              <!-- opening of process page menu container -->
        <div class="mobile-menu-container process-page">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
                         <li class="expertise-service-menu-button has-child"><a href="#">Expertise Services</a></li>
            <li class="enterprise-service-menu-button has-child"><a href="#">Enterprise Services</a></li>
             
               <li class="process-menu-back-button back-button"><a href="#">Process</a></li>
                 <ul class="list mobile-menu-sublist">
                  <li><a href="development-methodlogy.html">Development Methodlogy</a></li>
                      <li><a href="delivery-model.html">Delivery Models</a></li>
                      <li><a href="pricing-model.html">Pricing Models</a></li>
                      </ul>
                        <li class="industry-menu-button has-child"><a href="#">Industries</a></li>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of process page menu container -->
    <!-- opening of industries page menu container -->
        <div class="mobile-menu-container industries-page">
        <ul class="list mobile-menu-list">
             <li class="offering-menu-button has-child"><a href="#">Offering</a></li>
                <li class="industry-menu-back-button back-button"><a href="#">Industries</a></li>
                  <ul class="list mobile-menu-sublist">
             <li><a href="industries-page/healthcare.html">Healthcare</a></li>
                      <li><a href="industries-page/education.html">Education</a></li>
                      <li><a href="industries-page/social-networking.html">Social Networking</a></li>
                      <li><a href="industries-page/retail.html">Retail</a></li>
            
            <li><a href="industries-page/manufacturing.html">Manufacturing</a></li>
                      <li><a href="industries-page/eCommerce.html">eCommerce</a></li>
                      <li><a href="industries-page/energy.html">Energy</a></li>
                      <li><a href="industries-page/travel-and-hospitality.html">Travel & Hospitality</a></li>
             <li><a href="industries-page/real-estate.html">Real Estate</a></li>
                      <li><a href="industries-page/media-and-entertainment.html">Media & Entertainment</a></li>
                      <li><a href="industries-page/logistics-and-distribution.html">Logistics & Distribution</a></li>
                       <li><a href="industries-page/construction.html">Construction</a></li>
                       </ul>
            <li class="partnership-menu-button has-child"><a href="#">Partnership</a></li>
            <li class="portfolio-menu-button"><a href="portfolio">Portfolio</a></li>
            <li class="company-menu-button has-child"><a href="#">Company</a></li>
            <li class="blog-button"><a href="/blog">Blog</a></li>
        </ul>
    </div>
    <!-- closing of industries page menu container -->
    </div>
    
</div>
<!-- closing of top-nav mobile-version -->
    