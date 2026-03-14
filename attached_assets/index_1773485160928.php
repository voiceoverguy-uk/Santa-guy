	
<?php require_once 'theadmin/app/init.php';?>

<?php
error_reporting(0); 
?>
<!Doctype HTML5>
<html lang="en">




<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="<?php echo Config::get('seo.s7'); ?>">

<title><?php echo Config::get('seo.s7'); ?></title>
<meta name="description" content="<?php echo Config::get('seo.s8'); ?>">

<!-- === SOCIAL SHARE / OPEN GRAPH TAGS === -->
<meta property="og:title" content="Santa Radio – The World's Best Christmas Radio Station" />
<meta property="og:description" content="Non-stop Christmas music and festive fun 24/7. Listen online, on mobile, or on your smart speaker! Free personalised Santa Messages" />
<meta property="og:image" content="https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://www.santaradio.co.uk/" />
<meta property="og:type" content="website" />

<!-- === TWITTER CARD === -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Santa Radio – The World's Best Christmas Radio Station" />
<meta name="twitter:description" content="Non-stop Christmas hits, festive classics, and Santa’s messages around the clock." />
<meta name="twitter:image" content="https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg" />
	

<meta name="twitter:card" content="app">
<meta name="twitter:site" content="@wearesantaradio">
<meta name="twitter:description" content="<?php echo Config::get('seo.s8'); ?>">
<meta name="twitter:app:id:iphone" content="1021183593">
<meta name="twitter:app:id:ipad" content="1021183593">
<meta name="twitter:app:id:googleplay" content="com.slinkyapps.santaradio">
<meta name="twitter:app:country" content="GB">

<meta name="apple-itunes-app" content="app-id=1021183593, affiliate-data=myAffiliateData, app-argument=myURL">
    
    
<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/assets/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/assets/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

	
	
<link rel="preconnect" href="https://fonts.googleapis.com/"> 
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&amp;display=swap" rel="stylesheet">
    <link href="https://www.santaradio.co.uk/assets/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
	
    <link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="assets/vendor/simple-line-icons/css/simple-line-icons.css">
    <link href="assets/css/new-age.css" rel="stylesheet">
    <link href="xmas.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="assets/css/animate.css" media="screen">
<script src="assets/vendor/jquery/jquery.min.js"></script>
<script src="assets/js/ion.sound.js"></script>
 




   <script>
$(document).ready(function() {
	$("#tableHolder").load("bringsong2.php?=random1"+new Date().getTime());


  $.ajaxSetup({ cache: false }); // This part addresses an IE bug.  without it, IE will only load the first number and will never refresh
  setInterval(function() {

                   
    $("#tableHolder").load("bringsong2.php?=random3"+new Date().getTime());

  }, 15000); // the "3000" 
});
</script>


<!-- Canonical URL -->
<link rel="canonical" href="https://www.santaradio.co.uk/" />

<!-- Schema Markup for RadioStation (validator-approved version) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RadioStation",
  "@id": "https://www.santaradio.co.uk/#radiostation",
  "name": "Santa Radio",
  "url": "https://www.santaradio.co.uk/",
  "description": "The World's Best Christmas Radio Station – streaming Christmas songs and festive hits 24/7, hosted by the real Voice of Santa.",
  "logo": "https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg",
  "sameAs": [
    "https://www.facebook.com/santaradio",
    "https://www.instagram.com/santaradioapp",
    "https://www.voiceoverguy.co.uk/santa-voice"
  ],
  "founder": {
    "@type": "Person",
    "name": "Guy Harris",
    "url": "https://www.voiceoverguy.co.uk/"
  },
  "areaServed": "Worldwide",

  "potentialAction": {
    "@type": "ListenAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://global.citrus3.com:8164/stream",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    }
  }
}
</script>

<!-- Schema Markup for Organization (Logo fix for Google) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.santaradio.co.uk/#organization",
  "name": "Santa Radio",
  "url": "https://www.santaradio.co.uk",
  "logo": "https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg",
  "sameAs": [
    "https://www.voiceoverguy.co.uk/santa-voice",
    "https://www.tunein.com/radio/Santa-Radio-s245342/",
    "https://www.facebook.com/SantaRadioApp",
    "https://www.instagram.com/SantaRadioApp"
  ]
}
</script>

