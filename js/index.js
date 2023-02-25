// load the data from API
const loadData= async (result,limit) =>{

    try{
        const url = `https://openapi.programming-hero.com/api/phones?search=${result}`;
        const res = await fetch(url);
        const datas =await res.json();
        displayData(datas.data, limit);
    }
    catch(ex){
        console.log(ex);
    }

}

const findDataStart=(limit)=>{
    isloading(true);
    const result = document.getElementById("search-input").value;
    loadData(result,limit);
}

// search the loaded data
const displayData=(data, limit)=>{

    const phoneContainer = document.getElementById("phone-container");
    phoneContainer.innerHTML="";

    // show limited search result:
    const showAll = document.getElementById("showAllbtn-Container");
    if(limit && data.length>12){
        data = data.slice(0,12);
        showAll.classList.remove("d-none");
    }
    else{
        showAll.classList.add("d-none");
    }

    // show search results with toggle messages:
    const noResult = document.getElementById("no-result");
    if(data.length===0){
        noResult.classList.remove("d-none");
    }
    else{
        noResult.classList.add("d-none");
    }

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

    // data loading end
    isloading(false);

}



const isloading=(value)=>{
    const spinner = document.getElementById("spinner");
    if(value){
        spinner.classList.remove("d-none");
    }
    else{
        spinner.classList.add("d-none");
    }
}

// search phone btn event
document.getElementById("search-btn").addEventListener("click",()=>{
    // data loading start
    findDataStart(12);
});

// btn show all :
document.getElementById("btn-showAll").addEventListener("click",()=>{
    findDataStart();
    document.getElementById("search-input").value="";
});


// loadData();