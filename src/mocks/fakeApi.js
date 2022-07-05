const product = [
    {id:'01', name:'Spiderman', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/200561/spider-man-vs-venom_marvel_gallery_6160785dd4598.jpg'},
    {id:'02', name:'Batman', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/908580/batman-deluxe_dc-comics_gallery_60ba9827a4190.jpg'},
    {id:'03', name:'DartVader', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/400103/darth-vader_star-wars_gallery_5d852f572aa5a.jpg'},
    {id:'04', name:'Hulk', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/200571/hulk-vs-hulkbuster_marvel_gallery_621ecaa16bfb6.jpg'},
    {id:'05', name:'Superman', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/907931/clark-kent-deluxe_dc-comics_gallery_60467b227c01b.jpg'},
    {id:'06', name:'Anakin', marca:'IronStudios', description:'asd', price:"50.000", img:'https://www.sideshow.com/storage/product-images/300732/anakin-skywalker-mythos_star-wars_gallery_624dc83b377af.jpg'}
]

 export const getData = new Promise ((resolve, reject) => {
    let condition = true
    setTimeout(()=>{
        if(condition){
            resolve(product)
        }else{
            reject('error;(')
        }
    },2000)
})