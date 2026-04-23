
document.querySelectorAll('.membro').forEach(membro => {
    const img = membro.querySelector('img');

    // Quando o mouse entra membro
    membro.addEventListener('mouseover', () => {
        img.style.display = 'block';

        const rect = img.getBoundingClientRect();
        const espacoAbaixo = window.innerHeight - rect.bottom;

        if (espacoAbaixo < img.offsetHeight) {
            img.style.top = 'auto';
            img.style.bottom = '100%';
        } else {
            img.style.top = '100%';
            img.style.bottom = 'auto';
        }
    });

    // Quando o mouse sai
    membro.addEventListener('mouseleave', () => {
        img.style.display = 'none';
    });
});

document.querySelectorAll('.gen').forEach(gen => {
    const img = gen.querySelector('img');

    // Quando o mouse entra gen
    gen.addEventListener('mouseover', () => {
        img.style.display = 'block';

        const rect = img.getBoundingClientRect();
        const espacoAbaixo = window.innerHeight - rect.bottom;

        if (espacoAbaixo < img.offsetHeight) {
            img.style.top = 'auto';
            img.style.bottom = '100%';
        } else {
            img.style.top = '100%';
            img.style.bottom = 'auto';
        }    
    });

    // Quando o mouse sai
    gen.addEventListener('mouseleave', () => {
        img.style.display = 'none';
    });
});
