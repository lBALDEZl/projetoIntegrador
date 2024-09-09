            const logomarca = document.getElementById('logomarca');
            const logotipo = document.getElementById('logotipo');
            const initialSizePercentage = 100;

            function updateLogoSize() {
                const finalSize = document.querySelector('.top-nav').offsetHeight;
                const scrollY = window.scrollY;
                const vw = window.innerWidth;
                let bannerHeight = document.querySelector('.banner').offsetHeight;
                let logomarcaHeight = parseFloat(logomarca.style.height);

                let stopPoint = bannerHeight;
                let scale = 1;

                if (scrollY < stopPoint) {
                    scale = scale - (scrollY / stopPoint);
                }

                scale = Math.max(scale, (650 / vw));
                logomarca.style.width = `${initialSizePercentage * scale}%`;
                logomarca.style.height = `${initialSizePercentage * scale}%`;

                if (scrollY >= stopPoint) {
                    logomarca.classList.add("scrolled");
                    logomarca.style.top = '0';
                } else {
                    logomarca.classList.remove("scrolled");
                    logomarca.style.top = `${stopPoint - scrollY}px`;
                    logotipo.style.opacity = 0;
                }

                if (scrollY >= stopPoint) {
                    logomarca.style.width = `${finalSize + 60}px`;
                    logomarca.style.height = `${finalSize - 10}px`;
                    logotipo.style.opacity = 1;
                    logotipo.style.paddingLeft = `calc(${logomarca.style.height} + 9vw)`;
                }

            }

            window.addEventListener('resize', updateLogoSize);
            window.addEventListener('scroll', updateLogoSize);

            updateLogoSize();