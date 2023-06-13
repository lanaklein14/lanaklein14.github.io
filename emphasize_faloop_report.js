// ==UserScript==
// @name         Emphasize faloop report
// @namespace    https://github.com/lanaklein14/lanaklein14.github.io
// @version      0.1
// @description  When 'event-detail open' element is added, find and emphasize the report by Faloop.
// @author       You
// @match        https://ffxiv-the-hunt.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ffxiv-the-hunt.net
// @grant        none
// @downloadURL  https://github.com/lanaklein14/lanaklein14.github.io/raw/master/emphasize_faloop_report.js
// @updateURL    https://github.com/lanaklein14/lanaklein14.github.io/raw/master/emphasize_faloop_report.js
// ==/UserScript==

;(function () {
  'use strict'
  const FALOOP_USER_ID = 'c4a17639-159f-...'

  function initialize() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes[0]?.className == 'event-detail open') {
          const reports =
            mutation.addedNodes[0].querySelectorAll('.event-detail-log')
          reports.forEach((report) => {
            if (
              report.querySelector('.user-id').textContent == FALOOP_USER_ID
            ) {
              report.querySelector('rect').style.fill = '#5580C8'
            }
          })
        }
      })
    })
    observer.observe(document.body, {
      childList: true,
    })
  }

  function wait_for_page_load() {
    if (!document.querySelector('body')) {
      setTimeout(wait_for_page_load, 1000)
      console.debug('wait for page load')
      return
    }
    setTimeout(initialize, 1000)
  }
  wait_for_page_load()
})()
