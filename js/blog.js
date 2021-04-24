var $content = $('#mediumBlogs');
var data = {
	rss: 'https://medium.com/feed/@sedsindia'
};
$.get(
	'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sedsindia',
	data,
	function(response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function(k, item) {
				var tagIndex = item.description.indexOf('<img');
				var srcIndex =
					item.description.substring(tagIndex).indexOf('src=') +
					tagIndex;
				var srcStart = srcIndex + 5;
				var srcEnd =
					item.description.substring(srcStart).indexOf('"') +
					srcStart;
				var src = item.description.substring(srcStart, srcEnd);
				output += `<div class="col-lg-6 mb-5">`;
				output += `<div class="blogcard" style="margin: auto;">`;
				var src = item.description.substring(srcStart, srcEnd);
				output += `<img src="${response.feed['image']}" alt="Image" class="img-fluid" style="height:225px;">`;
				output += `<p class="alumni-card-name" style="margin-top: 1rem;"><a href="${item.link}">${item.title}</a></p>`;
				var trimmedDate = item.pubDate.substr(0, 10);
				output += `<p class="alumni-card-position">${trimmedDate}, ${item.author}</p>`;
				var desc = item.description.replace(/<(.|\n)*?>/g, '');
				desc = desc.replace('h4', 'p');
				desc = desc.replace('h3', 'p');
				var maxLength = 120;
				var trimmedDesc = desc.substr(0, maxLength);
				trimmedDesc = trimmedDesc.substr(
					0,
					Math.min(trimmedDesc.length, trimmedDesc.lastIndexOf(' '))
				);
				output += `<p style="padding: 1em;">${trimmedDesc}...</p>`;
				output += '</div></div>';
				return k < 3;
			});
			$content.html(output); //Feeding the output into the div with id jsonContent
		}
	}
);
