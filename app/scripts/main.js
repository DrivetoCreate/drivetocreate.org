$(document).foundation();

fitText(document.getElementById('hp-dollars-donated'), 0.72)

var vimeoVideoId = '50959272'
var vimeoPlayer = '<iframe src="http://player.vimeo.com/video/' + vimeoVideoId + '" frameborder="0" class="vimeo-video" autoplay webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'

$("dark-overlay, .play-button, .close-overlay, .video-embed").on('click', function () {
	$(".video-embed").html($(vimeoPlayer));
	$(".dark-overlay").fadeToggle(500);
	$(".video-embed").fadeToggle(500);
});