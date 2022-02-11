import React from 'react';
import "./music-app.css"
import Namebar from '../name-bar/name-bar';
import Draggable from 'react-draggable';

var songs = [
    {
      title: "rockstar",
      artist: "Post Malone, 21 Savage",
      cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/rockstar-album-cover.jpg",
      audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/Post%20Malone%20-%20rockstar%20ft.%2021%20Savage%20(1).mp3",
      color: "#c3af50"
    },
    {
      title: "Let You Down",
      artist: "NF",
      cover: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/perception-album-cover.png",
      audioFile: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3",
      color: "#25323b"
    }
  ]

function MusicApp() {
    return (
        <Draggable bounds={'parent'} handle={'.handle'}>
          <div className="MusicApp">
              <Namebar name="Music"/>
          </div>
        </Draggable>
    );
}

export default MusicApp;