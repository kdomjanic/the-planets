'use strict';

const imageOverview = document.querySelector('.imageOverview')
const imageInternal = document.querySelector('.imageInternal')
const imageSurface = document.querySelector('.imageSurface')

const textOverview = document.querySelector('.textOverview')
const textInternal = document.querySelector('.textInternal')
const textSurface = document.querySelector('.textSurface')

const btnOverview = document.querySelector('.btn-overview')
const btnInternal = document.querySelector('.btn-internal')
const btnSurface = document.querySelector('.btn-surface')


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
    btnInternal.classList.add('active')
    imageInternal.classList.remove('hidden');
    textInternal.classList.remove('hidden');
    btnSurface.classList.remove('active')
    imageSurface.classList.add('hidden');
    textSurface.classList.add('hidden')
})

btnSurface.addEventListener('click',  () => {
    btnOverview.classList.remove('active')
    imageOverview.classList.remove('hidden');
    textOverview.classList.add('hidden');
    btnInternal.classList.remove('active')
    imageInternal.classList.add('hidden');
    textInternal.classList.add('hidden');
    btnSurface.classList.add('active')
    imageSurface.classList.remove('hidden');
    textSurface.classList.remove('hidden')
})