var app=angular.module("acropolis",[]);
app.controller("ctrl",["$scope",function($scope)
                      {
                          $scope.tech_title="Web Development";
                          $scope.tech_description="Acropolis delivers a soothing yet dynamic user experience to your digital users across all devices while taking care of mobile first approach. Right from basic websites to complex, robust & and highly scalable, custom web applications with advanced features, we tailor it all to embrace different businesses, industries, functions and processes.";
                         
                                                          
                            $scope.img_one_path="assets/img/home/service-icons/web/yii.png";
                          $scope.img_two_path="assets/img/home/service-icons/web/zend.png";
                          $scope.img_three_path="assets/img/home/service-icons/web/codeignitor.png";
                          $scope.img_four_path="assets/img/home/service-icons/web/ror.png";
                          $scope.img_five_path="assets/img/home/service-icons/web/sharepoint.png";
                          $scope.img_six_path="assets/img/home/service-icons/web/laravel.png";
                           $scope.tech_one_title="Yii";
                          $scope.tech_two_title="Zend";
                          $scope.tech_three_title="Codeignitor";
                          $scope.tech_four_title="Ror";
                          $scope.tech_five_title="Sharepoint";
                          $scope.tech_six_title="Laravel";
                          
                          
                                
                         
                                 $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/web.png";

                          
                          $scope.tech_mobile=function()
                          {
                               $scope.tech_title="Mobile Application Development";
                          $scope.tech_description="Acropolis has established a reputation for delivering high performing custom mobile applications to achieve your business goals. Our proficient mobile application development team has In-depth knowledge of various frameworks& platforms for developing mobile applications with global standards to cater & please our audience from different industry verticals."
$scope.service_hover_class="red";
                             
                           $scope.img_one_path="assets/img/home/service-icons/mobile/iphone.png";
                          $scope.img_two_path="assets/img/home/service-icons/mobile/ipad.png";
                          $scope.img_three_path="assets/img/home/service-icons/mobile/android.png";
                          $scope.img_four_path="assets/img/home/service-icons/mobile/window.png";
                          $scope.img_five_path="assets/img/home/service-icons/mobile/iwatch.png";
                          $scope.img_six_path="assets/img/home/service-icons/mobile/ibeacon.png";
                          $scope.tech_one_title="iPhone";
                          $scope.tech_two_title="iPad";
                          $scope.tech_three_title="Android";
                          $scope.tech_four_title="Window";
                          $scope.tech_five_title="iWatch";
                          $scope.tech_six_title="iBeacon";
                          $scope.service_hover_class="aqua";
                          
                               $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/mobile.png";
                          }
                          
                          
                            $scope.tech_cloud=function()
                          {
                               $scope.tech_title="Cloud Computing";
                          $scope.tech_sub_title="Application Development";
                          $scope.tech_description="Cloud computing refers to the delivery of on-demand computing resources right from apps to data servers. Cloud computing offers superb accuracy, while ensuring elasticity of resources and metered services so that you pay only for what you use. Come and Explore cloud computing with Acropolis"
$scope.service_hover_class="yellow";
                                 $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/cloud.png";
                                  $scope.img_one_path="assets/img/home/service-icons/cloud/amazone-web-services.png";
                          $scope.img_two_path="assets/img/home/service-icons/cloud/google-cloud-platform.png";
                          $scope.img_three_path="assets/img/home/service-icons/cloud/ibm cloud.png";
                          $scope.img_four_path="assets/img/home/service-icons/cloud/salesforce-cloud.png";
                          $scope.img_five_path="assets/img/home/service-icons/cloud/microsoft-azure-cloud.png";
                          $scope.img_six_path="assets/img/home/service-icons/cloud/blank.png";
                          
                          $scope.tech_one_title="Amazon";
                          $scope.tech_two_title="Google";
                          $scope.tech_three_title="Ibm";
                          $scope.tech_four_title="Salesforce";
                          $scope.tech_five_title="Microsoft";
                          $scope.tech_six_title="Microsoft";
                              
                          }
                               $scope.tech_trending=function()
                          {
                               $scope.tech_title="Trending Technologies";
                          $scope.tech_sub_title="";
                          $scope.tech_description="It is important to keep ourselves and our businesses updated with latest technological trends. Technologies like Blockchain, Internet of Things, Artificial Intelligence, Augmented/Virtual Reality, Machine Learning, Big Data, etc. have taken the world by storm and are aiding businesses from across the globe. Acropolis helps you adopt and adapt to these newest technologies which are suitable for your business growth.";
                                    $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/blockchain-2.png";
$scope.service_hover_class="blue";
                                
                           $scope.img_one_path="assets/img/home/service-icons/trending/apple-watch.png";
                          $scope.img_two_path="assets/img/home/service-icons/trending/augmented reality.png";
                          $scope.img_three_path="assets/img/home/service-icons/trending/aws.png";
                          $scope.img_four_path="assets/img/home/service-icons/trending/window.png";
                          $scope.img_five_path="assets/img/home/service-icons/trending/iwatch.png";
                          $scope.img_six_path="assets/img/home/service-icons/trending/ibeacon.png";
                         
                               $scope.tech_one_title="Apple Watch";
$scope.tech_two_title=`Augmented
Reality`;
                          $scope.tech_three_title="AWS";
                          $scope.tech_four_title="Window";
$scope.tech_five_title=`Augmented 
Reality`;
                          $scope.tech_six_title="iWatch";
                              
                          }
                            $scope.tech_web=function()
                          {
                                $scope.tech_title="Web Development";
                          $scope.tech_description="Acropolis delivers a soothing yet dynamic user experience to your digital users across all devices while taking care of mobile first approach. Right from basic websites to complex, robust & and highly scalable, custom web applications with advanced features, we tailor it all to embrace different businesses, industries, functions and processes.";
                         
                                                          
                            $scope.img_one_path="assets/img/home/service-icons/web/yii.png";
                          $scope.img_two_path="assets/img/home/service-icons/web/zend.png";
                          $scope.img_three_path="assets/img/home/service-icons/web/codeignitor.png";
                          $scope.img_four_path="assets/img/home/service-icons/web/ror.png";
                          $scope.img_five_path="assets/img/home/service-icons/web/sharepoint.png";
                          $scope.img_six_path="assets/img/home/service-icons/web/laravel.png";
                           $scope.tech_one_title="Yii";
                          $scope.tech_two_title="Zend";
                          $scope.tech_three_title="Codeignitor";
                          $scope.tech_four_title="Ror";
                          $scope.tech_five_title="Sharepoint";
                          $scope.tech_six_title="Laravel";
                          
                          
                                
                         
                                 $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/web.png";
                          }
                              $scope.tech_hire=function()
                          {
                               $scope.tech_title="Hire Dedicated Developer";
                          $scope.tech_description="Consultants at Acropolis helps you better understand disruptive technologies, implement agile design principles while taking strategic approach.You need a technology partner who can fuel your strategy and not hobble it. Acropolis helps you make confident business and technology decisions while ensuring your organization is agile, effective and equipped to play around with latest industry trends resulting in enduring outcomes.";
$scope.service_hover_class="green";
                                   $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/hiring.png";
                                
                           $scope.img_one_path="assets/img/home/service-icons/hire/php.png";
                          $scope.img_two_path="assets/img/home/service-icons/hire/iphone.png";
                          $scope.img_three_path="assets/img/home/service-icons/hire/android.png";
                          $scope.img_four_path="assets/img/home/service-icons/hire/ror.png";
                          $scope.img_five_path="assets/img/home/service-icons/hire/graphics-designer.png";
                          $scope.img_six_path="assets/img/home/service-icons/hire/sencha.png";

                                
                                   $scope.tech_one_title="PHP";
                          $scope.tech_two_title="iPhone";
                          $scope.tech_three_title="Android";
                          $scope.tech_four_title="Ror";
                          $scope.tech_five_title=".NET";
                          $scope.tech_six_title="Graphics Designer";
                          $scope.tech_seven_title="Sencha";

                          }
                                
                                  $scope.tech_open_source=function()
                          {
                               $scope.tech_title="Content Management System";
                          $scope.tech_description="Get custom designed themes and functionalities designed & developed for your business needs, along with tried and tested content management system. Fulfill the professional requirements and expand your business with the help of a dynamic website which can be customized on your part without any coding knowledge.";
$scope.service_hover_class="red";
                                       $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/cms-2.png";
                                                                      $scope.sprite_background_position_eight="";
                                                              $scope.img_one_path="assets/img/home/service-icons/open-source/wordpress-open-source.png";
                          $scope.img_two_path="assets/img/home/service-icons/open-source/joomla.png";
                          $scope.img_three_path="assets/img/home/service-icons/open-source/drupal.png";
                          $scope.img_four_path="assets/img/home/service-icons/open-source/php-nuke.png";
                          $scope.img_five_path="assets/img/home/service-icons/open-source/radient-cms.png";
                          $scope.img_six_path="assets/img/home/service-icons/open-source/refinery.png";
                                
                                       $scope.tech_one_title="Wordpress";
                          $scope.tech_two_title="Joomla";
                          $scope.tech_three_title="Drupal";
                          $scope.tech_four_title="PHP Nuke";
                          $scope.tech_five_title="Xpress Engine Development";
                          $scope.tech_six_title="Radient CMS";
                                      
                          }
                                    $scope.tech_consultancy=function()
                          {
                               $scope.tech_title=" Business and IT Consultancy";
                          $scope.tech_sub_title="";
                          $scope.tech_description="Consultants at Acropolis helps you better understand disruptive technologies, implement agile design principles while taking strategic approach.You need a technology partner who can fuel your strategy and not hobble it. Acropolis helps you make confident business and technology decisions while ensuring your organization is agile, effective and equipped to play around with latest industry trends resulting in enduring outcomes.";
$scope.service_hover_class="aqua";
                                         $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/support.png";
                                
                             $scope.img_one_path="assets/img/home/service-icons/consulting/planing.png";
                          $scope.img_two_path="assets/img/home/service-icons/consulting/technical-support.png";
                          $scope.img_three_path="assets/img/home/service-icons/consulting/dashboard-management.png";
                          $scope.img_four_path="assets/img/home/service-icons/consulting/security.png";
                          $scope.img_five_path="assets/img/home/service-icons/consulting/private-cloud.png";
                          $scope.img_six_path="assets/img/home/service-icons/consulting/blank.png";
                                        
                                         $scope.tech_one_title="Planning";
                          $scope.tech_two_title=" Technical Support";
                          $scope.tech_three_title="Dashboard Management";
                          $scope.tech_four_title="Security";
                          $scope.tech_five_title="Private Cloud";
                          $scope.tech_six_title="Private Cloud";
                                        
                          }
                                     
                                                  $scope.tech_api=function()
                          {
                               $scope.tech_title="API Development Services";
                          $scope.tech_sub_title="";
                          $scope.tech_description="Count on intelligent and scalable APIs developed and integrated by Acropolis. We help you in leveraging web and mobile solutions seamlessly by simplifying non-integrated and fragmented processes, optimizing and scaling data, rationalizing and modernizing legacy systems and delivering consistent & quality data and services across all front end channels with help of robust API interface";
$scope.service_hover_class="purple";
                                                       $scope.tech_image="https://www.acropolisinfotech.com/assets/img/home/service/api.png";
                                                        $scope
                          $scope.img_one_path="assets/img/home/service-icons/apis/dhl.png"
                          $scope.img_two_path="assets/img/home/service-icons/apis/fedex-api.png";
                          $scope.img_three_path="assets/img/home/service-icons/apis/amazon.png";
                          $scope.img_four_path="assets/img/home/service-icons/apis/ebay.png";
                          $scope.img_five_path="assets/img/home/service-icons/apis/clickatell.png";
                          $scope.img_six_path="assets/img/home/service-icons/apis/authorized.png";
                                
                                                       $scope.tech_one_title="DHL";
                          $scope.tech_two_title="Fedex";
                          $scope.tech_three_title="Amazon";
                          $scope.tech_four_title="Ebay";
                          $scope.tech_five_title="Yahoo";
                          $scope.tech_six_title="Clickatell";
                          }
                                                  $scope.about_us_left_image="https://www.acropolisinfotech.com/assets/img/home/service/testin1.png";
                          
                          $scope.who_we_are=function()
                          {
                              $scope.about_us_left_image="https://www.acropolisinfotech.com/assets/img/home/service/testin1.png"
                          }
                          $scope.why_we_are=function()
                          {
                              $scope.about_us_left_image="http://www.sachin.acropolisglobal.com/acropolis_updated/wp-content/themes/acropolis/img/why_we_are.png"
                          }
                           $scope.our_usps=function()
                          {
                              $scope.about_us_left_image="http://www.sachin.acropolisglobal.com/acropolis_updated/wp-content/themes/acropolis/img/our_usps.png"
                          }
                      }])


