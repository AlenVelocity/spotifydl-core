import { ITrack } from '../../typings'

export default class TrackDetails implements ITrack {
    constructor(
        public name = '',
        public artists: string[] = [],
        public album_name = '',
        public release_date = '',
        public cover_url = ''
    ) {}
}