<!-- Schema Markup for AudioObject -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AudioObject",
  "name": "Santa Radio Live Stream",
  "description": "Non-stop Christmas music and festive favourites hosted by Santa himself.",
  "contentUrl": "https://listen.santaradio.co.uk/stream",
  "encodingFormat": "audio/mpeg",
  "duration": "PT24H",
  "genre": "Christmas Music",
  "uploadDate": "2025-11-11"
}
</script>

<!-- Schema Markup for AudioObject (Free Personalised Santa Message Demo) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AudioObject",
  "name": "Example Free Personalised Santa Message",
  "description": "A short 1-minute personalised Santa message preview, demonstrating the free audio message parents can receive.",
  "contentUrl": "https://www.santaradio.co.uk/assets/audio/santa-radio-free-personalised-message-arabella.mp3",
  "encodingFormat": "audio/mpeg",
  "duration": "PT1M13S",
  "genre": "Christmas",
  "isFamilyFriendly": true,
  "publisher": {
    "@type": "Organization",
    "name": "Santa Radio",
    "url": "https://www.santaradio.co.uk"
  },
  "uploadDate": "2025-12-09T00:00:00+00:00"
}
</script>

<!-- Schema Markup for Person (Voice of Santa) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.voiceoverguy.co.uk/#guyharris",
  "name": "Guy Harris",
  "jobTitle": "Voice of Santa",
  "url": "https://www.voiceoverguy.co.uk/santa-voice",
  "image": "https://www.santaradio.co.uk/assets/img/official-santa-voice-guy-harris.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/voiceoverguy/"
  ],
  "worksFor": {
    "@type": "RadioStation",
    "name": "Santa Radio"
  }
}
</script>

<!-- Schema Markup for WebSite -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.santaradio.co.uk/#website",
  "url": "https://www.santaradio.co.uk/",
  "name": "Santa Radio",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.santaradio.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>

<!-- Schema Markup for ImageObject (Santa Image) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://www.santaradio.co.uk/#santaimage",
  "url": "https://www.santaradio.co.uk/assets/img/official-santa-voice-guy-harris.jpg",
  "contentUrl": "https://www.santaradio.co.uk/assets/img/official-santa-voice-guy-harris.jpg",
  "creator": {
    "@type": "Person",
    "@id": "https://www.voiceoverguy.co.uk/#guyharris"
  },
  "creditText": "Guy Harris – The Voice of Santa",
  "license": "https://www.voiceoverguy.co.uk"
}
</script>

<!-- Schema Markup for WebPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.santaradio.co.uk/#webpage",
  "url": "https://www.santaradio.co.uk/",
  "name": "Santa Radio – The World's Best Christmas Radio Station",
  "description": "Non-stop Christmas music and festive fun 24/7. Listen online or on the official iOS app.",
  "primaryImageOfPage": {
    "@id": "https://www.santaradio.co.uk/#santaimage"
  },
  "mainEntity": {
    "@id": "https://www.santaradio.co.uk/#radiostation"
  }
}
</script>

<!-- Add primaryImageOfPage to reinforce Google thumbnail selection -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://www.santaradio.co.uk/#primaryimage",
  "url": "https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg",
  "contentUrl": "https://www.santaradio.co.uk/assets/img/santa-radio-logo.jpg",
  "width": 1200,
  "height": 630
}
</script>

<!-- Aggregate Rating Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "@id": "https://www.santaradio.co.uk/#rating",
  "itemReviewed": {
    "@type": "RadioStation",
    "@id": "https://www.santaradio.co.uk/#radiostation"
  },
  "ratingValue": "4.7",
  "bestRating": "5",
  "ratingCount": "1100",
  "reviewCount": "1100"
}
</script>

