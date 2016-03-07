var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];



function reset()
{
	var int_random = Math.floor(Math.random() * quotes.length);
	var ph = quotes[int_random].author+ " : " + quotes[int_random].quote;	
	ReactDOM.render(
		React.createElement('h2', null, quotes[int_random].quote),
		document.getElementById('example')
	);
	ReactDOM.render(
		React.createElement('h2', null, quotes[int_random].author),
		document.getElementById('author_example')
	);
}

reset();



var tab_author = [];
for(var i = 0; i < quotes.length ; i++)
{
	if(tab_author.indexOf(quotes[i].author) == -1)
		tab_author.push(quotes[i].author);
}

var InflexibleListRender = React.createClass({displayName: "InflexibleListRender",
    render: function() {
      return (
        React.createElement("ul", null,
          React.createElement("li", null, this.props.list[0]),
          React.createElement("li", null, this.props.list[1]),
          React.createElement("li", null, this.props.list[2]),
          React.createElement("li", null, this.props.list[3]),
          React.createElement("li", null, this.props.list[4]),
		  React.createElement("li", null, this.props.list[5]),
		  React.createElement("li", null, this.props.list[6])
        )
      )
    }
  });
  React.render(React.createElement(InflexibleListRender, {list: tab_author}), document.getElementById('inflexible-list-render2'));
