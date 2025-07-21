import { database } from "./database.js";

export const generatePikomonHTML = () => {
    let pikomonHTML = ``
    for (const pikomon of database) {
        pikomonHTML += `
        <article class="piko-card">

            <img src="${pikomon.imageUrl}" alt="image of ${pikomon.name}" class="piko-img"></img>
            <h1 class="piko-name">${pikomon.name}</h1>

            <section>
                <div>
                    <p class="piko-info piko-category">Category:</p>
                    <p class="info-text">${pikomon.category}</p>
                </div>
                <div>
                    <p class="piko-info piko-abilities">Abilities:</p>
                    <p class="info-text">${pikomon.abilities}</p>
                </div>
                <div>
                    <p class="piko-info piko-weakness">Weakness:</p>
                    <p class="info-text">${pikomon.weakness}</p>
                </div>
            </section>
        
        </article>`
    }
    return pikomonHTML
}