// content.js
function hello() {
	$("a").each( (i,e) => {
		$("body").prepend(`<p><a href="${$(e).attr('href')}" target="_blank" style="display: none; background-color: #ffffff" class="glnk">Link ${i}</a></p>`);
	});

}


function launch() {
	$("a.glnk").each( (i,e) => {
		e.click();
	});
}