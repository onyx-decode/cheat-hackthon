import { ContentNavbar } from '../Content/mapContent.js';

function Navbar() {
    return `
        <nav class="navbar">
            ${ContentNavbar.map(item => `<a href="${item.href}">${item.name}</a>`).join('   ')}
        </nav>
    `;
}

export default Navbar;
