document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('requestCall');
    const modal = document.getElementById('modalGetCall');
    const overModalBtn = document.getElementById('sendRequest');
    const openOverModal = document.getElementById('overModal');
    const closeBtn = document.getElementsByClassName('close');
    const redirectErrorPage = document.getElementById('showOffer');
    const openMenuProducts = document.querySelectorAll('div.commonSpanMainMenu');
    const showProductMenu = document.getElementsByClassName('productMenu')[0];
    const hideSpan = document.getElementsByClassName('mainBanner')[0];
    const hideMainBanner = document.getElementsByClassName('mainBannerImage')[0];
    const showNewImageRight = document.getElementsByClassName('buttonBannerRight')[0];
    const showNewImageLeft = document.getElementsByClassName('buttonBannerLeft')[0];
    const newImage = document.getElementsByClassName('mainBannerImage')[0];
    const textImage = document.getElementsByClassName('bannerTextOnImage')[0];
    const circleColorOne = document.querySelector('div.paginationBanner > div:nth-child(1)');
    const circleColorTwo = document.querySelector('div.paginationBanner > div:nth-child(2)');
    const circleColorThree = document.querySelector('div.paginationBanner > div:nth-child(3)');
    const circleColorFour = document.querySelector('div.paginationBanner > div:nth-child(4)');
    const circleColorFive = document.querySelector('div.paginationBanner > div:nth-child(5)');
    let currentImageIndex = 0;

    function disableScroll() {
        document.body.classList.add('noScroll');
    }

    function enableScroll() {
        document.body.classList.remove('noScroll');
    }

    if (closeBtn.length > 0) {
        const firstCloseBtn = closeBtn[0];
        const secondCloseBtn = closeBtn[1];
        const threeCloseBtn = closeBtn[2];

        firstCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            enableScroll();
        });

        secondCloseBtn.addEventListener('click', () => {
            openOverModal.style.display = 'none';
            enableScroll();
        });

        threeCloseBtn.addEventListener('click', () => {
            openOverModal.style.display = 'none';
            enableScroll();
        });
    }

    function disableBlock() {
        modal.style.display = 'none';
    }

    function oneEvent(background, backgroundSize) {
        newImage.style.background = background;
        newImage.style.backgroundSize = backgroundSize;
    }

    const imagePaths = [
        '../images_adaptive_layout/hat/mainBannerImage.png',
        '../images_adaptive_layout/mapTransition/oneClickImage.png',
        '../images_adaptive_layout/mapTransition/twoClickImage.png',
        '../images_adaptive_layout/mapTransition/threeClickImage.png',
        '../images_adaptive_layout/mapTransition/fourClickImage.png'
    ];

    const circleArr = [
        circleColorOne,
        circleColorTwo,
        circleColorThree,
        circleColorFour,
        circleColorFive
    ];

    showNewImageRight.addEventListener('click', () => {
        // Обновляем изображение
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;

        oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

        // Меняем класс у элемента массива circleArr
        const prevIndex = currentImageIndex === 0 ? imagePaths.length - 1 : currentImageIndex - 1;
        circleArr[prevIndex].classList.remove('circlePaginationOne');
        circleArr[currentImageIndex].classList.add('circlePaginationOne');

        if (currentImageIndex === 2) { // Проверка, если текущее изображение - третье в массиве
            textImage.style.color = 'black'; // Изменение цвета текста
        } else {
            textImage.style.color = ''; // Сброс цвета текста
        }
    });

    showNewImageLeft.addEventListener('click', () => {
        circleArr[currentImageIndex].classList.remove('circlePaginationOne');

        // Уменьшаем индекс изображения для перемещения в обратном порядке
        currentImageIndex = (currentImageIndex === 0) ? imagePaths.length - 1 : currentImageIndex - 1;
        oneEvent(`url("${imagePaths[currentImageIndex]}")`, 'cover');

        // Добавляем класс предыдущему элементу
        circleArr[currentImageIndex].classList.add('circlePaginationOne');

        if (currentImageIndex === 2) {
            textImage.style.color = 'black';
        } else {
            textImage.style.color = '';
        }
    });

    openMenuProducts.forEach(element => {
        element.addEventListener('click', () => {
            if (showProductMenu.style.display === 'none' || showProductMenu.style.display === '') {
                showProductMenu.style.display = 'flex';
                hideSpan.style.display = 'none';
                hideMainBanner.style.display = 'none';
            } else {
                showProductMenu.style.display = 'none';
                hideSpan.style.display = 'flex';
                hideMainBanner.style.display = 'flex';
            }
        });
    });

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        disableScroll();
    });

    overModalBtn.addEventListener('click', () => {
        openOverModal.style.display = 'flex';
        disableBlock();
    });

    redirectErrorPage.addEventListener('click', () => {
        window.location.href = 'http://localhost:63342/repos-UI/lending/CBC_adaptive_layout/CBC_404/CBC_404.html';
    })
})