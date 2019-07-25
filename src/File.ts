export class File {
    name: string
    size: number
    ctime: Date
    btime: Date
    mtime: Date
    atime: Date
    constructor(name: string, size: number, btime: Date, ctime: Date, atime: Date, mtime: Date) {
        this.name = name
        this.btime = btime
        this.atime = atime
        this.ctime = ctime
        this.mtime = mtime
    }

    isDot() {
        return this.name.charAt(0) == '.'
    }

    static from(json: any): File[] {
        return json.map(obj=> new File(obj.name, obj.size, new Date(obj.btime), new Date(obj.ctime), new Date(obj.atime), new Date(obj.mtime)))
    }
}