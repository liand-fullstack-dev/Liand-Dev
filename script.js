        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px'
        };

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    skillObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card').forEach(card => {
            skillObserver.observe(card);
        });

        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    card.classList.add('animate');
                    
                    const targetCount = parseInt(card.getAttribute('data-count'));
                    const numberElement = card.querySelector('.stat-number');
                    
                    animateCounter(numberElement, 0, targetCount, 2000);
                    
                    statObserver.unobserve(card);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card').forEach(card => {
            statObserver.observe(card);
        });

        function animateCounter(element, start, end, duration) {
            let startTime = null;
            
            function animate(currentTime) {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                
                const current = Math.floor(progress * (end - start) + start);
                element.textContent = current + '+';
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            }
            
            requestAnimationFrame(animate);
        }
        
(function() {
    const words = ["amazing websites. ✨", "modern UI/UX. 🎨", "high-performance apps. ⚡"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typingElement = document.querySelector('.typing-text');
    
    function typeEffect() {
        if (!typingElement) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100; 
        
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();
})();

        
    //bagian js footer🗿
    (function() {

    const starsContainer = document.querySelector('.cosmic-footer .stars');
    if (starsContainer) {
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            starsContainer.appendChild(star);
        }
    }

    // Footer scroll animation
    const footer = document.querySelector('.cosmic-footer');
    
    if (footer) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible');
                }
            });
        }, observerOptions);

        observer.observe(footer);
    }
})();

document.querySelectorAll('.btn-trakteer').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const trakteerBtn = document.querySelector('#trbtn') || document.querySelector('.trbtn');
        
        if (trakteerBtn) {
            trakteerBtn.click();
        } else {
            window.open('https://trakteer.id/liand-fullstack-dev/tip', '_blank');
        }
    });
});