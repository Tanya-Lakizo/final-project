function portfolio() {
    const filter = function () {
        const filters = document.querySelector('.portfolio__filter');
        const list = document.querySelector('.portfolio__list');
    
        const changeActiveTab = function (event) {
            let targetTab = event.target;
    
            inactivateTab();
            activeTab(targetTab);
    
            let dataFilterValue = getDataFilter(targetTab);
            filterListElements(dataFilterValue);
        }
    
        const inactivateTab = function () {
            let children = filters.children;
    
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove('active');
            }
        }
    
        const activeTab = function (targetTab) {
            targetTab.classList.add('active');
        }
    
        const getDataFilter = function (targetTab) {
            return targetTab.dataset.filter;
        }
    
        const filterListElements = function (dataFilterValue) {
            showAllElements();
            hideElements(dataFilterValue);
        }
    
        const showAllElements = function () {
            let children = list.children;
    
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove('hide');
            }
        }
        
        const hideElements = function (dataFilterValue) {
            let children = list.children;
            
            for (let i = 0; i < children.length; i++) {
    
                if (
                    dataFilterValue !== 'all'
                    && children[i].dataset.filter !== dataFilterValue
                ) {
                    children[i].classList.add('hide');
                }
            }
        }
    
        filters.addEventListener('click', changeActiveTab);
    }
    filter();
}

export default portfolio;