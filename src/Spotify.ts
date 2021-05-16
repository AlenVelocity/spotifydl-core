import SpotifyApi, { IAuth } from './lib/API'
import Artist from './lib/details/Atrist'
import Playlist from './lib/details/Playlist'
import SongDetails from './lib/details/Song'

export class SpotifyFetcher extends SpotifyApi {
    constructor(auth: IAuth) {
        super(auth)
    }

    getTrack = async (url: string): Promise<SongDetails> => await this.extractTrack(this.getID(url))

    getAlbum = async (url: string): Promise<Playlist> => await this.extractAlbum(this.getID(url))

    getArtist = async (url: string): Promise<Artist> => await this.extractArtist(this.getID(url))

    getArtistAlbums = async (
        url: string
    ): Promise<{
        albums: Playlist[]
        artist: Artist
    }> => {
        const artistResult = await this.getArtist(url)
        const albumsResult = await this.extractArtistAlbums(artistResult.id)
        const albumIds = albumsResult.map((album) => album.id)
        const albumInfos = []
        for (let x = 0; x < albumIds.length; x++) {
            albumInfos.push(await this.extractAlbum(albumIds[x]))
        }
        return {
            albums: albumInfos,
            artist: artistResult
        }
    }

    getPlaylist = async (url: string): Promise<Playlist> => await this.extractPlaylist(this.getID(url))

    getID = (url: string): string => {
        const splits = url.split('/')
        return splits[splits.length - 1]
    }
}
