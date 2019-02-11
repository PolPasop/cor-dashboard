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
            <link rel="stylesheet" href="src/corev15.css" />
            <link rel="stylesheet" href="src/bootstrap.min.css">
            <link rel="stylesheet" href="src/components/cor-dashboard-topnav/cor-dashboard-topnav.css" />
        `
    }
}