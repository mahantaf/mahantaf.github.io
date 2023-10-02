// Reference to the creative's various properties and elements.
var creative = {}
var dynamicBuilder = {}
dynamicBuilder.data = []

/**
 * Called on the window load event.
 */
function preInit() {
  // live
  if (Enabler.isInitialized()) {
    // check if parent page has loaded
    if (Enabler.isPageLoaded()) {
      politeLoad()
    } else {
      Enabler.addEventListener(
        studio.events.StudioEvent.PAGE_LOADED,
        politeLoad,
      )
    }
  } else {
    // if local emulate polite load
    Enabler.addEventListener(studio.events.StudioEvent.INIT, preInit)
  }
}

/**
 * load required scripts
 */
function politeLoad() {
  Enabler.loadScript(
    'https://s0.2mdn.net/creatives/assets/1951882/dynamicBuilder.min.js',
    init,
  )
}

/**
 * The Enabler is now initialized and any extra modules have been loaded.
 */
function init() {
  initializeDynamicData()
}

/**
 * Setup the creative data obj here
 */
function initializeDynamicData() {
  creative.data = {}
  creative.data.url =
    dynamicContent.Nissan_US_DCO_HISP_Creative_MobileTablet[0].Orca_json
  creative.exit = {}
  creative.exit.ctaBGExit =
    dynamicContent.Nissan_US_DCO_HISP_Creative_MobileTablet[0].exiturl_ctaBackground.Url
  creative.exit.preframeUrl =
    dynamicContent.Nissan_US_DCO_HISP_Creative_MobileTablet[0].exiturl_preframe.Url
  creative.exit.ctaOneExit =
    dynamicContent.Nissan_US_DCO_HISP_Creative_MobileTablet[0].exiturl_ctaOne.Url
  creative.exit.ctaTwoExit =
    dynamicContent.Nissan_US_DCO_HISP_Creative_MobileTablet[0].exiturl_ctaTwo.Url
  buildData()
}

function buildData() {
  var xobj = new XMLHttpRequest()
  var url = creative.data.url
  xobj.overrideMimeType('application/json')
  xobj.open('GET', url, true)
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      var data = xobj.responseText
      dynamicBuilder.data = JSON.parse(data)
      buildDOM('.dynamicAdvertContainer', dynamicBuilder.data)
      setupDom()
      // if ad is visible
      if (Enabler.isVisible()) {
        show()
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show)
      }
    }
  }
  xobj.send(null)
}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {}
  creative.dom.mainContainer = document.querySelector('.dynamicAdvertContainer')
  addListeners()
}

/**
 * Add appropriate listeners after the creative's DOM has been set up.
 */
function addListeners() {
  // If ORCA creative then comment out below
  //creative.dom.mainContainer.addEventListener('click', exitClickHandler)
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.mainContainer.style.display = 'block'
  startAnimation(0)
}

function processExitURL(exitURL) {
  let dimeOfferId =
    dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].DIMEOfferId
  let urlWithActualModelYear = processPlaceholderModelYear(exitURL)
  {
    if (urlWithActualModelYear.includes('oid=')) {
      urlWithActualModelYear = urlWithActualModelYear.replace(
        'oid=',
        `oid=${dimeOfferId}`,
      )
    }
  }
  return urlWithActualModelYear
}

