export class Quotes {
    showDescription: boolean;
    constructor(
        id: number,
        quote: string,
        author: string,
        user: string,
        date: Date,
        upvote: number,
        downvote: number

    ) {
        this.showDescription = false;
    }


}
