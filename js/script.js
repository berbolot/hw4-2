const cod = document.getElementById("wer")
const transformData = async () => {
   const bolo = await fetch("https://jsonplaceholder.typicode.com/users")   
   const ded = await bolo.json();  
        const ffer = ded[0] 
    console.log(ffer);
    cod.innerHTML = `
        <div class=header>
      <div class=nav> 
     <div class=a1>1</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br>
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br>
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br>
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     <div class=nav> 
     <div class=a1>2</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br> 
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br>
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br> 
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     <div class=nav> 
     <div class=a1>3</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br> 
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br> 
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br> 
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     <div class=nav> 
     <div class=a1>4</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br> 
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br> 
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br> 
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     </div>
     <div class=fut>
     <div class=nav> 
     <div class=a1>5</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br> 
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br> 
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br> 
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     <div class=nav> 
     <div class=a1>6</div> <br>
     <div class=w1><h4>name:</h4> ${ffer.name};</div> <br> 
     <div class=w2><h4>phone:</h4> ${ffer.phone}</div> <br>
     <div class=w3><h4>username:</h4> ${ffer.username}</div> <br> 
     <div class=w4><h4>website:</h4> ${ffer.website}</div> <br> 
     <div class=w5><h4>email:</h4> ${ffer.email}</div>  
     </div>
     </div>
     `   
}
transformData()

                                    