/* make a controller for form validation */
app.controller("form-validation",["$scope","captcha_validation",function($scope,captcha_validation)
{


$scope.name_pattern="([A-za-z\\s]){2,}";
$scope.number_pattern="[0-9]{6,}";
$scope.country_code_pattern="[0-9]{1,}";
$scope.show_table=function()
{
angular.element("table").show();
}

/* add a function to get country code on clicking of table row */

$scope.get_country_code=function(data)
{
$scope.country_code_reference.name=data.dial_code;
angular.element("table").hide();
}

/* Adding a function which restrict user to take only 10 input in phone field */


/* making an object which include country name and counrty code */

$scope.country_code_reference=[
{
"name": "Afghanistan",
"dial_code": "+93",
"code": "AF"
},
{
"name": "Aland Islands",
"dial_code": "+358",
"code": "AX"
},
{
"name": "Albania",
"dial_code": "+355",
"code": "AL"
},
{
"name": "Algeria",
"dial_code": "+213",
"code": "DZ"
},
{
"name": "AmericanSamoa",
"dial_code": "+1684",
"code": "AS"
},
{
"name": "Andorra",
"dial_code": "+376",
"code": "AD"
},
{
"name": "Angola",
"dial_code": "+244",
"code": "AO"
},
{
"name": "Anguilla",
"dial_code": "+1264",
"code": "AI"
},
{
"name": "Antarctica",
"dial_code": "+672",
"code": "AQ"
},
{
"name": "Antigua and Barbuda",
"dial_code": "+1268",
"code": "AG"
},
{
"name": "Argentina",
"dial_code": "+54",
"code": "AR"
},
{
"name": "Armenia",
"dial_code": "+374",
"code": "AM"
},
{
"name": "Aruba",
"dial_code": "+297",
"code": "AW"
},
{
"name": "Australia",
"dial_code": "+61",
"code": "AU"
},
{
"name": "Austria",
"dial_code": "+43",
"code": "AT"
},
{
"name": "Azerbaijan",
"dial_code": "+994",
"code": "AZ"
},
{
"name": "Bahamas",
"dial_code": "+1242",
"code": "BS"
},
{
"name": "Bahrain",
"dial_code": "+973",
"code": "BH"
},
{
"name": "Bangladesh",
"dial_code": "+880",
"code": "BD"
},
{
"name": "Barbados",
"dial_code": "+1246",
"code": "BB"
},
{
"name": "Belarus",
"dial_code": "+375",
"code": "BY"
},
{
"name": "Belgium",
"dial_code": "+32",
"code": "BE"
},
{
"name": "Belize",
"dial_code": "+501",
"code": "BZ"
},
{
"name": "Benin",
"dial_code": "+229",
"code": "BJ"
},
{
"name": "Bermuda",
"dial_code": "+1441",
"code": "BM"
},
{
"name": "Bhutan",
"dial_code": "+975",
"code": "BT"
},
{
"name": "Bolivia, Plurinational State of",
"dial_code": "+591",
"code": "BO"
},
{
"name": "Bosnia and Herzegovina",
"dial_code": "+387",
"code": "BA"
},
{
"name": "Botswana",
"dial_code": "+267",
"code": "BW"
},
{
"name": "Brazil",
"dial_code": "+55",
"code": "BR"
},
{
"name": "British Indian Ocean Territory",
"dial_code": "+246",
"code": "IO"
},
{
"name": "Brunei Darussalam",
"dial_code": "+673",
"code": "BN"
},
{
"name": "Bulgaria",
"dial_code": "+359",
"code": "BG"
},
{
"name": "Burkina Faso",
"dial_code": "+226",
"code": "BF"
},
{
"name": "Burundi",
"dial_code": "+257",
"code": "BI"
},
{
"name": "Cambodia",
"dial_code": "+855",
"code": "KH"
},
{
"name": "Cameroon",
"dial_code": "+237",
"code": "CM"
},
{
"name": "Canada",
"dial_code": "+1",
"code": "CA"
},
{
"name": "Cape Verde",
"dial_code": "+238",
"code": "CV"
},
{
"name": "Cayman Islands",
"dial_code": "+ 345",
"code": "KY"
},
{
"name": "Central African Republic",
"dial_code": "+236",
"code": "CF"
},
{
"name": "Chad",
"dial_code": "+235",
"code": "TD"
},
{
"name": "Chile",
"dial_code": "+56",
"code": "CL"
},
{
"name": "China",
"dial_code": "+86",
"code": "CN"
},
{
"name": "Christmas Island",
"dial_code": "+61",
"code": "CX"
},
{
"name": "Cocos (Keeling) Islands",
"dial_code": "+61",
"code": "CC"
},
{
"name": "Colombia",
"dial_code": "+57",
"code": "CO"
},
{
"name": "Comoros",
"dial_code": "+269",
"code": "KM"
},
{
"name": "Congo",
"dial_code": "+242",
"code": "CG"
},
{
"name": "Congo, The Democratic Republic of the Congo",
"dial_code": "+243",
"code": "CD"
},
{
"name": "Cook Islands",
"dial_code": "+682",
"code": "CK"
},
{
"name": "Costa Rica",
"dial_code": "+506",
"code": "CR"
},
{
"name": "Cote d'Ivoire",
"dial_code": "+225",
"code": "CI"
},
{
"name": "Croatia",
"dial_code": "+385",
"code": "HR"
},
{
"name": "Cuba",
"dial_code": "+53",
"code": "CU"
},
{
"name": "Cyprus",
"dial_code": "+357",
"code": "CY"
},
{
"name": "Czech Republic",
"dial_code": "+420",
"code": "CZ"
},
{
"name": "Denmark",
"dial_code": "+45",
"code": "DK"
},
{
"name": "Djibouti",
"dial_code": "+253",
"code": "DJ"
},
{
"name": "Dominica",
"dial_code": "+1767",
"code": "DM"
},
{
"name": "Dominican Republic",
"dial_code": "+1849",
"code": "DO"
},
{
"name": "Ecuador",
"dial_code": "+593",
"code": "EC"
},
{
"name": "Egypt",
"dial_code": "+20",
"code": "EG"
},
{
"name": "El Salvador",
"dial_code": "+503",
"code": "SV"
},
{
"name": "Equatorial Guinea",
"dial_code": "+240",
"code": "GQ"
},
{
"name": "Eritrea",
"dial_code": "+291",
"code": "ER"
},
{
"name": "Estonia",
"dial_code": "+372",
"code": "EE"
},
{
"name": "Ethiopia",
"dial_code": "+251",
"code": "ET"
},
{
"name": "Falkland Islands (Malvinas)",
"dial_code": "+500",
"code": "FK"
},
{
"name": "Faroe Islands",
"dial_code": "+298",
"code": "FO"
},
{
"name": "Fiji",
"dial_code": "+679",
"code": "FJ"
},
{
"name": "Finland",
"dial_code": "+358",
"code": "FI"
},
{
"name": "France",
"dial_code": "+33",
"code": "FR"
},
{
"name": "French Guiana",
"dial_code": "+594",
"code": "GF"
},
{
"name": "French Polynesia",
"dial_code": "+689",
"code": "PF"
},
{
"name": "Gabon",
"dial_code": "+241",
"code": "GA"
},
{
"name": "Gambia",
"dial_code": "+220",
"code": "GM"
},
{
"name": "Georgia",
"dial_code": "+995",
"code": "GE"
},
{
"name": "Germany",
"dial_code": "+49",
"code": "DE"
},
{
"name": "Ghana",
"dial_code": "+233",
"code": "GH"
},
{
"name": "Gibraltar",
"dial_code": "+350",
"code": "GI"
},
{
"name": "Greece",
"dial_code": "+30",
"code": "GR"
},
{
"name": "Greenland",
"dial_code": "+299",
"code": "GL"
},
{
"name": "Grenada",
"dial_code": "+1473",
"code": "GD"
},
{
"name": "Guadeloupe",
"dial_code": "+590",
"code": "GP"
},
{
"name": "Guam",
"dial_code": "+1671",
"code": "GU"
},
{
"name": "Guatemala",
"dial_code": "+502",
"code": "GT"
},
{
"name": "Guernsey",
"dial_code": "+44",
"code": "GG"
},
{
"name": "Guinea",
"dial_code": "+224",
"code": "GN"
},
{
"name": "Guinea-Bissau",
"dial_code": "+245",
"code": "GW"
},
{
"name": "Guyana",
"dial_code": "+595",
"code": "GY"
},
{
"name": "Haiti",
"dial_code": "+509",
"code": "HT"
},
{
"name": "Holy See (Vatican City State)",
"dial_code": "+379",
"code": "VA"
},
{
"name": "Honduras",
"dial_code": "+504",
"code": "HN"
},
{
"name": "Hong Kong",
"dial_code": "+852",
"code": "HK"
},
{
"name": "Hungary",
"dial_code": "+36",
"code": "HU"
},
{
"name": "Iceland",
"dial_code": "+354",
"code": "IS"
},
{
"name": "India",
"dial_code": "+91",
"code": "IN"
},
{
"name": "Indonesia",
"dial_code": "+62",
"code": "ID"
},
{
"name": "Iran, Islamic Republic of Persian Gulf",
"dial_code": "+98",
"code": "IR"
},
{
"name": "Iraq",
"dial_code": "+964",
"code": "IQ"
},
{
"name": "Ireland",
"dial_code": "+353",
"code": "IE"
},
{
"name": "Isle of Man",
"dial_code": "+44",
"code": "IM"
},
{
"name": "Israel",
"dial_code": "+972",
"code": "IL"
},
{
"name": "Italy",
"dial_code": "+39",
"code": "IT"
},
{
"name": "Jamaica",
"dial_code": "+1876",
"code": "JM"
},
{
"name": "Japan",
"dial_code": "+81",
"code": "JP"
},
{
"name": "Jersey",
"dial_code": "+44",
"code": "JE"
},
{
"name": "Jordan",
"dial_code": "+962",
"code": "JO"
},
{
"name": "Kazakhstan",
"dial_code": "+77",
"code": "KZ"
},
{
"name": "Kenya",
"dial_code": "+254",
"code": "KE"
},
{
"name": "Kiribati",
"dial_code": "+686",
"code": "KI"
},
{
"name": "Korea, Democratic People's Republic of Korea",
"dial_code": "+850",
"code": "KP"
},
{
"name": "Korea, Republic of South Korea",
"dial_code": "+82",
"code": "KR"
},
{
"name": "Kuwait",
"dial_code": "+965",
"code": "KW"
},
{
"name": "Kyrgyzstan",
"dial_code": "+996",
"code": "KG"
},
{
"name": "Laos",
"dial_code": "+856",
"code": "LA"
},
{
"name": "Latvia",
"dial_code": "+371",
"code": "LV"
},
{
"name": "Lebanon",
"dial_code": "+961",
"code": "LB"
},
{
"name": "Lesotho",
"dial_code": "+266",
"code": "LS"
},
{
"name": "Liberia",
"dial_code": "+231",
"code": "LR"
},
{
"name": "Libyan Arab Jamahiriya",
"dial_code": "+218",
"code": "LY"
},
{
"name": "Liechtenstein",
"dial_code": "+423",
"code": "LI"
},
{
"name": "Lithuania",
"dial_code": "+370",
"code": "LT"
},
{
"name": "Luxembourg",
"dial_code": "+352",
"code": "LU"
},
{
"name": "Macao",
"dial_code": "+853",
"code": "MO"
},
{
"name": "Macedonia",
"dial_code": "+389",
"code": "MK"
},
{
"name": "Madagascar",
"dial_code": "+261",
"code": "MG"
},
{
"name": "Malawi",
"dial_code": "+265",
"code": "MW"
},
{
"name": "Malaysia",
"dial_code": "+60",
"code": "MY"
},
{
"name": "Maldives",
"dial_code": "+960",
"code": "MV"
},
{
"name": "Mali",
"dial_code": "+223",
"code": "ML"
},
{
"name": "Malta",
"dial_code": "+356",
"code": "MT"
},
{
"name": "Marshall Islands",
"dial_code": "+692",
"code": "MH"
},
{
"name": "Martinique",
"dial_code": "+596",
"code": "MQ"
},
{
"name": "Mauritania",
"dial_code": "+222",
"code": "MR"
},
{
"name": "Mauritius",
"dial_code": "+230",
"code": "MU"
},
{
"name": "Mayotte",
"dial_code": "+262",
"code": "YT"
},
{
"name": "Mexico",
"dial_code": "+52",
"code": "MX"
},
{
"name": "Micronesia, Federated States of Micronesia",
"dial_code": "+691",
"code": "FM"
},
{
"name": "Moldova",
"dial_code": "+373",
"code": "MD"
},
{
"name": "Monaco",
"dial_code": "+377",
"code": "MC"
},
{
"name": "Mongolia",
"dial_code": "+976",
"code": "MN"
},
{
"name": "Montenegro",
"dial_code": "+382",
"code": "ME"
},
{
"name": "Montserrat",
"dial_code": "+1664",
"code": "MS"
},
{
"name": "Morocco",
"dial_code": "+212",
"code": "MA"
},
{
"name": "Mozambique",
"dial_code": "+258",
"code": "MZ"
},
{
"name": "Myanmar",
"dial_code": "+95",
"code": "MM"
},
{
"name": "Namibia",
"dial_code": "+264",
"code": "NA"
},
{
"name": "Nauru",
"dial_code": "+674",
"code": "NR"
},
{
"name": "Nepal",
"dial_code": "+977",
"code": "NP"
},
{
"name": "Netherlands",
"dial_code": "+31",
"code": "NL"
},
{
"name": "Netherlands Antilles",
"dial_code": "+599",
"code": "AN"
},
{
"name": "New Caledonia",
"dial_code": "+687",
"code": "NC"
},
{
"name": "New Zealand",
"dial_code": "+64",
"code": "NZ"
},
{
"name": "Nicaragua",
"dial_code": "+505",
"code": "NI"
},
{
"name": "Niger",
"dial_code": "+227",
"code": "NE"
},
{
"name": "Nigeria",
"dial_code": "+234",
"code": "NG"
},
{
"name": "Niue",
"dial_code": "+683",
"code": "NU"
},
{
"name": "Norfolk Island",
"dial_code": "+672",
"code": "NF"
},
{
"name": "Northern Mariana Islands",
"dial_code": "+1670",
"code": "MP"
},
{
"name": "Norway",
"dial_code": "+47",
"code": "NO"
},
{
"name": "Oman",
"dial_code": "+968",
"code": "OM"
},
{
"name": "Pakistan",
"dial_code": "+92",
"code": "PK"
},
{
"name": "Palau",
"dial_code": "+680",
"code": "PW"
},
{
"name": "Palestinian Territory, Occupied",
"dial_code": "+970",
"code": "PS"
},
{
"name": "Panama",
"dial_code": "+507",
"code": "PA"
},
{
"name": "Papua New Guinea",
"dial_code": "+675",
"code": "PG"
},
{
"name": "Paraguay",
"dial_code": "+595",
"code": "PY"
},
{
"name": "Peru",
"dial_code": "+51",
"code": "PE"
},
{
"name": "Philippines",
"dial_code": "+63",
"code": "PH"
},
{
"name": "Pitcairn",
"dial_code": "+872",
"code": "PN"
},
{
"name": "Poland",
"dial_code": "+48",
"code": "PL"
},
{
"name": "Portugal",
"dial_code": "+351",
"code": "PT"
},
{
"name": "Puerto Rico",
"dial_code": "+1939",
"code": "PR"
},
{
"name": "Qatar",
"dial_code": "+974",
"code": "QA"
},
{
"name": "Romania",
"dial_code": "+40",
"code": "RO"
},
{
"name": "Russia",
"dial_code": "+7",
"code": "RU"
},
{
"name": "Rwanda",
"dial_code": "+250",
"code": "RW"
},
{
"name": "Reunion",
"dial_code": "+262",
"code": "RE"
},
{
"name": "Saint Barthelemy",
"dial_code": "+590",
"code": "BL"
},
{
"name": "Saint Helena, Ascension and Tristan Da Cunha",
"dial_code": "+290",
"code": "SH"
},
{
"name": "Saint Kitts and Nevis",
"dial_code": "+1869",
"code": "KN"
},
{
"name": "Saint Lucia",
"dial_code": "+1758",
"code": "LC"
},
{
"name": "Saint Martin",
"dial_code": "+590",
"code": "MF"
},
{
"name": "Saint Pierre and Miquelon",
"dial_code": "+508",
"code": "PM"
},
{
"name": "Saint Vincent and the Grenadines",
"dial_code": "+1784",
"code": "VC"
},
{
"name": "Samoa",
"dial_code": "+685",
"code": "WS"
},
{
"name": "San Marino",
"dial_code": "+378",
"code": "SM"
},
{
"name": "Sao Tome and Principe",
"dial_code": "+239",
"code": "ST"
},
{
"name": "Saudi Arabia",
"dial_code": "+966",
"code": "SA"
},
{
"name": "Senegal",
"dial_code": "+221",
"code": "SN"
},
{
"name": "Serbia",
"dial_code": "+381",
"code": "RS"
},
{
"name": "Seychelles",
"dial_code": "+248",
"code": "SC"
},
{
"name": "Sierra Leone",
"dial_code": "+232",
"code": "SL"
},
{
"name": "Singapore",
"dial_code": "+65",
"code": "SG"
},
{
"name": "Slovakia",
"dial_code": "+421",
"code": "SK"
},
{
"name": "Slovenia",
"dial_code": "+386",
"code": "SI"
},
{
"name": "Solomon Islands",
"dial_code": "+677",
"code": "SB"
},
{
"name": "Somalia",
"dial_code": "+252",
"code": "SO"
},
{
"name": "South Africa",
"dial_code": "+27",
"code": "ZA"
},
{
"name": "South Sudan",
"dial_code": "+211",
"code": "SS"
},
{
"name": "South Georgia and the South Sandwich Islands",
"dial_code": "+500",
"code": "GS"
},
{
"name": "Spain",
"dial_code": "+34",
"code": "ES"
},
{
"name": "Sri Lanka",
"dial_code": "+94",
"code": "LK"
},
{
"name": "Sudan",
"dial_code": "+249",
"code": "SD"
},
{
"name": "Suriname",
"dial_code": "+597",
"code": "SR"
},
{
"name": "Svalbard and Jan Mayen",
"dial_code": "+47",
"code": "SJ"
},
{
"name": "Swaziland",
"dial_code": "+268",
"code": "SZ"
},
{
"name": "Sweden",
"dial_code": "+46",
"code": "SE"
},
{
"name": "Switzerland",
"dial_code": "+41",
"code": "CH"
},
{
"name": "Syrian Arab Republic",
"dial_code": "+963",
"code": "SY"
},
{
"name": "Taiwan",
"dial_code": "+886",
"code": "TW"
},
{
"name": "Tajikistan",
"dial_code": "+992",
"code": "TJ"
},
{
"name": "Tanzania, United Republic of Tanzania",
"dial_code": "+255",
"code": "TZ"
},
{
"name": "Thailand",
"dial_code": "+66",
"code": "TH"
},
{
"name": "Timor-Leste",
"dial_code": "+670",
"code": "TL"
},
{
"name": "Togo",
"dial_code": "+228",
"code": "TG"
},
{
"name": "Tokelau",
"dial_code": "+690",
"code": "TK"
},
{
"name": "Tonga",
"dial_code": "+676",
"code": "TO"
},
{
"name": "Trinidad and Tobago",
"dial_code": "+1868",
"code": "TT"
},
{
"name": "Tunisia",
"dial_code": "+216",
"code": "TN"
},
{
"name": "Turkey",
"dial_code": "+90",
"code": "TR"
},
{
"name": "Turkmenistan",
"dial_code": "+993",
"code": "TM"
},
{
"name": "Turks and Caicos Islands",
"dial_code": "+1649",
"code": "TC"
},
{
"name": "Tuvalu",
"dial_code": "+688",
"code": "TV"
},
{
"name": "Uganda",
"dial_code": "+256",
"code": "UG"
},
{
"name": "Ukraine",
"dial_code": "+380",
"code": "UA"
},
{
"name": "United Arab Emirates",
"dial_code": "+971",
"code": "AE"
},
{
"name": "United Kingdom",
"dial_code": "+44",
"code": "GB"
},
{
"name": "United States",
"dial_code": "+1",
"code": "US"
},
{
"name": "Uruguay",
"dial_code": "+598",
"code": "UY"
},
{
"name": "Uzbekistan",
"dial_code": "+998",
"code": "UZ"
},
{
"name": "Vanuatu",
"dial_code": "+678",
"code": "VU"
},
{
"name": "Venezuela, Bolivarian Republic of Venezuela",
"dial_code": "+58",
"code": "VE"
},
{
"name": "Vietnam",
"dial_code": "+84",
"code": "VN"
},
{
"name": "Virgin Islands, British",
"dial_code": "+1284",
"code": "VG"
},
{
"name": "Virgin Islands, U.S.",
"dial_code": "+1340",
"code": "VI"
},
{
"name": "Wallis and Futuna",
"dial_code": "+681",
"code": "WF"
},
{
"name": "Yemen",
"dial_code": "+967",
"code": "YE"
},
{
"name": "Zambia",
"dial_code": "+260",
"code": "ZM"
},
{
"name": "Zimbabwe",
"dial_code": "+263",
"code": "ZW"
}
];
 $scope.captcha = Math.floor(Math.random() * 90000) + 10000;

$scope.re_captcha=function()
{
 $scope.captcha = Math.floor(Math.random() * 90000) + 10000;
}
$scope.check_captcha=function()
{
var status=captcha_validation.check_captcha($scope.captcha,$scope.your_number);

if(status==true)
{
 console.log("form is valid");
 angular.element("input[type='submit']").attr("disabled",false);
}
else
{
 console.log("form is invalid");
angular.element("input[type='submit']").attr("disabled",true);

}
}


}]);

/* making a factory for captcha validation */

app.factory("captcha_validation",function()
{
console.log("captcha factory initiated ");

var factory_obj={};
factory_obj.check_captcha=function(captcha,number)
{
if(captcha==number)
{
return true;
}
else
{
return false;
}
}
return factory_obj;
});

/* controller for bubble animation */

app.controller("animation",["$scope",function($scope)
{
var i=0;
setInterval(function()
{
for(i=0;i<=20;i=i+1)
{
$scope.top= Math.floor(Math.random() * 1000) + 10;
$scope.left= Math.floor(Math.random() * 1000) + 10;
angular.element(angular.element("span.bubble").get(i)).css({top:$scope.top,left:$scope.left});
}
},6000);

}])