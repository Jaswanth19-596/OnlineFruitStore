const fruits = [
  {
    name: "pineapple",
    price: 20,
    quantity: 0,
    availability: 2000,
    url: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "apple",
    price: 10,
    quantity: 0,
    availability: 8000,
    url: "https://images.unsplash.com/photo-1600423115367-87ea7661688f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "orange",
    price: 40,
    quantity: 0,
    availability: 10000,
    url: "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "strawberry",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "custard Apple",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1633027473491-bfa663ffbb91?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grapes",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1539519532614-723937382b86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kiwi",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1584209742773-f7b461564449?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Orange",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Papaya",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1581242335635-ce8631489ac5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mango",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Butter Fruit",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://imgs.search.brave.com/ta-nPC3DXmg8JXVSVM1DH9m7GxSQdhmvROo3KvGoQC4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9T/R0IzQlAwTy1UMFlk/bXdwcmxwVmpuZWhS/VmM9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9HZXR0eUltYWdl/cy0xODUyMjcwMzkt/NTg5ZDViMDY1Zjli/NTg4MTljZTY0NDEw/LmpwZw",
  },
  {
    name: "Figs",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://plus.unsplash.com/premium_photo-1670475951143-d0321ab4802d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jack Fruit",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1596626233681-39f5eb87d501?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Guava",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1629367308496-a2496ba22f88?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Black Plum",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1627544282015-38a64d2ce8c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Musk Melon",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1615485290690-285a539321e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Water Melon",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1621583441131-c8c190794970?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pear",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://plus.unsplash.com/premium_photo-1669905375079-5d7e074fc123?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pomogranate",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1700663654497-0eb7cdc152b6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sapota",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1699863164935-633665c05731?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Banana",
    price: 50,
    quantity: 0,
    availability: 20000,
    url: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

if (localStorage.getItem("fruits") == null) {
  localStorage.setItem("fruits", JSON.stringify(fruits));
}

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

if (localStorage.getItem("totalPrice") === null) {
  localStorage.setItem("totalPrice", JSON.stringify(0));
}

const basket = localStorage.getItem("basket");

const totalPrice = localStorage.getItem("totalPrice");
