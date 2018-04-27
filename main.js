var page1Loader = document.querySelector("#page1-load");
var page1Iframe = document.querySelector("#page1");
var page2Loader = document.querySelector("#page2-load");
var page2Iframe = document.querySelector("#page2");


var loadTimes = {
  pageA: 0,
  pageB: 0
}

function loadIframe (ev) {
  console.log(ev.target);
  var iframeRef = ev.target.dataset.page;
  var inputRef = ev.target.dataset.urlsrc;

  var iframeTag = document.querySelector(`#${iframeRef}`);
  var inputTag = document.querySelector(`input[name=${inputRef}]`);

  var pageNum = iframeTag.dataset.label;
  var url = inputTag.value 

  loadTimes[pageNum] = new Date().getTime();
  iframeTag.setAttribute('src', url);

}

function onIFrameLoaded(ev) {
  var pageNum = ev.target.dataset.label;
  var loadTime = new Date().getTime() - loadTimes[pageNum];
  var pLoadTime = document.querySelector(`#${pageNum}LoadTime`);
  pLoadTime.innerHTML = `${loadTime}ms`;
  pLoadTime.classList.add('visible');
  pLoadTime.classList.remove('hidden');
}

page1Loader.addEventListener('click', loadIframe);
page1.addEventListener('load', onIFrameLoaded);
page2Loader.addEventListener('click', loadIframe);
page2.addEventListener('load', onIFrameLoaded);