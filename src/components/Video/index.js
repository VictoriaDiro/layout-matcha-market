import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <div>
        <iframe src="https://player.vimeo.com/video/218685123" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        <p><a href="https://vimeo.com/218685123">Matcha</a> from <a href="https://vimeo.com/jwuimage">Justin Wu</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

        <div>
          
          <blockquote>
            <p>Morbi rhoncus gravida ipsum eget lobortis. Donec et justo a ligula auctor auctor ac eget nisl. Ut quis felis ullamcorper, viverra nunc in, gravida purus. Fusce et tortor turpis.</p>
            <footer>ANTHEA COX</footer>
          </blockquote>

          <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget enim non nibh consectetur porta quis ac dolor. Sed condimentum risus a lectus blandit, a pharetra odio faucibus.</p>
            <footer>LILLIAN BENNETT</footer>
          </blockquote>

          <blockquote>
            <p>Matcha is a type of Green Tea. Our Matcha is made from freshly hand-picked Organic green tea leaves that are stone. In other words, when you are enjoying Matcha - you are actually drinking.</p>
            <footer>— MELANIA MUNCHINKS</footer>
          </blockquote>

        </div>

      </div>

    )
  }
}

export default Video;