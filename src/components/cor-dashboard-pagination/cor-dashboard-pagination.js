import Component from '../component.js';
import Template from './template.js';

export default class CorDashboardPagination extends Component {
    constructor() {
        super();

        this.articles = document.querySelectorAll('.cor-dashboard-detailed-item');
        this.currentPage = 1;
        this.totalItems = [...this.articles].length;
        this.itemsPerPage = 2;
        this.totalOfPages = Math.round(this.totalItems / this.itemsPerPage);
    }

    connectedCallback() {
        this.createPagination(this.totalItems, this.itemsPerPage, this.currentPage, this.totalOfPages);
        this.addEventListener('click', this._onClick);
    }

    reset() {
        [...this.articles].map((article, index) => {
            article.hidden = "hidden";
        });

    }

    _selectArticles(newPage) {
        this.reset();
        this.currentPage = newPage;

        const startBatch = this.itemsPerPage * (newPage - 1);
        const endBatch = (this.itemsPerPage * (newPage - 1)) + this.itemsPerPage;

        [...this.articles].slice(startBatch, endBatch).map((article, index) => {
            article.hidden = false;
        });

        this.updatePagination(newPage);
    }

    _onClick(event) {

        if (event.target.dataset.page) this._selectArticles(parseInt(event.target.dataset.page, 10));
        // Previous page
        if (event.target.dataset.target === "-1" && this.currentPage > 1) this._selectArticles(this.currentPage - 1);
        // Next page
        if (event.target.dataset.target === "+1" && this.currentPage < this.totalOfPages) this._selectArticles(this.currentPage + 1);
        // First page
        if (event.target.dataset.target === "first") this._selectArticles(1);
        // Last page
        if (event.target.dataset.target === "last") this._selectArticles(this.totalOfPages);
    }

    createPagination(totalItems, itemsPerPage, currentPage, totalOfPages) {

        [...this.articles].map((article, index) => {
            if (index >= itemsPerPage) article.hidden = "hidden";
        });

        this.innerHTML = Template.render(totalOfPages, currentPage);
    }

    updatePagination(currentPage) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`[data-page="${currentPage}"]`).classList.add('active');
    }
}

if (!customElements.get('cor-dashboard-pagination')) {
    customElements.define('cor-dashboard-pagination', CorDashboardPagination);
}