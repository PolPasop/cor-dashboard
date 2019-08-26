
export default {
    render(numberOfPages) {
        console.log(numberOfPages);
        return `
            ${this.html(numberOfPages)}
        `
    },

    html(numberOfPages) {
        return `
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    ${Array(numberOfPages).fill().map( (item,index) => `<li class="page-item"><a class="page-link" href="#">${index + 1}</a></li>`).join('')}
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        `
    }
}