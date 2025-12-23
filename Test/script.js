// Filter Array
let filterarray =[];

// Gallery Card List for manipulation

let galleryarray = [
    // --- TES OTOMOTIF BARU ---
    {
        id:1,
        name : "Sistem Pendingin",
        src: "../Images/Book Cover/bookdin.png", // Menggunakan cover modul pendingin
        test: "List/test_pendingin.html",
        desc : "Ujian Materi Sistem Pendingin"
    },
    {
        id:2,
        name : "Sistem Pelumasan",
        src: "../Images/Book Cover/oli.png", 
        test: "List/test_pelumasan.html",
        desc : "Ujian Materi Pelumasan"
    },
    {
        id:3,
        name : "Mekanisme Katup",
        src: "../Images/Book Cover/katup.png", 
        test: "List/test_katup.html",
        desc : "Ujian Mekanisme Katup & Blok"
    }
    
   ];

showgallery(galleryarray);

// Showing the Card

function showgallery(cardList){
   document.getElementById("card").innerText = "";
   for(var i=0;i<cardList.length;i++)
   {
       document.getElementById("card").innerHTML += `
        <div class="col-md-4 mt-3" >
           <div class="card p-3 ps-5 pe-5">
               <h4 class="text-capitalize text-center">${cardList[i].name}</h4>

          <img src="${cardList[i].src}" width="100%" height="320px" style="object-fit:cover;"/>
          <p class="mt-2">${cardList[i].desc}</p>

          <a href="${cardList[i].test}">
            <button class="btn w-100 mx-auto" onclick="readBlog${i}">Mulai</button>
          </a>

          </div>
          </div>
       `
   }

}

// Live searching

document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }

   });

   if(this.value==""){
       showgallery(galleryarray);
   }

   else {

       if(filterarray == ""){
           document.getElementById("para").style.display = 'block'
           document.getElementById("card").innerHTML = ""; 
       }

       else{
           showgallery(filterarray);
           document.getElementById("para").style.display = 'none'
       }
   }

});