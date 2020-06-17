document.querySelector('body').addEventListener( 'DOMNodeInserted', function ( event ) {
    if( event.target.nodeName == 'SECTION' && event.target.classList.contains('clump-content')) {
      let hasFaloopReport = false;
      event.target.querySelectorAll('TEXT.left').forEach(textNode => {
        if (textNode.textContent == 'id: c4a17639-159f-...') {
          hasFaloopReport = true;
          textNode.textContent = 'Faloop!';
        }
      });
      if (!hasFaloopReport) {
        let button = document.createElement('Button');
        button.innerText = 'Add this report to Faloop!';
        button.addEventListener('click', function( event ) {
          location.href = 'https://faloop.app?worldid=47&mobid=4096&time=100000000';
        });
        event.target.appendChild(button);
      }
    }
}, false );
  