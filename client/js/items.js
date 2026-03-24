async function loadItems(){

try{

const res = await fetch("http://localhost:5000/api/items");
const items = await res.json();

const container = document.getElementById("itemsContainer");

container.innerHTML="";

items.forEach(item=>{

const card = document.createElement("div");

card.classList.add("item-card");

card.innerHTML = `

<img src="http://localhost:5000/uploads/${item.image}" />

<h3>${item.title}</h3>

<p>${item.description}</p>

<p><b>City:</b> ${item.city}</p>

<p><b>Type:</b> ${item.type}</p>

<p class="reward">Reward: ₹${item.reward}</p>

<button onclick="deleteItem('${item._id}')">Delete</button>

`;

container.appendChild(card);

});

}catch(err){
console.log("Error loading items:", err);
}

}


async function deleteItem(id){

const confirmDelete = confirm("Are you sure you want to delete this item?");

if(!confirmDelete) return;

try{

const res = await fetch(`http://localhost:5000/api/items/${id}`,{
method:"DELETE"
});

const data = await res.json();

alert(data.message); // shows "Item deleted successfully"

loadItems();

}catch(err){
console.log("Delete error:", err);
}

}


loadItems();