<!-- FAQ Schema (Google & AI Overview Supported) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.santaradio.co.uk/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I listen to Santa Radio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can listen online at SantaRadio.co.uk or on the official iOS app for a fully interactive experience."
      }
    },
    {
      "@type": "Question",
      "name": "Is Santa Radio free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Santa Radio is completely free with no adverts and no sign-up required."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a Santa Radio app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Santa Radio iOS app is available on the App Store and packed with interactive festive features."
      }
    },
    {
      "@type": "Question",
      "name": "What’s a great free Christmas radio station?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Santa Radio offers a fantastic free option to listen to the best Christmas music all day long, with festive fun and Santa’s messages."
      }
    },
    {
      "@type": "Question",
      "name": "Is Santa Radio British?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Santa Radio delivers a traditional British Christmas 24 hours a day, with cheeky Santa banter and the best Christmas songs you know and love."
      }
    }
    ,
    {
      "@type": "Question",
      "name": "Who is the Voice of Santa on Santa Radio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Santa Guy Harris is the Voice of Santa on Santa Radio. He is also heard on Heart, BBC Radio 2, BBC Radio 1, Capital, ITV and GB News among others."
      }
    }
  ]
}
</script>
<!-- BreadcrumbList Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://www.santaradio.co.uk/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.santaradio.co.uk/"
    }
  ]
}
</script>
</head>



<body id="page-top" onload="myFunction2();">


	
	
<nav id="mainNav" class="navbar navbar-default navbar-fixed-top" style="background-color:white">
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
            </button>
            <a class="navbar-brand page-scroll" href="https://www.santaradio.co.uk">
                <img src="assets/img/santa-radio-logo.png" alt="Santa Radio" title="Santa Radio" height="30px">
            </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <?php include 'newmenu.php'; ?>
            </ul>
        </div>

    </div>
</nav>
    
  
<section class="cta10">
<div class="cta10-content">
<div class="container" style="text-align:center; color:#FFFFFF">
<br><br>
<img src="assets/img/santa-radio-logo.png" alt="Santa Messages - Free Christmas Apps - Best Father Christmas downloads" title="Santa Messages - Free Christmas Apps - Best Father Christmas downloads" class="img-responsive center-block " width="384">
    
	
<style>				
.glow {
  text-align: center;
  animation: glow 1.2s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e60073, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073; }
  to {text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6; }}

</style>
	
	
 <?php echo html_entity_decode(Config::get('seo.s4')); ?>
				
  
 
<div class="col-md-12" align="center">
<style>.pulse {
 display: block;
border-radius: 50%;
box-shadow: 0 0 0 rgba(117,26,26, 0.8);
 animation: pulse 2s infinite;
}
.pulse:hover {
 
}

@-webkit-keyframes pulse {
  0% {-webkit-box-shadow: 0 0 0 0px rgba(117,26,26, 0.8);}
  70% {-webkit-box-shadow: 0 0 0 20px rgba(117,26,26, 0);}
  100% {-webkit-box-shadow: 0 0 0 0 rgba(117,26,26, 0);}
}
@keyframes pulse {
  0% {
	 -moz-box-shadow: 0 0 0 0 rgba(117,26,26, 0.8);
    box-shadow: 0 0 0 0 rgba(117,26,26, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 20px rgba(117,26,26, 0);
      box-shadow: 0 0 0 20px rgba(117,26,26, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(117,26,26, 0);
      box-shadow: 0 0 0 0 rgba(117,26,26, 0);
  }
}</style>
					
				


<a style="cursor:pointer;" onclick="play()"><img style=" margin: 10px" id="myImage2" src="https://www.santaradio.co.uk/new-play.png" alt="Santa Radio" title="Santa Radio" class="img-responsive pulse" width="250"></a>
			
  <div id="tableHolder" style="margin-bottom: 30px; margin-top: -30PX;"></div>
  <p style="margin-top:15px; text-align:center; color:white;">
   
<!-- Hosted by <a href="https://www.voiceoverguy.co.uk/santa-voice"
                 target="_blank" rel="noopener noreferrer" style="color:#fff; text-decoration:underline;">
      the UK's real Voice of Santa
    </a>.
-->

  </p>
<hr style="width:100%; margin:25px auto; border:0; height:1px; background:rgba(255,255,255,0.5); box-shadow:0 0 6px rgba(255,255,255,0.5);">
					

			 
<div style="display:none">
<audio onloadstart="this.volume=1" id="player" onerror="playbackFailed()" controls ><source src="<?php echo Config::get('seo.mainstream') ?>" type="audio/mp3">Your browser does not support the audio element.</audio>


<audio controls>
  <source src="<?php echo Config::get('seo.mainstream') ?>" type="audio/ogg">
  <source src="<?php echo Config::get('seo.mainstream') ?>" type="audio/mpeg">
Your browser does not support the audio element.
</audio> 
	</div>
					
			 
 <script>
					 
 function play() {
    var audio = document.getElementById('player');
    if (audio.paused) {
        audio.play();
		  document.getElementById('myImage2').src='new-stop.png';
		 console.log('PLAY PRESSED');
    }else{
        audio.pause();
	
			  document.getElementById('myImage2').src='new-play.png';
		 console.log('PAUSED PRESSED');
		
    }
	$('player').on("error", function (e) {
		
		  document.getElementById('myImage2').src='new-play.png';	
    });
}

</script>
		

                        <!---- MARK FORM ---->


<!-- Begin Brevo Form -->
<!-- START - We recommend to place the below code in head tag of your website html  -->
<style>
  @font-face {
    font-display: block;
    font-family: Roboto;
    src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 600;
    src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
  }

  @font-face {
    font-display: fallback;
    font-family: Roboto;
    font-weight: 700;
    src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
  }

  #sib-container input:-ms-input-placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container input::placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container textarea::placeholder {
    text-align: left;
    font-family: Helvetica, sans-serif;
    color: #c0ccda;
  }

  #sib-container a {
    text-decoration: underline;
    color: #2BB2FC;
  }
