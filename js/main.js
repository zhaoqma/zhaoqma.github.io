// 主要JavaScript文件 - 为home页面添加交互效果

document.addEventListener('DOMContentLoaded', function() {
    // 数字计数动画
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const duration = 2000; // 2秒
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current) + '+';
            }, 16);
        });
    }

    // 滚动触发动画
    function handleScrollAnimations() {
        const elements = document.querySelectorAll('.research-area, .stat-item, .card, .citation');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // 平滑滚动
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // 导航栏滚动效果
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        }
    }

    // 卡片悬停效果
    function initCardHover() {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // 研究领域卡片效果
    function initResearchAreaHover() {
        const researchAreas = document.querySelectorAll('.research-area');
        
        researchAreas.forEach(area => {
            area.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotate(2deg)';
            });
            
            area.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotate(0deg)';
            });
        });
    }

    // 联系按钮效果
    function initContactButtons() {
        const contactButtons = document.querySelectorAll('.contact-block a');
        
        contactButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // 页面加载完成后的初始化
    function init() {
        // 延迟执行数字动画，确保页面完全加载
        setTimeout(animateNumbers, 500);
        
        // 初始化其他效果
        handleScrollAnimations();
        initSmoothScroll();
        initNavbarScroll();
        initCardHover();
        initResearchAreaHover();
        initContactButtons();
        
        // 添加页面加载动画类
        document.body.classList.add('page-transition');
    }

    // 启动初始化
    init();
});

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
} 