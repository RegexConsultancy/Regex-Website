document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.getElementById('shared-footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <p>&copy; 2026 Regex Consultancy. Capital Markets Regulatory Advisory.</p>
                    <p class="text-slate-600 text-[10px] mt-1">Disclaimer: Content is strictly informational and must not be interpreted as actionable legal or regulatory declarations.</p>
                </div>
                <div class="flex space-x-6 items-center">
                    <a href="https://www.linkedin.com/company/regex-consultancy-com/" target="_blank" rel="noopener noreferrer" class="text-mono-stark hover:text-slate-400 transition-colors" aria-label="LinkedIn">
                        <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    
                    <a href="https://x.com/regex_consult" target="_blank" rel="noopener noreferrer" class="text-mono-stark hover:text-slate-400 transition-colors" aria-label="X (formerly Twitter)">
                        <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    
                    <a href="mailto:regex@regexconsultancy.com" class="text-mono-stark hover:text-slate-400 transition-colors" aria-label="Email Address">
                        <svg class="h-5 w-5 stroke-current fill-none" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }
});