</style>
<link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
<!--  END - We recommend to place the above code in head tag of your website html -->

<!-- START - We recommend to place the below code where you want the form in your website html  -->
<style>
  /* Fix invisible typing issue */
  #sib-container input.input {
    color: #000 !important;
  }
  #sib-container input.input::placeholder {
    color: #c0ccda !important;
  }
</style>
<h2 style="
  font-family: 'Libre Baskerville', serif;
  font-size: 42px;
  font-weight: 700;
  color: #eac45d;
  text-align: center;
  text-shadow: 0 0 8px rgba(0,0,0,0.6);
  margin-bottom: -10px;
">
  FREE Personalised Santa Message
</h2>
<div class="sib-form" style="text-align: center; background: transparent; padding-top:40px; padding-bottom:40px;">
  <div id="sib-form-container" class="sib-form-container">
    <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          The Elf&#039;s say your subscription could not be saved. Please try again.
                      </span>
      </div>
    </div>
    <div></div>
    <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-color:#13ce66;max-width:540px;">
      <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
        <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
          <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
        </svg>
        <span class="sib-form-message-panel__inner-text">
                          Thank you, Santa is waiting with your message. 
                      </span>
      </div>
    </div>
    <div></div>
    <div id="sib-container" class="sib-container--large sib-container--vertical" style="text-align:center; background-color:#C50202; max-width:540px; border-radius:3px; border-width:1px; border-color:#C0CCD9; border-style:solid; direction:ltr">
      <form id="sib-form" method="POST" action="https://ca61f856.sibforms.com/serve/MUIFAIhwMPfiiiUqA62A5oRCcQ2XECHclY6K0JK12yZa4946j_cxBcCMX8WnaypiuD6VHXvsr9zgBtd6_tUE0n7GM7uFeEulcTQ1PzxK_Kd9ZDTOJwqVY14JvjFMteJWKB8F_P-ZSI90U_6rKp_fkXzOaAoFp24iM5u6-JBoORa8GZw3a6yYVMg05C2u2AYJ2KPBf_-cZa9yuiCo" data-type="subscription">
        <div style="padding: 8px 0;">
          <div class="sib-form-block" style="font-size:18px; text-align:center; font-family:Helvetica, sans-serif; color:#fcfcfc; background-color:transparent; text-align:center">
            <div class="sib-text-form-block">
              <p>Want to make Christmas magical? Get a FREE, instantly downloadable personalised message from Santa for your child. No waiting.</strong></p>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="FIRSTNAME" name="FIRSTNAME" autocomplete="off" placeholder="FIRSTNAME" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input " maxlength="200" type="text" id="LASTNAME" name="LASTNAME" autocomplete="off" placeholder="LASTNAME" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <div class="sib-input sib-form-block">
            <div class="form__entry entry_block">
              <div class="form__label-row ">

                <div class="entry__field">
                  <input class="input " type="text" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="EMAIL" data-required="true" required />
                </div>
              </div>

              <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:Helvetica, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-color:#ff4949;">
              </label>
            </div>
          </div>
        </div>
        <div style="padding: 8px 0;">
          <!-- Mini Player Inside Box -->
          <div style="margin-top:15px; text-align:center; padding-bottom:20px;">
            <p style="color:white; margin-bottom:5px; font-size:16px;">
              🎧 Hear an example of your free custom Santa message:
            </p>
            <audio controls style="width:100%; max-width:320px; border-radius:30px;">
              <source src="https://www.santaradio.co.uk/assets/audio/santa-radio-free-personalised-message-arabella.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
          <!-- End Mini Player Inside Box -->
          <div class="sib-form-block" style="text-align: center">
            <button class="sib-form-block__button sib-form-block__button-with-loader" style="font-size:16px; text-align:center; font-weight:700; font-family:Helvetica, sans-serif; color:#FFFFFF; background-color:#a6ae09; border-radius:10px; border-width:0px;" form="sib-form" type="submit">
              <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512" style="">
                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
              </svg>
              GET YOUR FREE SANTA MESSAGE NOW
            </button>
          </div>
        </div>


        <input type="text" name="email_address_check" value="" class="input--hidden">
        <input type="hidden" name="locale" value="en">
      </form>
    </div>
  </div>
