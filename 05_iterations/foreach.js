const myArr = ['Raju','Raju2','Raju3']

myArr.forEach(function(item){
    // console.log(item);
    
})

const myArr2 = [1, 2, 3, 4, 5, 6, 7]

myArr2.forEach((item)=>{
    // console.log(item);
    
})

const mydata = [
    {
        id: 1,
        name: 'Raju Ahmmed',
        usrName : 'raju',
        section : 'C'

    },
    {
        id: 2,
        name: 'Sagor Ahmmed',
        usrName : 'sagor',
        section : 'C'

    },
    {
        id: 3,
        name: 'Sabbir Ahmmed',
        usrName : 'sabbir',
        section : 'C'

    }
]

mydata.forEach((item)=>{
    console.log(item.id)
    console.log(item.name)
    console.log(item.section)

})