import os from 'os'
import ytdl from '@distube/ytdl-core'
import SpotifyDlError from './Error'
import { readFile, unlink, writeFile } from 'fs-extra'
import axios from 'axios'
import Ffmpeg from 'fluent-ffmpeg'

/**
 * Function to download the give `YTURL`
 * @param {string} url The youtube URL to download
 * @returns `Buffer`
 * @throws Error if the URL is invalid
 */
export const downloadYT = async (url: string): Promise<Buffer> => {
    if (!ytdl.validateURL(url)) throw new SpotifyDlError('Invalid YT URL', 'SpotifyDlError')
    const filename = `${os.tmpdir()}/${Math.random().toString(36).slice(-5)}.mp3`
    const stream = ytdl(url, {
        quality: 'highestaudio',
        filter: 'audioonly'
    })
    return await new Promise((resolve, reject) => {
        Ffmpeg(stream)
            .audioBitrate(128)
            .save(filename)
            .on('error', (err) => reject(err))
            .on('end', async () => {
                const buffer = await readFile(filename)
                unlink(filename)
                resolve(buffer)
            })
    })
}

/**
 * Function to download and save audio from youtube
 * @param url URL to download
 * @param filename the file to save to
 * @returns filename
 */
export const downloadYTAndSave = async (url: string, filename = (Math.random() + 1).toString(36).substring(7) + '.mp3'): Promise<string> => {
    const audio = await downloadYT(url)
    try {
        await writeFile(filename, audio)
        return filename
    } catch (err) {
        throw new SpotifyDlError(`Error While writing to File: ${filename}`)
    }
}

/**
 * Function to get buffer of files with their URLs
 * @param url URL to get Buffer of
 * @returns Buffer
 */
export const getBufferFromUrl = async (url: string): Promise<Buffer> =>
    (await axios.get(url, { responseType: 'arraybuffer' })).data