</div>



<!-- START - We recommend to place the below code in footer or bottom of your website html  -->
<script>
  window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
  window.LOCALE = 'en';
  window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The Elf's say the information provided is invalid. Please review the field format and try again.";

  window.REQUIRED_ERROR_MESSAGE = "The Elf's say this field cannot be left blank. ";

  window.GENERIC_INVALID_MESSAGE = "The Elf&#039;s say the information provided is invalid. Please review the field format and try again.";




  window.translation = {
    common: {
      selectedList: '{quantity} list selected',
      selectedLists: '{quantity} lists selected',
      selectedOption: '{quantity} selected',
      selectedOptions: '{quantity} selected',
    }
  };

  var AUTOHIDE = Boolean(0);
</script>

<script defer src="https://sibforms.com/forms/end-form/build/main.js"></script>


<!-- END - We recommend to place the above code in footer or bottom of your website html  -->
<!-- End Brevo Form —>




			<!---- END MARK FORM ---->

<!---- ADVERTISE HERE ---->

<!--
	
	<div class="col-md-12">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <div class="feature-item" style="text-align: center;">
          <a href="mailto:santa@santaradio.co.uk?subject=Advertise%20on%20Santa%20Radio" style="text-decoration: none;">
            <img src="advertise-santa-radio.jpg" 
                 alt="Advertise on Santa Radio – The World's Biggest Online Christmas Radio Station"
                 class="img-responsive center-block img-rounded">
            <br>
            <strong>Reach thousands of potential customers who love Christmas!</strong><br>
            Get in touch to place your banner here.
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
	
-->	
	
	<!--
	

<div style="width:100%;height:100px;border-bottom: 1px solid rgba(255,255,255,.25); margin-top: -110px; margin-bottom: 10px;"></div>
	
	
			
<div class="col-md-12">
<div class="container-fluid"> 

<p style="text-align: center;font-size: 28px;"><?php echo html_entity_decode(Config::get('seo.fs13')); ?></p>

<div class="row">
							
 <div class="col-sm-3">
<div class="feature-item">
<a href="<?php echo html_entity_decode(Config::get('seo.fs1')); ?>" style="text-decoration: none;" target="_blank">
<img src="https://www.santaradio.co.uk/assets/img/home-ad2.jpg" alt="Santa Video" title="Santa Video" class="img-responsive center-block img-rounded">
<p class="text-muted" style="font-size: 20px;"><?php echo html_entity_decode(Config::get('seo.fs2')); ?><br>
<span style="font-size: 13px;"><?php echo html_entity_decode(Config::get('seo.fs3')); ?></span></p> 
</a>                                
</div></div>
                         
												
<div class="col-sm-3">
<div class="feature-item">
<a href="<?php echo html_entity_decode(Config::get('seo.fs4')); ?>" style="text-decoration: none;" target="_blank">
<img src="https://www.santaradio.co.uk/assets/img/home-ad5.jpg" alt="Santa Video" title="Santa Video" class="img-responsive center-block img-rounded">
 <p class="text-muted" style="font-size: 20px;"><?php echo html_entity_decode(Config::get('seo.fs5')); ?><br>
