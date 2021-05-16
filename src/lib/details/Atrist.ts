import { IArtist } from '../../typings'

export default class Artist implements IArtist {
    constructor(public id = '', public name = '', public herf = '') {}
}
