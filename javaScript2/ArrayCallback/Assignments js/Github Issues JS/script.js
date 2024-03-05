// javascript code goes here

let pageNumberHere = 1;

async function fetchByPage(){
    const pageNumber = document.getElementById("page_indicator");
    const container = document.getElementById("issue_container");
    pageNumber.innerText = `Page number ${pageNumberHere}`;

    const apiData = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`);
    const parsedData = await apiData.json();

    let store = ""

    parsedData.forEach(issue => {
        store += `<li>${issue.title}</li>`
    })

    container.innerHTML = store;
}

fetchByPage(pageNumberHere);


function loadNext(){
    if(pageNumberHere === 5) return;
    pageNumberHere++
    fetchByPage();
}

function loadPrev(){
    if(pageNumberHere === 1) return;
    pageNumberHere--
    fetchByPage();
    
}