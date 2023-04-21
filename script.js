'use strict';

const imageOverview = document.querySelector('.image-overview')
const imageInternal = document.querySelector('.image-internal')
const imageSurface = document.querySelector('.image-surface')

const textOverview = document.querySelector('.text-overview')
const textInternal = document.querySelector('.text-internal')
const textSurface = document.querySelector('.text-surface')

const sideNavigation = document.querySelector('.side-navigation')
const overlay = document.querySelector('.overlay')

const btnOverview = document.querySelector('.btn-overview')
const btnInternal = document.querySelector('.btn-internal')
const btnSurface = document.querySelector('.btn-surface')
const btnNaviOverview = document.querySelector('.btn-navi-overview')
const btnNaviInternal = document.querySelector('.btn-navi-structure')
const btnNaviSurface = document.querySelector('.btn-navi-surface')


function openOverview() {
    btnOverview.classList.add('active');
    btnNaviOverview.classList.add('active-tab');
    imageOverview.classList.remove('hidden');
    textOverview.classList.remove('hidden');
    btnInternal.classList.remove('active');
    btnNaviInternal.classList.remove('active-tab');
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnSurface.classList.remove('active');
    btnNaviSurface.classList.remove('active-tab');
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden')
}

function openInternalStructure() {
    btnOverview.classList.remove('active');
    btnNaviOverview.classList.remove('active-tab');
    imageOverview.classList.add('hidden');
    textOverview.classList.add('hidden');
    btnInternal.classList.add('active');
    btnNaviInternal.classList.add('active-tab');
    imageInternal.classList.remove('hidden');
    textInternal.classList.remove('hidden');
    btnSurface.classList.remove('active');
    btnNaviSurface.classList.remove('active-tab');
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden')
}

function openSurfaceGeology(){
    btnOverview.classList.remove('active');
    btnNaviOverview.classList.remove('active-tab');
    imageOverview.classList.remove('hidden');
    textOverview.classList.add('hidden');
    btnInternal.classList.remove('active');
    btnNaviInternal.classList.remove('active-tab');
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnSurface.classList.add('active');
    btnNaviSurface.classList.add('active-tab');
    imageSurface.classList.remove('hidden');
    textSurface.classList.remove('hidden')
}

function closeSidenav() {
    sideNavigation.classList.add('hidden');
    overlay.classList.add('hidden');
}

function toggleSidenav() {
    sideNavigation.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}
