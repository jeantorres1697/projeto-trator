// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

// Alternar o menu no mobile
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Mudança de cor da navbar ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Função para alternar entre os produtos
document.querySelectorAll('.next-img').forEach(button => {
    button.addEventListener('click', function () {
        const currentProduto = this.getAttribute('data-produto');
        const nextProdutoId = `produto${parseInt(currentProduto.replace('produto', '')) + 1}`;

        // Esconde o produto atual
        document.getElementById(currentProduto).style.display = 'none';

        // Mostra o próximo produto
        const nextProduto = document.getElementById(nextProdutoId);
        if (nextProduto) {
            nextProduto.style.display = 'block';
        }
    });
});

// Controle de navegação de imagens na galeria
document.querySelector('.prev').addEventListener('click', function () {
    let images = document.querySelectorAll('.galeria-item');
    let currentImage = document.querySelector('#mainImage');
    let currentIndex = Array.from(images).indexOf(currentImage);

    if (currentIndex === 0) {
        currentImage.src = images[images.length - 1].src;
    } else {
        currentImage.src = images[currentIndex - 1].src;
    }
});

document.querySelector('.next').addEventListener('click', function () {
    let images = document.querySelectorAll('.galeria-item');
    let currentImage = document.querySelector('#mainImage');
    let currentIndex = Array.from(images).indexOf(currentImage);

    if (currentIndex === images.length - 1) {
        currentImage.src = images[0].src;
    } else {
        currentImage.src = images[currentIndex + 1].src;
    }
});

// Alternar descrição do produto
document.querySelector('.show-description').addEventListener('click', function () {
    const description = document.querySelector('.descricao-produto');
    description.style.display = (description.style.display === 'none') ? 'block' : 'none';
});

// Funcionalidade de esconder/mostrar o menu conforme rolagem
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
});
