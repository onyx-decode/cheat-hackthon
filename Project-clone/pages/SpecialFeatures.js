import { ContentSpecialFeatures } from "../Content/mapContent.js";

function SpecialFeatures() {
    const SFcontent = ContentSpecialFeatures[0]; 

    return `
        <div id="special-features">
            <h1>${SFcontent.title}</h1>
            <img src="${SFcontent.image}" alt="${SFcontent.title}" />
            <p>${SFcontent.description}</p>
            <button class="button1">${SFcontent.buttonText}</button>
        </div>
    `;
}

export default SpecialFeatures;
