const coding = ['html', 'css', 'js', 'react', 'nodejs'];

//callback function is used in forEach, it have no name

// coding.forEach( function (item) {
//     console.log(item);
    
// })

//coding.forEach( (item) => {console.log(item)} )

function printme(item){
    console.log(item);
}

// coding.forEach( function(item, index ,arr){
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: 'html',
        languageFileName: '.html'
    },
    {
        languageName: 'javascript',
        languageFileName: '.js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})