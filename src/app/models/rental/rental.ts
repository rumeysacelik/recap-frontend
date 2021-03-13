/*
            "rentalId": 5,
            "carName": "BMW M4                                            ",
            "userName": null,
            "customerName": null,
            "firstName": "Bahar                                             ",
            "lastName": "Çeşmeli                                           ",
            "brandName": "BMW                                               ",
            "rentDate": "0001-01-01T00:00:00",
            "returnDate": null
*/

export interface Rental{
    rentalId:Number,
    rentDate:Date,
    returnDate:Date,
    firstName:String,
    lastName:String,
    brandName:String,
    userName:String,
    carName:string,
    customerName:string
}