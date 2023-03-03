const boxa = document.getElementById("wer")
const transformData = async () => {
    const tree = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const rer = await tree.json();
    const dero1 = rer[8] 
    const dero2 = rer[9]
    const dero3 = rer[10]
    const dero4 = rer[11]
    const dero5 = rer[12]
    const dero6 = rer[13]
    const dero7 = rer[14]
    const dero8 = rer[15]
    const dero9 = rer[16]
    const dero10 = rer[17]
    const dero11 = rer[18]
    const dero12 = rer[19]
    const dero13 = rer[20]
    const dero14 = rer[21]
    const dero15 = rer[22]

   console.log(rer);
  
    boxa.innerHTML = `  <div class="container">
             <div class=was> <p>User id: ${dero1.userId} </p> <p>Id: ${dero1.id} </p> ${dero1.title} ${dero1.body} </div>
             <div class=was> <p>User id: ${dero2.userId} </p> <p>Id: ${dero2.id} </p> ${dero2.title} ${dero2.body} </div>
             <div class=was> <p>User id: ${dero3.userId} </p> <p>Id: ${dero3.id} </p> ${dero3.title} ${dero3.body} </div>
             <div class=was> <p>User id: ${dero4.userId} </p> <p>Id: ${dero4.id} </p> ${dero4.title} ${dero4.body} </div>
             <div class=was> <p>User id: ${dero5.userId} </p> <p>Id: ${dero5.id} </p> ${dero5.title} ${dero5.body} </div>
             <div class=was> <p>User id: ${dero6.userId} </p> <p>Id: ${dero6.id} </p> ${dero6.title} ${dero6.body} </div>
             <div class=was> <p>User id: ${dero7.userId} </p> <p>Id: ${dero7.id} </p> ${dero7.title} ${dero7.body} </div>
             <div class=was> <p>User id: ${dero8.userId} </p> <p>Id: ${dero8.id} </p> ${dero8.title} ${dero8.body} </div>
             <div class=was> <p>User id: ${dero9.userId} </p> <p>Id: ${dero9.id} </p> ${dero9.title} ${dero9.body} </div>
             <div class=was> <p>User id: ${dero10.userId} </p> <p>Id: ${dero10.id} </p> ${dero10.title} ${dero10.body} </div>
             <div class=was> <p>User id: ${dero11.userId} </p> <p>Id: ${dero11.id} </p> ${dero11.title} ${dero11.body} </div>
             <div class=was> <p>User id: ${dero12.userId} </p> <p>Id: ${dero12.id} </p> ${dero12.title} ${dero12.body} </div>
             <div class=was> <p>User id: ${dero13.userId} </p> <p>Id: ${dero13.id} </p> ${dero13.title} ${dero13.body} </div>
             <div class=was> <p>User id: ${dero14.userId} </p> <p>Id: ${dero14.id} </p> ${dero14.title} ${dero14.body} </div>
             <div class=was> <p>User id: ${dero15.userId} </p> <p>Id: ${dero15.id} </p> ${dero15.title} ${dero15.body} </div>
             </div>
                                   `
}
transformData()