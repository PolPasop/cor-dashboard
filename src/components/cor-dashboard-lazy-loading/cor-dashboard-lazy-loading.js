export default function corDashboardLazyLoading() {

    const imageObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('cor-dashboard-lazy-load--visible');
            }
        })
    });

    const articles = document.querySelectorAll('.cor-dashboard-detailed-item');
    [...articles].map( article => {
        article.classList.add('cor-dashboard-lazy-load__element')
        imageObserver.observe(article);
    });
    
} 