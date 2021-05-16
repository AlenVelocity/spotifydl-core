export interface ISong {
    name: string
    artists: string[]
    album_name: string
    release_date: string
    cover_url: string
}

export interface IPlaylist {
    name: string
    total_tracks: number
    tracks: string[]
}

export interface IArtist {
    id: string
    name: string
    herf: string
}
