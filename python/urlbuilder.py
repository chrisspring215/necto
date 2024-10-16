f = open('../../js/events.js', 'r')
file_contents = f.read()
import re
# removes front part of object
a = file_contents.partition('var eventsJSON = [')[2]

# removes back part of object
b = a.partition(']')[0]

#removes all spacing
c = re.sub('[\s+]', '', b)


e = re.split('"special-events/""(.*?)","eventSocial":"', c)

h = len(e)

def makePage(url) :
	w = open('../../special-events/'+url,'w')

	message = """<!doctype html>
<html class="no-js" lang="">
  <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title id="pageTitle"><!-- CREATE WITH JS --></title>
      <meta name="description" id="pageDesc" content="">
      <base href="" id="baseTag">
      <script src="../js/baseTagTesting.js"></script>
      
      <!-- Robots -->
      <meta name="robots" content="index,follow">
      <!-- Search Console -->
      <meta name="google-site-verification" content="verification_token">
      <meta name="url" content="https://www.necto.com/">
      <!-- Geo tags -->
      <meta name="ICBM" content="42.279187, -83.742423">
      <meta name="geo.position" content="latitude;longitude">
      <meta name="geo.region" content="US-MI]">
      <meta name="geo.placename" content="Ann Arbor">
      <!-- Canonical TODO: Set up JS to populate this -->
      <link href="https://www.necto.com" rel="canonical">
      <!-- Author -->
      <link href="https://plus.google.com/110171494641120366973" rel="author">
      <link href="https://plus.google.com/110171494641120366973" rel="me" type="text/html">
      <link href="mailto:info@necto.com" rel="me">
      <link href="tel:+17349945835" rel="me">
      <!-- favicon.ico-->
      <link href="favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
      <link href="favicon/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32">
      <link href="favicon/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16">
      <link href="favicon/manifest.json" rel="manifest">
      <link href="favicon/safari-pinned-tab.svg" rel="mask-icon" color="#ed1968">
      <link href="favicon/favicon.ico" rel="shortcut icon">
      <meta name="msapplication-config" content="favicon/browserconfig.xml">
      <meta name="theme-color" content="#3bddff">
      <!-- Facebook OG EVENT PAGES Data -->
      <meta property="og:type" content="article">
      <meta property="og:title" content="" id="ogTitle">
      <meta property="og:site_name" content="Necto Nightclub">
      <meta property="og:url" content="" id="ogURL">
      <meta property="og:image" content=""  id="ogImg">
      <!-- Twitter Card Data -->
      <meta name="twitter:card" content="summary">
      <meta name="twitter:site" content="@Necto">
      <meta name="twitter:title" content=""  id="twitterTitle">
      <meta name="twitter:description" content="" id="twitterDesc">
      <!--
      <script src="js/vendor/modernizr-2.8.3.min.js"></script>
      -->
      <!-- Styles -->
      <link href="css/main.css" rel="stylesheet">
      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet"> 
      
  </head>
  <body>
      <!--[if lt IE 8]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
      <![endif]-->
    <!-- MOBILE GLOBAL NAV -->
    <header class="mobile-global-nav">
      <div class="top-bar">
        <a href="index.html" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
        <nav class="global-nav" >
          <span id="mobileMenuButton" onclick="openMobileNav()">MENU</span>
        </nav>
      </div>
      <div class="mobile-global-nav-modal-hidden row" id="mobileGlobalNav">
        <ul id="mobileHeaderNav">
          <li id="weeklyMobileNavcontainer" class="weeklyMobileNavLink"></li>
        </ul> 
      </div>
    </header>
    <!-- DESKTOP GLOBAL NAV -->
    <header class="full-global-nav">
        <a href="index.html" class="logo"><img src="img/necto-logo.png" alt="The logo for the Necto Nightclub in Ann Arbor, Michigan."></a>
        <nav class="global-nav" id="desktopHeaderMainNav"></nav>
        <br>
        <nav class="weekly-nav" id="desktopHeaderWeeklyNav"></nav>
    </header>
    <main class="sub-page">
      <!-- SPECIAL EVENT -->
      <div class="row centered-cols section-header">
        <div class="col col-12-xs col-8-md" id="specialEventPageContent">
          <!-- INSERT SPECIAL EVENT CONTENT HERE -->
        </div>
      </div>
    </main>
    <footer>
      <div class="row">
        <div class="col col-12-xs col-3-sm">
          <div itemscope itemtype="http://schema.org/Organization">
              <span itemprop="name">Necto Nightclub</span><br>
              <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <a href="directions.html"><span itemprop="streetAddress">516 E. Liberty</span><br>
                  <span itemprop="addressLocality">Ann Arbor</span><span>, </span><span itemprop="addressRegion">MI</span> 
                  <span itemprop="postalCode">48104</span></a>
              </div>
              Info:  <span itemprop="telephone"><a href="tel:17349945436">734-994-5436</a></span><br>
              Phone: <span itemprop="telephone"><a href="tel:17349945835">734-994-5835</a></span><br>
              Phone: <span itemprop="email"><a href="mailto:info@necto.com">info@necto.com</a></span>
          </div>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerWeeklyNav">
            </ul>
          </nav>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerMainNav">
            </ul>
          </nav>
        </div>
        <div class="col col-12-xs col-3-sm">
          <nav>
            <ul id="footerSecondaryNav">
            </ul>
          </nav>
        </div>
      </div>
    </footer>
    <!-- DO WE NEED JQUERY?
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
    -->
    <script src="js/plugins.js"></script>
    <script src="js/events.js"></script>
    <script src="js/main.js"></script>
    <!-- Builds all navigtion -->
    <script>buildNavs()</script>
    <!-- Populates the Special Events on the Special Event Page -->
    <script>specialEventPage()</script>
    <!-- Google Analytics -->
    <script type="text/javascript">
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-71282212-1', 'auto');
      ga('send', 'pageview');
    </script>
  </body>
</html>
"""

	w.write(message)

liszt = (i for i in range(1,h) if i%2!=0)
for i in liszt:
    makePage(e[i])


f.close()