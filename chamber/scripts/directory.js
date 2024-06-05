document.addEventListener("DOMContentLoaded", function () {
    const directory = document.getElementById("directory");
    const gridBtn = document.getElementById("grid");
    const listBtn = document.getElementById("list");

    async function getData() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function createGridView(data) {
        directory.innerHTML = ""; 
        data.forEach(company => {
            const card = document.createElement("section");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${company.image}" alt="${company.name}">
                <div>
                    <h3>${company.name}</h3>
                    <p><strong>Address:</strong> ${company.address}</p>
                    <p><strong>Phone:</strong> ${company.phone}</p>
                    <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                    <p><strong>Membership Level:</strong> ${company.membershipLevel}</p>
                    <p><strong>Type:</strong> ${company.type}</p>
                </div>
            `;
            directory.appendChild(card);
        });
    }

    function createListView(data) {
        directory.innerHTML = ""; 
        data.forEach(company => {
            const listItem = document.createElement("section");
            listItem.classList.add("list-item");
            listItem.innerHTML = `
                <div>
                    <h3>${company.name}</h3>
                    <p><strong>Address:</strong> ${company.address}</p>
                    <p><strong>Phone:</strong> ${company.phone}</p>
                    <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                    <p><strong>Membership Level:</strong> ${company.membershipLevel}</p>
                    <p><strong>Type:</strong> ${company.type}</p>
                </div>
            `;
            directory.appendChild(listItem);
        });
    }

    getData().then(data => {
        createGridView(data);
    }).catch(error => {
        console.error("Error:", error);
    });

    gridBtn.addEventListener("click", function () {
        getData().then(data => {
            createGridView(data);
        }).catch(error => {
            console.error("Error:", error);
        });
    });

    listBtn.addEventListener("click", function () {
        getData().then(data => {
            createListView(data);
        }).catch(error => {
            console.error("Error:", error);
        });
    });
});