<span style="font-size: 13px;"><?php echo html_entity_decode(Config::get('seo.fs6')); ?></span></p>  
</a>
</div> </div>
							
 <div class="col-sm-3">
<div class="feature-item">
<a href="<?php echo html_entity_decode(Config::get('seo.fs7')); ?>" style="text-decoration: none;" target="_blank">
<img src="https://www.santaradio.co.uk/assets/img/home-ad4.jpg" alt="Santa Video" title="Santa Video" class="img-responsive center-block img-rounded">
<p class="text-muted" style="font-size: 20px;"><?php echo html_entity_decode(Config::get('seo.fs8')); ?><br>
<span style="font-size: 13px;"><?php echo html_entity_decode(Config::get('seo.fs9')); ?></span></p>  </a>                                 
</div></div>
							
<div class="col-sm-3">
<div class="feature-item">
<a href="<?php echo html_entity_decode(Config::get('seo.fs10')); ?>" style="text-decoration: none;" target="_blank">
<img src="https://www.santaradio.co.uk/assets/img/home-ad3.jpg" alt="Santa Video" title="Santa Video" class="img-responsive center-block img-rounded">
<p class="text-muted" style="font-size: 20px;"><?php echo html_entity_decode(Config::get('seo.fs11')); ?><br>
<span style="font-size: 13px;"><?php echo html_entity_decode(Config::get('seo.fs12')); ?></span></p>   </a>                                 
</div></div>
                           
													

</div>	 	 
</div></div>

-->
<div class="overlay"></div>
</section>
		
		
		
			
			<!......SOUNDBOARD FORM......>
			
			
			
			
<section id="soudboard" class="cta3">
<div class="cta3-content">
<div class="container">
<div style="text-align:center; ">
<h2>Santa Soundboard</h2>
<p style="color:#FFFFFF">Press the buttons to hear Santa speak! Have fun exploring festive phrases straight from the North Pole! <br>Or <a href="https://apps.apple.com/gb/app/santa-radio/id1021183593" target="_blank" title="Santa Soundbaord"><strong>download the free app</strong></a> for even more Christmas fun!</a>. </p>						
</div>
		          
<div style="text-align:center">
<button id="b01" class="xmasbutton" style="margin:20px;width:230px;">Are you asleep</button>
<button id="b02" class="xmasbutton" style="margin:20px;width:230px">Been Naughty</button>
<button id="b03" class="xmasbutton" style="margin:20px;width:230px;">Cookies</button>
<button id="b05" class="xmasbutton" style="margin:20px;width:230px;">It's Christmas</button>

<button id="b06" class="xmasbutton" style="margin:20px;width:230px;">Jingle Bells</button>
<button id="b09" class="xmasbutton" style="margin:20px;width:230px;">Making a List</button>
<button id="b10" class="xmasbutton" style="margin:20px;width:230px;">Tis the Season</button>
<button id="b11" class="xmasbutton" style="margin:20px;width:230px;">Very Quiet</button>

<button id="b13" class="xmasbutton" style="margin:20px;width:230px;">Yes 1</button>
<button id="b14" class="xmasbutton" style="margin:20px;width:230px;">Yes 2</button>
<button id="b15" class="xmasbutton" style="margin:20px;width:230px;">No 1</button>
<button id="b16" class="xmasbutton" style="margin:20px;width:230px;">No 2</button>

<button id="b04" class="xmasbutton" style="margin:20px;width:230px;">Happy Holidays</button>
<button id="b08" class="xmasbutton" style="margin:20px;width:230px;">Merry Christmas</button>
<button id="b07" class="xmasbutton" style="margin:20px;width:230px;">Naughty or Nice</button>
<button id="b12" class="xmasbutton" style="margin:20px;width:230px;">Would You Like?</button>
</div>
 
</div></div>
<div class="overlay"></div>
</section>
    
    
			
			








			
			
		<!......SANTA CAM......>


<section id="" class="cta2">
<div class="cta2-content">
<div class="container">
				
<style>			
.video-container {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
	
}
.video-container iframe {
	position: absolute;
	top: 20px;
	left: 20px;
	width: 85%;
	height: 85%;
}</style>
				

