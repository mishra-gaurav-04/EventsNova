export interface IEvent {
    id : string,
    title : string,
    description : string,
    location : string,
    createdAt : Date,
    imageUrl : string,
    startDateTime : string,
    endDateTime : string,
    price : string
    isFree : boolean,
    url : string,
    organizerId : string,
    categoryId : string,
    organizer : {
        id : string,
        firsName : string,
        lastName : string
    },
    category : {
        id : string,
        name : string
    }
}