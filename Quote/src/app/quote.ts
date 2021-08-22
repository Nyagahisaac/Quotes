export class Quote {
    displayDescription : boolean;
  
    constructor(
        public id :number,
        public title :string,
        public author :string,
        public upvote :number,
        public downvote :number,
        public description :string,
        public date : Date
    ){
        this.displayDescription = false;
    }
}
