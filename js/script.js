document.addEventListener("DOMContentLoaded", function() {
    // Função para lidar com o clique nos links da barra lateral
    function handleNavLinkClick(event) {
        event.preventDefault(); // Prevenir o comportamento padrão de redirecionamento

        // Obter o ID da seção correspondente ao link clicado
        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        // Rolar suavemente para a seção correspondente
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Obter todos os links da barra lateral
    var navLinks = document.querySelectorAll('.aside a');

    // Adicionar um ouvinte de evento de clique a cada link da barra lateral
    navLinks.forEach(function(link) {
        link.addEventListener('click', handleNavLinkClick);
    });
});












document.addEventListener("DOMContentLoaded", function() {
    var pdfLinks = document.querySelectorAll('.pdf-link');
    var pdfIframe = document.getElementById('pdf-iframe');

    pdfLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var pdfName = this.getAttribute('data-pdf');
            var pdfUrl = 'PRAs/' + pdfName; 
            pdfIframe.src = pdfUrl;
        });
    });
});
