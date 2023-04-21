'use strict';

// const imageContainer = document.querySelector('.image-container')

const imageOverview = document.querySelector('.image-overview')
const imageInternal = document.querySelector('.image-internal')
const imageSurface = document.querySelector('.image-surface')

const textOverview = document.querySelector('.text-overview')
const textInternal = document.querySelector('.text-internal')
const textSurface = document.querySelector('.text-surface')

const sideNavigation = document.querySelector('.side-navigation')

const btnOverview = document.querySelector('.btn-overview')
const btnInternal = document.querySelector('.btn-internal')
const btnSurface = document.querySelector('.btn-surface')
const btnMenu = document.querySelector('.menu-icon')
const btnNavigationOverview = document.querySelector('.btn-navi-overview')
const btnNavigationInternal = document.querySelector('.btn-navi-internal')
const btnNavigationSurface = document.querySelector('.btn-navi-surface')


btnOverview.addEventListener('click',  () => {
    btnOverview.classList.add('active')
    imageOverview.classList.remove('hidden');
    textOverview.classList.remove('hidden');
    btnInternal.classList.remove('active')
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnSurface.classList.remove('active')
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden')
})

btnInternal.addEventListener('click',  () => {
    btnOverview.classList.remove('active');
    imageOverview.classList.add('hidden');
    textOverview.classList.add('hidden');
    btnInternal.classList.add('active');
    imageInternal.classList.remove('hidden');
    textInternal.classList.remove('hidden');
    btnSurface.classList.remove('active');
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden')
})

btnSurface.addEventListener('click',  () => {
    btnOverview.classList.remove('active');
    imageOverview.classList.remove('hidden');
    textOverview.classList.add('hidden');
    btnInternal.classList.remove('active');
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnSurface.classList.add('active');
    imageSurface.classList.remove('hidden');
    textSurface.classList.remove('hidden')
})

btnNavigationOverview.addEventListener('click',  () => {
    btnNavigationOverview.classList.add('active-tab');
    imageOverview.classList.remove('hidden');
    textOverview.classList.remove('hidden');
    btnNavigationInternal.classList.remove('active-tab');
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnNavigationSurface.classList.remove('active-tab');
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden');
    // imageContainer.classList.add('image');
    // imageContainer.classList.remove('image-surface-alignment');
})

btnNavigationInternal.addEventListener('click',  () => {
    btnNavigationOverview.classList.remove('active-tab');
    imageOverview.classList.add('hidden');
    textOverview.classList.add('hidden');
    btnNavigationInternal.classList.add('active-tab');
    imageInternal.classList.remove('hidden');
    textInternal.classList.remove('hidden');
    btnNavigationSurface.classList.remove('active-tab');
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden');
    // imageContainer.classList.add('image');
    // imageContainer.classList.remove('image-surface-alignment');
})

btnNavigationSurface.addEventListener('click',  () => {
    btnNavigationOverview.classList.remove('active-tab');
    imageOverview.classList.remove('hidden');
    textOverview.classList.add('hidden');
    btnNavigationInternal.classList.remove('active-tab');
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnNavigationSurface.classList.add('active-tab');
    imageSurface.classList.remove('hidden');
    textSurface.classList.remove('hidden');
    // imageContainer.classList.remove('image');
    // imageContainer.classList.add('image-surface-alignment');
})

btnMenu.addEventListener('click', () => {
    if(sideNavigation.classList.value === 'side-navigation hidden') {
        sideNavigation.classList.remove('hidden');
    } else {sideNavigation.classList.add('hidden')
    }
})