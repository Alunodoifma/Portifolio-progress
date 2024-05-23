document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar i');

    // Selecionando os elementos de menu que vão receber funcionalidades diferentes
    const btnContato = document.querySelector('.menu-mobile nav ul li:nth-child(5) a');
    const btnContato2 = document.querySelector('.menu-mobile nav ul li:nth-child(6) a');

    btnMenu.addEventListener('click', function() {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.style.display = 'block';
    });

    btnFechar.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    overlayMenu.addEventListener('click', function() {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    // Adicionando eventos de clique para os botões de Contato e Contato 2
    btnContato.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        window.open('https://api.whatsapp.com/send/?phone=5599992115618&text&type=phone_number&app_absent=0', '_blank');
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    btnContato2.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão do link
        window.open('https://alunodoifma.github.io/FORMULARIO-BETAAA/', '_blank');
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });
});