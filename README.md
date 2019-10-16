<h1>LIRI Node App</h1><br>
This is a node application that is a language version of siri --- LIRI = "Language Interpretation and Recognition Interface". The application takes in paramaters from the command line and returns data based what calls are made.

The application serves to give you information about concerts for a particular artist, about a particular movie, or about a particular song.

<h2>Organization</h2><br>
The app is organized through the main liri.js javascript file, which takes in all node requirements and houses the functions that return the data, based on the command line. The app also stores keys and node packages in separate files.

<h2>How To Use The App</h2><br>
Once downloaded or via the link below, open the terminal for the file and follow along below:<br>
<ul>
<li>To get information about concerts for a musician, enter the following on the command line: "node liri.js concert-this insert artist name here"</li><br>
<li>To get information about a movie, enter the following on the command line: "node liri.js movie-this insert movie title here" Note: if no movie is entered, it will give data for the movie "Mr. Nobody"</li><br>
<li>To get information about a song, enter the following on the command line: "node liri.js spotify-this-song insert song name here" Note: It will return the first 5 songs via Spotify</li><br>
<li>Note: if no song is entered, it will give data for the song "The Sign" by Ace of Base</li>
<li>To read and run the command in the random.txt file, enter the following on the command line: "node liri.js do-what-it-says" Note: right now, based on random.txt, it will return Spotify information for the song "Aenema" by Tool</li><br>
</ul>
<h2>Watch a video by opening the video in the above repository, LiriVid.mov
<h2>Technologies Used</h2><br>
<h3>Node.js</h3>
<h3>Axios</h3>
<h3>DotENV</h3>