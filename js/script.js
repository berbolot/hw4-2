const cod = document.getElementById("wer")
const transformData = async () => {
   const bolo = await fetch("https://jsonplaceholder.typicode.com/users")   
   const ded = await bolo.json();  
    const ad  = ded.map((el) =>{
     return ` <div class=header><h2>${el.id}</h2> <b>name:</b>${el.name}<br><b>phone:</b>${el.phone}<br><b>username:</b>${el.username}<br><b>wedsite:</b>${el.wedsite}<br><b>email:</b>${el.email}
    
      </div>
      `   
    })
    
     cod.innerHTML = ad.join(" ")
  
   
}
transformData()

                                    
