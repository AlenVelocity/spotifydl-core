# Spotifydl-Core

> Package for fetching and downloading tracks from spotify

# Importing

> CommonJS
```JS
const Spotify = require('spotifydl-core').default
```
> ES/TypeScript
```TS
import Spotify from 'spotifydl-core'
```
# Authentication

```JS

const spotify = new Spotify({
    clientId: 'your-client-id',
    clientSecrect: 'clientSecret'
})
```

# Usage

> Get Track
```JS
await spotify.getTrack('https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab')
```

> Download Track
```JS
await spotify.downloadTrack('https://open.spotify.com/track/1Ub6VfiTXgyV8HnsfzrZzC?si=4412ef4ebd8141ab', 'song.mp3') //It'll return buffer if you don't provide any filename

```

> Get Artist
```JS
await spotify.getArtist('https://open.spotify.com/artist/7ky9g1jEjCsjNjZbYuflUJ?si=2To3fmc-T9KuyyrQ-Qp5K')
```

> Get Album
```JS
await spotify.getTrack('https://open.spotify.com/album/3u3WsbVPLT0fXiClx9GYD9?si=pfGAdL3VRiid0M3Ln_0DNg')
```