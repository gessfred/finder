import {File} from './File'
export class Directory {
    name: string
    files: File[]
    dotsVisible: boolean
    constructor(name: string, files: File[], dotsVisible: boolean = false) {
        this.name = name
        this.files = files
        this.dotsVisible = dotsVisible
    }

    from(json:any) {
        this.files = File.from(json)
    }

    iterate(): File[] {
        return this.dotsVisible ? this.files : this.files.filter(file=> !file.isDot())
    }

    toggleDots() {
        this.dotsVisible = !this.dotsVisible
    }

    static from(json: any, name: string = '/'): Directory {
        return new Directory(name, File.from(json))
    }
}