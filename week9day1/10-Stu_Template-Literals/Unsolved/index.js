// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Genesis",
  artist: "Deftones",
  album: "rock",
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  <h2>Album title is: ${music.title}</h2>
  <p>Artist is: ${music.artist}</p>
  <p>Album type is: ${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

//testing another style using text Content

const elementTwo = document.getElementById("musicTwo");

const songSnippetH2 = document.createElement("h2");
const songSnippetP1 = document.createElement("p");
const songSnippetP2 = document.createElement("p");

songSnippetH2.textContent = `Album title is: ${music.title}`;
elementTwo.appendChild(songSnippetH2);

songSnippetP1.textContent = `Artist is: ${music.artist}`;
elementTwo.appendChild(songSnippetP1);

songSnippetP2.textContent = `Album is: ${music.album}`;
elementTwo.appendChild(songSnippetP2);



