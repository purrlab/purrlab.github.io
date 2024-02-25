// Initialize medium zoom.
<<<<<<< HEAD
$(document).ready(function() {
  medium_zoom = mediumZoom('[data-zoomable]', {
    margin: 100,
    background: getComputedStyle(document.documentElement)
        .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
  })
=======
$(document).ready(function () {
  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
>>>>>>> b607e580adbf2b96194dce79146f8aa201016da3
});
