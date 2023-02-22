import bcrypt from 'bcryptjs'
const data = {
    books:[
        {   
            // _id:"1",
            name:"All Quiet On the Western Front",
            slug:"all-quiet-on-the-western-front",
            author:"Erich Maria Remarque",
            genre:"war novel",
            image:"/images/img1.jpg",
            year:1928,
            price:24.76,
            stock:10,
            rating:4.7,
            review:24,
            desc:"A young German soldier of World War I tells of a generation of men who, even though they may have escaped shells, were destroyed by the war."
        },
        {
            // _id:"2",
            name:"The Old Man and the Sea",
            slug:"the-old-man-and-the-sea",
            author:"Ernest Hemingway",
            genre:"novel",
            image:"/images/img2.jpg",
            year:1952,
            price:10.59,
            stock:5,
            rating:4.4,
            review:35,
            desc:"The Old Man and the Sea, short heroic novel by Ernest Hemingway, published in 1952 and awarded the 1953 Pulitzer Prize for fiction.",
            
        },
        {
            // _id:"3",
            name:"Kafka on the Shore",
            slug:"kafka-on-the-shore",
            author:"Haruki Murakami",
            genre:"novel",
            image:"/images/img3.jpg",
            year:2002,
            price:27.62,
            stock:15,
            rating:4.2,
            review:45,
            desc:"KAFKA ON THE SHORE is a beautifully told story about needing to let go and step out of your own reality in order to find out that life is meant to be lived."
        },
        {
            // _id:"4",
            name:"To Kill a Mockingbird",
            slug:"to-kill-a-mockingbird",
            author:"Harper Lee",
            genre:"novel",
            image:"/images/img4.jpg",
            year:1960,
            price:24.99,
            stock:12,
            rating:3.8,
            review:26,
            desc:"To Kill a Mockingbird is primarily a novel about growing up under extraordinary circumstances in the 1930s in the Southern United States."
        },
    ],
    users:[
        {
            name:'Salman',
            email:'salman@mail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true
        },
        {
            name:'John Doe',
            email:'john@mail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:false
        }
    ]
}

export default data