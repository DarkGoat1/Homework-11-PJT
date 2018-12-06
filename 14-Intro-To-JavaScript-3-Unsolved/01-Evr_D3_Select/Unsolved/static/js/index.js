var text1 = d3.select('.text1').text();
console.log(text1);

var text2 = d3.select('#text2').text();
console.log(text2);

d3.select('.text1').text('Wooooo1');

var myLink = d3.select('.my-link').html();
console.log(myLink);

var myLinkAnchor = d3.select('.my-link>a');
console.log(myLinkAnchor);

var myLinkAnchorAttr = myLinkAnchor.attr('href');
console.log(myLinkAnchorAttr);

d3.select('.my-link>a').attr('href', 'http://en.spongepedia.org').text('RIP Stephen Hillenburg');

d3.selectAll('li').style('color', 'blue');

var li1 = d3.select('u1').append('li').text('New Bullet');