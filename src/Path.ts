//Represents directories and files paths
export class Path {
    path: Array<string>
    constructor(path: Array<string>) {
        this.path = path
    }

    back() {
        if(this.path.length > 1) {
            this.path.pop()
        }
    }

    stringify(separator: string = '/'): string {
        return this.path.map((x) => `${separator}${x}`).reduce((o, x) => o + x)
    }

    cd(dir: string) {
        this.path.push(dir)
    }
    walk() {
        return this.path
    }
}