function processPlaceholderModelYear(exitURL) {
  var replaceUrl = ''
  //OfferFrame_click()
  var regex = /[.,-/]*PlaceholderMY20|[.,-/]*PlaceholderMY21|placeholderModelYear/gi
  var regexNot20 = /PlaceholderMY20|PlaceholderMY21|placeholderModelYear/gi

  if (exitURL.indexOf('PlaceholderCurrentMY21') !== -1) {
    if (
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year != '2021' &&
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year != '2019'
    ) {
      replaceUrl = exitURL.replace('PlaceholderCurrentMY21', 'previous-year')
      console.log('Found PlaceholderCurrentMY21 previous-year Url')
      return replaceUrl
    } else {
      replaceUrl = exitURL.replace('PlaceholderCurrentMY21', 'current-year')
      console.log('Found PlaceholderCurrentMY21 current-year Url')
      return replaceUrl
    }
  } else if (
    exitURL.indexOf('PlaceholderCurrentMY20') !== -1 &&
    dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year != '2021'
  ) {
    if (
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year != '2020' &&
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year != '2019'
    ) {
      replaceUrl = exitURL.replace('PlaceholderCurrentMY20', 'previous-year')
      console.log('Found PlaceholderCurrentMY20 previous-year Url')
      return replaceUrl
    } else {
      replaceUrl = exitURL.replace('PlaceholderCurrentMY20', 'current-year')
      console.log('Found PlaceholderCurrentMY20 current-year Url')
      return replaceUrl
    }
  }

  if (
    exitURL.includes('PlaceholderMY20') &&
    exitURL.includes('placeholderModelYear')
  ) {
    console.log('found bespoke Url')
    if (
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year !== '2020'
    ) {
      replaceUrl = exitURL.replace(
        regexNot20,
        dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year,
      )
      return replaceUrl
    } else {
      console.log('2020 link found')
      replaceUrl = exitURL.replace(regex, '')
      return replaceUrl
    }
  } else if (
    exitURL.includes('PlaceholderMY21') &&
    exitURL.includes('placeholderModelYear')
  ) {
    console.log('found bespoke Url')
    if (
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year !== '2021'
    ) {
      replaceUrl = exitURL.replace(
        regexNot20,
        dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year,
      )
      return replaceUrl
    } else {
      console.log('2021 link found')
      replaceUrl = exitURL.replace(regex, '')
      return replaceUrl
    }
  } else if (exitURL.includes('placeholderModelYear')) {
    replaceUrl = exitURL.replace(
      regexNot20,
      dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].Year,
    )
    return replaceUrl
  } else {
    replaceUrl = exitURL
    return replaceUrl
  }
}

// function appendOfferId(exitURL) {
//   let dimeOfferId = dynamicContent.Nissan_US_DCO_HISP_Nissan_DIME_Feed_ES[0].DIMEOfferId;
//   let exitUrlWithOfferId = `${exitURL}&oid=${dimeOfferId}`;
//   return exitUrlWithOfferId;
// }

function handleCTAclickOut(event) {
  event.stopPropagation()
  var ctaOneUrl = processExitURL(creative.exit.ctaOneExit)
  exitClickHandler(ctaOneUrl)
}

function handleCTAclickOut2(event) {
  event.stopPropagation()
  var ctaTwoUrl = processExitURL(creative.exit.ctaTwoExit)
  exitClickHandler(ctaTwoUrl)
}

function handleBGclickOut() {
  var Bgurl = processExitURL(creative.exit.ctaBGExit)
  exitClickHandler(Bgurl)
}

function handlePreframeclickOut() {
  var preframeUrl = processExitURL(creative.exit.preframeUrl)
  exitClickHandler(preframeUrl)
}

function exitClickHandler(url) {
  var exitURLWithSuffix = addSuffix(url, 'exit_suffix')
  Enabler.exitOverride('click!', exitURLWithSuffix)
}

function addSuffix(url, dcmParameter) {
  var urlSuffix = Enabler.getParameter(dcmParameter)
  var _url = ''

  if (url) {
    var symbol = url.indexOf('?') > -1 ? '&' : '?'
    if (urlSuffix) {
      while (urlSuffix.charAt(0) == '?' || urlSuffix.charAt(0) == '&') {
        urlSuffix = urlSuffix.substring(1)
      }
      if (urlSuffix.indexOf('?') > -1) {
        urlSuffix = urlSuffix.replace(/\?/g, '&')
      }
    }
    _url = url + symbol + urlSuffix
  }
  console.log('_url: ' + _url)
  return _url
}

// function Hurricane_click() {
//   console.log('Hurricane_click')
//   Enabler.counter('Hurricane_click', true)
// }

// function OfferFrame_click() {
//   console.log('OfferFrame_click')
//   Enabler.counter('OfferFrame_click', true)
// }

// function Titan_click() {
//   console.log('Titan_click')
//   Enabler.counter('Titan_click', true)
// }

/**
 *  Main onload handler
 */
window.addEventListener('load', preInit)
