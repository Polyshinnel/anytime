document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector('.more-text')) {
        addReadmoreHeight();
        let moreTextBtns = document.querySelectorAll('.more-text')
        moreTextBtns.forEach((button) => {
            button.addEventListener('click', () => {
                readMore(button)
            })
        })
    }
    
    if(document.querySelector('.product-list__item-tab-head__item')) {
        let tabBtns = document.querySelectorAll('.product-list__item-tab-head__item')
        tabBtns.forEach((item) => {
            item.addEventListener('click', () => {
                changeTab(item)
            })
        })
    }

    if(document.querySelector('.product-quantity-btn')) {
        document.querySelectorAll('.product-quantity-btn-minus').forEach((btn) => {
            btn.addEventListener('click', () => {
                let input = btn.parentElement.querySelector('.product-quantity-input')
                let currVal = parseInt(input.value) - 1
                if(currVal < 1) {
                    currVal = 1
                }
                input.value = currVal
            })
        })

        document.querySelectorAll('.product-quantity-btn-plus').forEach((btn) => {
            btn.addEventListener('click', () => {
                let input = btn.parentElement.querySelector('.product-quantity-input')
                let currVal = parseInt(input.value) + 1
                input.value = currVal
            })
        })
    }

    if(document.querySelector('.custom-select__list-item')) {
        document.querySelectorAll('.custom-select__list-item').forEach((item) => {
            item.addEventListener('click', function() {
                console.log('click!')
            })
        })
    }

    if(document.querySelector('.faq-section__item')) {
        let faqItem = document.querySelectorAll('.faq-section__item')
        faqItem.forEach((item) => {
            item.querySelector('.faq-section__item-body').style.height = 0
            item.addEventListener('click', () => {
                let textBody = item.querySelector('.faq-section__item-body')
                let textHeight = item.querySelector('.faq-section__item-body p').clientHeight
                textHeight = parseInt(textHeight) + 40
                let img = item.querySelector('.faq-section__item-head img')

                if(item.classList.contains('faq-section__item_active')) {
                    item.classList.remove('faq-section__item_active')
                    textBody.style.height = 0
                    img.src = 'assets/img/icons/common/plus-w.svg'
                } else {
                    item.classList.add('faq-section__item_active');
                    textBody.style.height = `${textHeight}px`
                    img.src = 'assets/img/icons/common/minus-w.svg'
                }
            })
        })
    }
})

const addReadmoreHeight = () => {
    let textBlock = document.querySelectorAll('.product-list__item-description-block__text');
    textBlock.forEach((item) => {
        console.log(calculateTotalHeight(item))
        let firstSection = item.querySelector('p:first-child')
        item.style.maxHeight = (parseInt(firstSection.clientHeight) + 10)+'px'
    })
}

const calculateMinHeigth = (textBlock) => {
    let firstSection = textBlock.querySelector('p:first-child')
    let minHeight = (parseInt(firstSection.clientHeight) + 10)+'px'
    return minHeight
}

const calculateTotalHeight = (textBlock) => {
    let totalHeight = 0
    let sectionItems = textBlock.querySelectorAll('p')
    sectionItems.forEach((unit) => {
        totalHeight += (parseInt(unit.clientHeight) + 10);
    })
    return totalHeight + 'px';
}

const readMore = (button) => {
    console.log(button)
    let container = button.parentElement.querySelector('.product-list__item-description-block__text')
    if(container.classList.contains('active')) {
        container.classList.remove('active')
        container.style.maxHeight = calculateMinHeigth(container)
        button.textContent = 'Подробнее...'
    } else {
        container.classList.add('active');
        container.style.maxHeight = calculateTotalHeight(container)
        button.textContent = 'Скрыть'
    }
}

const changeTab = (tabBtn) => {
    let attrName = tabBtn.getAttribute('data-item')
    let tabs = document.querySelectorAll('.product-list__item-tab')
    let tabBtns = document.querySelectorAll('.product-list__item-tab-head__item')
    tabBtns.forEach((btn) => {
        btn.classList.remove('product-list__item-tab-head__item_active')
    })
    tabBtn.classList.add('product-list__item-tab-head__item_active')
    tabs.forEach((tab) => {
        tab.classList.remove('product-list__item-tab_active')
        if(tab.getAttribute('data-item') == attrName) {
            tab.classList.add('product-list__item-tab_active')
        }
    })
}

document.querySelector('.custom-select__current').addEventListener('click', function(e){
    let selectList = this.parentNode.querySelector('.custom-select__list')
    let arrow = this.parentNode.querySelector('.select-arrow')
    selectList.classList.toggle('custom-select__list-active')
    arrow.classList.toggle('select-arrow_active')
})

document.querySelector('.yuwell-menu').addEventListener('click', function() {
    let menu = document.querySelector('.header-menu')
    menu.classList.toggle('header-menu_active')
})

document.querySelector('.close-menu').addEventListener('click', function() {
    let menu = document.querySelector('.header-menu')
    menu.classList.toggle('header-menu_active')
})


document.querySelector('.yuwell-cart__block').addEventListener('click', function() {
    let menu = document.querySelector('.cart-block')
    menu.classList.toggle('cart-block_active')
})

document.querySelector('.close-cart').addEventListener('click', function() {
    let menu = document.querySelector('.cart-block')
    menu.classList.toggle('cart-block_active')
})

if(document.querySelector('.more-info-scroll')) {
    document.querySelector('.more-info-scroll').addEventListener('click', function() {
        document.getElementById('info-targer').scrollIntoView({ behavior: 'smooth' });
    })
}
