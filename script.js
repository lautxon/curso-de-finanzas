function showSection(sectionId) {
    // Ocultar todas
    document.querySelectorAll('.content-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // Mostrar activa
    const activeSec = document.getElementById(sectionId);
    if(activeSec) activeSec.classList.add('active');

    // Activar botón
    const activeBtn = Array.from(document.querySelectorAll('.nav-btn')).find(b => b.getAttribute('onclick').includes(sectionId));
    if(activeBtn) activeBtn.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => showSection('intro'));