<div style="text-align: center"><?php echo html_entity_decode(Config::get('seo.fs16')); ?></div>
	
	
				
<div class="video-container">
	

	
	<iframe width="560" height="315" src="https://www.youtube.com/embed/<?php echo Config::get('seo.fs14') ?>?rel=0&amp;autoplay=1&amp;mute=1&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	

	
<img style="top:0px; margin-left: 0px; width: 100%; height: 100%; position:absolute; z-index:9" src="https://www.santaradio.co.uk/oldtv3.png" alt="Classic TV" title="Classic TV">	
</div>

			
</div></div> 
<div class="overlay"></div>
</section>
		

			
			
			<!......MUG SHOTS......>
			
			
			
			
			
			
			
<section id="" class="cta2">
 <div class="cta2-content">
  <div class="container">
	  <a href="https://www.santaradio.co.uk/mugshots/all" title="Santa Radio Celebrity Mugshots">
<img src="santa-radio-celebrity-mugshots.png" alt="Santa Radio Celebrity Mugshots" title="Santa Radio Celebrity Mugshots" class="img-responsive center-block" width="220">	
	  </a>
<div style="text-align: center;text-decoration: none; color: white;">
<h2>Mug Shots</h2>
<p>We gave a Santa Radio Mug to our Autograph hunting Elf. You won&#039;t believe how many he got...<br>
<a href="https://www.santaradio.co.uk/mugshots/all" target="_blank" title="Santa Mug Shots"><strong>Click here</strong></a> to see over 600 more Celebs with mugs</p></div>
	  
	  
	  
	  
	  
	  
	  <?php
$mysqli = new mysqli("localhost", "cl57-mugshots", "earwax69", "cl57-mugshots");

// Check connection
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: " . $mysqli->connect_error);
}

$strSQL = "SELECT * FROM messages2 ORDER BY RAND() LIMIT 4";
$result = $mysqli->query($strSQL);

if (!$result) {
    die("Error Query [" . $strSQL . "] - " . $mysqli->error);
}

while ($objResult = $result->fetch_assoc()) {
?>
    <div class="col-sm-3" style="min-height: 350px; text-align: center;">
        <a style="text-decoration: none; color: white" 
           href="mugshots/<?= $objResult["song"] ?>" 
           title="<?= $objResult["artist"] ?> Santa Radio Celebrity Mugshots">

            <img src="../mugshot-images/<?= $objResult["image"]; ?>" 
                 width="100%" 
                 class="img-responsive img-rounded" 
                 title="<?= $objResult["artist"] ?> Santa Radio Celebrity Mugshots" 
                 alt="<?= $objResult["artist"] ?> <?= $objResult["link"] ?> - Santa Radio Celebrity Mugshots">

            <h2 style="margin-top: 5px; font-size: 25px"><?= $objResult["artist"] ?></h2>
            <p style="margin-top: -16px"><?= $objResult["link"] ?></p>
        </a>
    </div>
<?php
}
$mysqli->close();
?>


	    


</div></div> 
<div class="overlay"></div>
</section>
		
		












	 
		

<!--

<section id="" class="" style="background-color:#f2f1ef">
<div class="cta3-content" style="margin-bottom:-50px">
<div class="container" style="margin-top: -60px; margin-bottom: -20px">
				          
<div class="col-md-6" style="text-align:center; ">
<a href="https://festivestudio.co.uk/i/santaradio/personalised-video" target="_blank">
<img src="santa-radio-personalised-video-for-childrens.jpg" alt="Santa Video" title="Santa Video" class="img-responsive center-block ">
</a></div>
				
<div class="col-md-6" style="text-align:left; margin-top: 10px;">
<p style="margin-top:-5px;font-size: 20px;font-weight: bold; ">Magical Christmas Experience</p>
<p style="font-size: 33px; color: firebrick; ">Personalised Video From<br>The North Pole</p>			
<p style="font-size: 15px">
Ho Ho Ho… There’s a video from The North Pole! Join Santa (or Father Christmas) and his Elves as they get ready on Christmas Eve.<br><br>
Have your children &#039;teleported&#039; to the North Pole and meet REAL Elves.
<br><br>
Watch as Santa (or Father Christmas) appears, says their name and also knows what they would like for Christmas. Their name appears on the "Nice List” too. After a tour all around the Grotto, they are told to go to bed nice early as he departs en route to their home.
</p>	
</div></div>
				
 <div align="center" style="margin-top: 50px;">
	 
	
