export default class Playlist {

    constructor(
        public name = '',
        public total_tracks = 0,
        public tracks: string[] = []
    ) {

    }
}