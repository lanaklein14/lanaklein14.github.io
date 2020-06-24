# Custom JavaScripts for ffxiv-the-hunt.net -> Faloop! integration

## Features

### Custom JavaScript for ffxiv-the-hunt.net

* Overwrite the CSS

  Set blue color to the reports which is reported by Faloop. Also replace the uid string to "Faloop!".
  
* Add "Open Faloop!" link

  Add integration link to the S-mob reports (exclude forgiven rebellion) which is NOT reported by Faloop.
  It link and lauches Faloop App in new window with following URL.
  
  https://faloop.app/[worldname]?mobid=[mobid]&time=[timeofdeath]
  
  Parameter | Description
  ------------ | -------------
  worldname | world name in lowercase string
  mobid | mob id in integer
  timeofdeath | time of death in unixtime millisec. median of the candidate reports

### Custom JavaScript for Faloop!

* Automatically open the "Report" tab and set default Time of Death

  When Faloop is launched with mobid and time URL query parametes, it tries to open the "Report" tab and set the default Time of Death.
  The user still have to confirm the input and submit the report manually, but it will reduce the chance or input mistakes.

## Sample movie

https://lanaklein14.github.io/lanaklein14.github.io/hunt-faloop-integration.mp4

## Installation (using "User JavaScript and CSS" extension)

1. Install the prerequisite extension
   1. Install [User JavaScript and CSS](https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld) extension to Chrome.

1. Import custom javascripts for integration
   1. Click "User JavaScript and CSS" extension "Gear" icon to open to the Top page.
   1. In "Libraries" tab, add the following 2 javascript files.
   
      Name | URL
      ------------ | -------------
      side_huntnet.js | https://lanaklein14.github.io/lanaklein14.github.io/side_huntnet.js
      side_faloop.js | https://lanaklein14.github.io/lanaklein14.github.io/side_faloop.js
      
      <img src="images/UJSC_libraries.png" width="500px">

   1. Close the page.

1. Create rule for ffxiv-the-hunt.net
   1. Navigate to https://ffxiv-the-hunt.net/ 
   1. Click "User JavaScript and CSS" extension "+Add new" button.
   1. Enter "//" in JS pane to enable saving. Leave the CSS pane empty.
   1. Click the hamburger button (next to the save button) and check "side_huntnet.js".

      <img src="images/UJSC_rule_huntnet.png" width="500px">

   1. Click the save button.
   1. Close the page.
   
1. Create rule for Faloop!
   1. Navigate to https://faloop.app/ 
   1. Click "User JavaScript and CSS" extension "+Add new" button.
   1. Enter "//" in JS pane to enable saving. Leave the CSS pane empty.
   1. Click the hamburger button (next to the save button) and check "side_faloop.js".

      <img src="images/UJSC_rule_faloop.png" width="500px">

   1. Click the save button.
   1. Close the page.
