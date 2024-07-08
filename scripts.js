document.addEventListener('DOMContentLoaded', function() {
    // FUNGSI DROPDOWN KETIKA KURSOR MENGARAH KE DROPDOWN
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            let content = this.querySelector('.dropdown-content');
            content.classList.toggle('show');
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            let dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    });

    // FUNGSI UNTUK BERJALAN NYA TULISAN ORANG HILANG
    const marquee = document.querySelector('.marquee-content');
    const marqueeWidth = marquee.offsetWidth;
    const containerWidth = document.querySelector('.marquee').offsetWidth;

    marquee.innerHTML += marquee.innerHTML;
    marquee.style.animationDuration = `${(marqueeWidth / containerWidth) * 10}s`;
});
