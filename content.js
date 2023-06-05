async function getData(){
  const data = await fetch('data.json')
  .then(res => res.json ())
  console.log('test A')
  return data

}

const run = async ()=>{
const contenData = await getData()
console.log(contenData); 
console.log('test B');

const table = document.querySelector('section#content')

// console.log(table)
for (let i = 0; i <contenData.length; i++){
    table.innerHTML += `
    <div class="card">
    <img src="${contenData[i].Image}" />
    <span class="capitalize">${contenData[i].Model}</span>
    <span class="capitalize">${contenData[i].IDR}</span>
    </div>
    `
}
}
 run ()
