// write your code here
//Requesting the data
const menuItems= document.querySelector('#ramen-menu')
    fetch( 'http://localhost:3000/ramens')
    .then (response => response.json())
    .then (data =>{
        console.log(data.name)
        
        return data
       



        
        
        const name1 =document.querySelector('#menu-name')
        const restaurant1= document.querySelector('#restaurant-name')
        const image1 = document.querySelector('#imageD')
        const rating1 =document.querySelector('#rate-number')
        const comment1 =document.querySelector('#add-comment')
        

    /*
        //
        menuItems.forEach(element => {
        const newname = data.name 
        const newRestaurant=data.restaurant  
        const newImage=data.img  
        const newRate=data.rating 
        const newComment=data.comment
            
        });
        menuItems.innerHTML= data
        */
        })




    



    
        



       /*
       let menuHTML = data.map(function(data){
           `
        <h1 id="menu-name">`;{data.name}`</h1>
        <p id="restaurant-name">`;{data.restaurant}`</p>
        <img src=" "/>
        <p id="rate-number">`;{data.rating}`</p>
        <p id="add-comment">`;{data.comment}`</p>
       `
       })
       menuItems.innerHTML=menuHTML
       */

   

