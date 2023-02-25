const loadData= async (result) =>{

    try{
        const url = `https://openapi.programming-hero.com/api/phones?search=${result}`;
        const res = await fetch(url);
        const datas =await res.json();
        displayData(datas.data);
    }
    catch(ex){
        console.log(ex);
    }

}


const displayData=(data)=>{

    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML="";

    // show search results with toggle messages:
    console.log(data);

    // show all phones
    data.forEach(phone =>{
        const div  = document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top py-2 px-4" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <button class="btn btn-primary"> More Information </button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div);
    });

}


document.getElementById("search-btn").addEventListener("click",()=>{
    const result = document.getElementById("search-input").value;
    loadData(result);
    document.getElementById("search-input").value="";
});


// loadData();