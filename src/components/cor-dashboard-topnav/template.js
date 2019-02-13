export default {
    render () { 
        return `
        ${this.css()}
        ${this.html()}
        `
    },

    html () {
        return `
            <nav id="cor-dashboard-topnav">
                <a data-view="overview" class="active" href="#">Overview</a>
                <a data-view="detailed" href="#">Detailed</a>
            </nav>  
        `
    },

    css () {
        return `

        `
    }
}