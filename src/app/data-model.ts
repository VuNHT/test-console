export class DataModel {
    name: string;
    content: string;
    author: string;
    index: number;
    constructor(
        name?: string,
        content?: string,
        author?: string,
        index?: number
    ) {
        this.name = name;
        this.content = content;
        this.author = author;
        this.index = index;
    }

    parseFromResp(params: any = {}) {
        this.name = params.name;
        this.content = params.content;
        this.author = params.author;
        this.index = params.index;
        return this;
    }
}