<a href="<?php echo html_entity_decode(Config::get('seo.fs19')); ?>" class="xmasbutton" target="_blank">Personalise Now</a>
</div></div>
</section>
    
-->
			
			
		


    
    
    
    
    


    
    



<section id="contact" class="contact bg-primary">
<div class="container">
<h2>Contact Santa Radio</h2>
<p>For Press or Corporate, feedback and suggestions, get in touch.</p>
<div class="row">
<div class="col-md-12">
<a href="mailto:santa@santaradio.co.uk?subject=Contact%20Santa%20Radio&amp;body=How can we help?" class="xmasbutton">Send Email</a>
</div></div>
</section>



<!-- Subtle Voice Attribution -->
<!--
<div style="text-align:center; color:#fff; font-size:14px; background-color:#a11; padding:15px 0;">
  <p style="margin:0;">
    🎅 Brought to life by the 
    <a href="https://www.voiceoverguy.co.uk/the-official-voice-of-santa" target="_blank" title="The Official Voice of Santa" style="color:#fff; text-decoration:underline;">
      Voice of Santa
    </a>, 
    <a href="https://www.voiceoverguy.co.uk" target="_blank" title="British Male Voiceover" style="color:#fff; text-decoration:underline;">
      British Voiceover Artist Guy Harris
    </a>.
-->

  </p>
</div>
<!-- End Voice Attribution -->
	
	
	
	
	
	
	

<script>
    $(document).ready(function(){
        ion.sound({
            sounds: [
                {name: "Asleep"},
                {name: "Been Naughty"},
				{name: "Cookies"},
				{name: "Happy Holidays"},
				{name: "ItsChristmas"},
				{name: "Jingle Bells"},
				{name: "Naughty or Nice"},
				{name: "Merry Christmas"},
				{name: "Making a List"},
				{name: "Tis the Season"},
				{name: "Very Quiet"},
				{name: "WhatWouldYouLike"},
				{name: "Yes1"},
				{name: "Yes2"},
				{name: "No1"},
				{name: "No2"}
				
            ],
            path: "assets/audio/",
            preload: true,
            volume: 1.0
        });


        $("#b01").on("click", function(){
            ion.sound.play("Asleep");
        });

        $("#b02").on("click", function(){
            ion.sound.play("Been Naughty");
        });
		$("#b03").on("click", function(){
            ion.sound.play("Cookies");
        });
		$("#b04").on("click", function(){
            ion.sound.play("Happy Holidays");
        });
		$("#b05").on("click", function(){
            ion.sound.play("ItsChristmas");
        });
		$("#b06").on("click", function(){
            ion.sound.play("Jingle Bells");
        });
		$("#b07").on("click", function(){
            ion.sound.play("Naughty or Nice");
        });
		$("#b08").on("click", function(){
            ion.sound.play("Merry Christmas");
        });
		$("#b09").on("click", function(){
            ion.sound.play("Making a List");
        });
		$("#b10").on("click", function(){
            ion.sound.play("Tis the Season");
        });
		$("#b11").on("click", function(){
            ion.sound.play("Very Quiet");
        });
		$("#b12").on("click", function(){
            ion.sound.play("WhatWouldYouLike");
        });
		$("#b13").on("click", function(){
            ion.sound.play("Yes1");
        });
		$("#b14").on("click", function(){
            ion.sound.play("Yes2");
        });
		$("#b15").on("click", function(){
            ion.sound.play("No1");
        });
		$("#b16").on("click", function(){
            ion.sound.play("No2");
        });
		


    });
</script>


       
   

   <?php include 'assets/php/footer.php';?>
   

    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="assets/js/new-age.js"></script>
    <script type="text/javascript" src="assets/js/form-validator.min.js"></script>  
    <script type="text/javascript" src="assets/js/contact-form-script.js"></script>
    


    <script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>
    
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68374162-1', 'auto');
  ga('send', 'pageview');

</script>

<script type="text/javascript" src="assets/js/snowstorm.js"></script>

</body>

</html>
