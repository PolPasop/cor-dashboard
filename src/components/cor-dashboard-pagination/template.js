
export default {
    render(numberOfPages, currentPage) {
        return `
            ${this.html(numberOfPages, currentPage)}
        `
    },

    html(numberOfPages, currentPage) {
        return `
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#" data-target="first">First</a></li>
                <li class="page-item"><a class="page-link" href="#" data-target="-1">Previous</a></li>
                ${Array(numberOfPages).fill().map((item, index) => `
                <li class="page-item">
                    <a class="page-link
                    ${index + 1 === currentPage ? `active` : ``}
                    " href="#" data-page="${index + 1}">${index + 1}</a></li>
                `).join('')}
                <li class="page-item"><a class="page-link" href="#" data-target="+1">Next</a></li>
                <li class="page-item"><a class="page-link" href="#" data-target="last">Last</a></li>
            </ul>
        </nav>
        `
    }
}