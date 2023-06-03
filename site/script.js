// Função para alternar a exibição do menu responsivo
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
  }
  
  // Função para rolar a página suavemente até o topo
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Função para validar o formulário de contato
  function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name === '' || email === '' || message === '') {
      alert('Por favor, preencha todos os campos do formulário.');
      return false;
    }
  
    return true;
  }
  