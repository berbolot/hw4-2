const boxa = document.getElementById("wer")
const transformData = async () => {
    const tree = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const rer = await tree.json();

rer.map((item)=>{
    boxa.innerHTML += ` <div class=was> <p>User id: ${item.userId} </p> <p>Id: ${item.id} </p> ${item.title} ${item.body} </div>`
})
   console.log(rer);
}
transformData()