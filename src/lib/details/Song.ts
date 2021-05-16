export default class SongDetails {
    constructor(
        public name = '',
        public artists: string[] = [],
        public album_name = '',
        public release_date = '',
        public cover_url = ''
    ) {}
}
