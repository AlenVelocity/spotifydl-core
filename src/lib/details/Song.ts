import { ISong } from '../../typings'

export default class SongDetails implements ISong {
    constructor(
        public name = '',
        public artists: string[] = [],
        public album_name = '',
        public release_date = '',
        public cover_url = ''
    ) {}
}
