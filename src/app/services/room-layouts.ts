import { ILayouts } from '../services/layout';

export const ROOMLAYOUTS: ILayouts[] = [
    {
        name: 'Bedroom',
        pictures: [
            { picture: "../../../assets/gallery-images/before1.jpg", L: 10, W: 10, H: 9 },       //100
            { picture: "../../../assets/gallery-images/after1.jpg" , L: 12.25, W: 12.25, H: 9 }, //150
            { picture: "../../../assets/gallery-images/before2.jpg", L: 14.14, W: 14.14, H: 9 }, //200
            { picture: "../../../assets/gallery-images/after2.jpg" , L: 17.32, W: 17.32, H: 9 }, //300
            { picture: "../../../assets/gallery-images/before3.jpg", L: 20, W: 20, H: 9 },       //400
            { picture: "../../../assets/gallery-images/after3.jpg" , L: 22.36, W: 22.36, H: 9 }, //500
        ],
    },

    {
        name: 'Bathroom',
        pictures: [
            { picture: "../../../assets/gallery-images/room1-1.jpg", L: 7.07, W: 7.07, H: 9 },   //50
            { picture: "../../../assets/gallery-images/room1-2.jpg", L: 10, W: 10, H: 9 },       //100
            { picture: "../../../assets/gallery-images/room1-3.jpg", L: 12.25, W: 12.25, H: 9 }, //150
            { picture: "../../../assets/gallery-images/room1-4.jpg", L: 14.14, W: 14.14, H: 9 }, //200
            { picture: "../../../assets/gallery-images/room1-5.jpg", L: 15.81, W: 15.81, H: 9 }, //250
            { picture: "../../../assets/gallery-images/room1-6.jpg", L: 17.32, W: 17.32, H: 9 }, //300
        ],
    },

    {
        name: 'Kitchen',
        pictures: [
            { picture: "../../../assets/gallery-images/before1.jpg", L: 10, W: 10, H: 9 },       //100
            { picture: "../../../assets/gallery-images/after1.jpg", L: 12.25, W: 12.25, H: 9 },  //150
            { picture: "../../../assets/gallery-images/before2.jpg", L: 14.14, W: 14.14, H: 9 }, //200
            { picture: "../../../assets/gallery-images/after2.jpg", L: 15.81, W: 15.81, H: 9 },  //250
            { picture: "../../../assets/gallery-images/before3.jpg", L: 17.32, W: 17.32, H: 9 }, //300
            { picture: "../../../assets/gallery-images/after3.jpg", L: 20, W: 20, H: 9 },        //400
        ],
    },

    {
        name: 'Living Room',
        pictures: [
            { picture: "../../../assets/gallery-images/room1-1.jpg", L: 10, W: 10, H: 9 },       //100
            { picture: "../../../assets/gallery-images/room1-2.jpg", L: 12.25, W: 12.25, H: 9 }, //150
            { picture: "../../../assets/gallery-images/room1-3.jpg", L: 14.14, W: 14.14, H: 9 }, //200
            { picture: "../../../assets/gallery-images/room1-4.jpg", L: 17.32, W: 17.32, H: 9 }, //300
            { picture: "../../../assets/gallery-images/room1-5.jpg", L: 20, W: 20, H: 9 },       //400
            { picture: "../../../assets/gallery-images/room1-6.jpg", L: 24.49, W: 24.49, H: 9 }, //600
        ],
    }
]
