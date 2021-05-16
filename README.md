<div align=center>

# Spotifydl-Core

<img src="https://img.icons8.com/nolan/256/spotify.png"/>

> A simple package to download music tracks from spotify.
</div>

# Install

```sh
> npm i spotifydl-core
```

## Importing 

> CommonJS
```JS
const Spotify = require('spotifydl-core').default
```
> ES/TypeScript
```TS
import Spotify from 'spotifydl-core'
```
## Authentication

```JS

const spotify = new Spotify({
    clientId: 'your-client-id',
    clientSecrect: 'your-client-secret'
})
```

## Methods

> Get Track
```JS
await spotify.getTrack('https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab')
```

> Download Track
```JS
await spotify.downloadTrack('https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab', 'song.mp3') //It'll return buffer (promise) if you don't provide any filename

```

> Get Artist
```JS
await spotify.getArtist('https://open.spotify.com/artist/7ky9g1jEjCsjNjZbYuflUJ?si=2To3fmc-T9KuyyrQ-Qp5K')
```

> Get Album
```JS
await spotify.getTrack('https://open.spotify.com/album/3u3WsbVPLT0fXiClx9GYD9?si=pfGAdL3VRiid0M3Ln_0DNg')
```

# Acknowledgements

- [Spotify-dl](https://github.com/SwapnilSoni1999/spotify-dl)
- [Ytdl-core](https://github.com/fent/node-ytdl-core)