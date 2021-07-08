const Spotify = require('../dist/Spotify').default
const spotify = new Spotify({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009',
})
const fs = require('fs-extra') 

const links = {
    artist: 'https://open.spotify.com/artist/7ky9g1jEjCsjNjZbYuflUJ?si=2To3fmc-T9KuyyrQ-Qp5KQ',
    album: 'https://open.spotify.com/album/3u3WsbVPLT0fXiClx9GYD9?si=pfGAdL3VRiid0M3Ln_0DNg',
    song: 'https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab'
};
(async () => {
    const user = await spotify.getSpotifyUser('b9260b73960d470d')
    console.log(user)
})()

//spotify.verifyCredentials().then(() => Promise.all([spotify.getTrack(links.song), spotify.getAlbum(links.album), spotify.getArtistAlbums(links.artist)]).then(console.log))