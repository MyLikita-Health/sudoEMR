var React = require('react');
var ScrollbarWrapper = require('react-scrollbar').ScrollbarWrapper;
require('./custom-scrollbar.scss');

var VerticalScrollbar = React.createClass({
  render: function() {
    return (
      <ScrollbarWrapper className="ScrollbarContent--custom" scrollbarThickness={5}>
        <div style={{padding: 25}}>
            <p>Dennis Coles (born May 9, 1970), better known by his stage name Ghostface Killah, is an American rapper and prominent member of the Wu-Tang Clan. After the group achieved breakthrough success in the aftermath of Enter the Wu-Tang (36 Chambers), the members went on to pursue solo careers to varying levels of success. Ghostface Killah debuted his solo-career with Ironman in 1996, which was well received by music critics. He has continued his success over the following years with critically acclaimed albums such as Supreme Clientele (2000) and FishScale (2006). His stage name was taken from one of the characters in the 1979 kung fu film Mystery of Chessboxing. He is the founder of his own label Starks Enterprises.</p>
            <p>Ghostface Killah is critically acclaimed for his loud, fast-paced flow, and his emotional stream-of-consciousness narratives containing cryptic slang and non-sequiturs. In 2006, MTV included him on their honorable mention list of The Greatest MCs of All Time, while the editors of About.com placed him on their list of the Top 50 MCs of Our Time (1987–2007), calling him "one of the most imaginative storytellers of our time." Q magazine called him "rap's finest storyteller."[11] Pitchfork Media stated that, "Ghostface has unparalleled storytelling instincts; he might be the best, most colorful storyteller rap has ever seen." NPR called him "a compulsive storyteller", and asserted, "His fiction is painterly."</p>
        </div>
      </ScrollbarWrapper>
    );
  }
});

module.exports = VerticalScrollbar;
