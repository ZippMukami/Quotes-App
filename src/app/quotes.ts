export class Quotes {
    showDescription: boolean;
    constructor( 
        public  id: number,
        public quote: string,
        public author: string,
        public user: string,
        public date: Date,
        public upvote: number,
        public downvote: number

    ) {
        this.showDescription = false;
    }


}
