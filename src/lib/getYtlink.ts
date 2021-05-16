import yts from 'yt-search'

export default async (term: string): Promise<string> => {
    const { videos } = await yts.search(term)
    if (!videos || videos.length === 0) return ''
    return videos.filter((video) => video.seconds < 3600)[0].url
}
