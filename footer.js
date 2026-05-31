document.addEventListener('DOMContentLoaded', () => {
    const footerElement = document.getElementById('shared-footer');
    if (footerElement) {
        footerElement.className = "bg-[#05070B] text-[#C9D1D9] py-16 border-t border-zinc-900 text-xs font-sans relative overflow-hidden";
        
        footerElement.innerHTML = `
            <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
                    
                    <div class="lg:col-span-4 space-y-6">
                        <div>
                            <span class="text-[#C8A45D] font-black text-base tracking-tighter uppercase block">Regex Consultancy</span>
                            <p class="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mt-1 leading-relaxed">
                                Strategic Regulatory Advisory<br>for Capital Market Institutions
                            </p>
                        </div>

                        <div class="space-y-3 pt-2">
                            <span class="text-[#C8A45D] font-bold uppercase tracking-wider text-[11px] block">Regulatory Intelligence Updates</span>
                            <p class="text-zinc-500 text-[11px] leading-relaxed">Receive important capital market regulatory developments.</p>
                            <form action="#" method="POST" class="flex max-w-sm mt-2" onsubmit="event.preventDefault();">
                                <input type="email" placeholder="Email Address" required class="bg-[#121620] border border-zinc-800 text-white text-xs px-3 py-2 w-full focus:outline-none focus:border-[#C8A45D] transition-colors rounded-none">
                                <button type="submit" class="bg-white hover:bg-[#C8A45D] text-black font-bold uppercase tracking-wider text-[10px] px-4 py-2 transition-colors duration-300 rounded-none">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div class="lg:col-span-2 space-y-3">
                        <span class="text-[#C8A45D] font-bold uppercase tracking-wider text-[11px] block">Expertise</span>
                        <ul class="space-y-2 text-zinc-400">
                            <li><a href="expertise.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">PMS & AIF Structuring</a></li>
                            <li><a href="expertise.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Licensing Advisory</a></li>
                            <li><a href="expertise.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Compliance Reviews</a></li>
                            <li><a href="expertise.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Governance Design</a></li>
                            <li><a href="expertise.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Regulatory Audits</a></li>
                        </ul>
                    </div>

                    <div class="lg:col-span-2 space-y-3">
                        <span class="text-[#C8A45D] font-bold uppercase tracking-wider text-[11px] block">Who We Advise</span>
                        <ul class="space-y-2 text-zinc-400">
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Portfolio Managers</a></li>
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Alternative Investment Funds</a></li>
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Research Analysts</a></li>
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Investment Advisers</a></li>
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Brokerages</a></li>
                            <li><a href="index.html#who-we-advise" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">FinTech Firms</a></li>
                        </ul>
                    </div>

                    <div class="lg:col-span-2 space-y-4">
                        <div>
                            <span class="text-[#C8A45D] font-bold uppercase tracking-wider text-[11px] block mb-3">Insights</span>
                            <ul class="space-y-2 text-zinc-400">
                                <li><a href="insights.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Regulatory Alerts</a></li>
                                <li><a href="insights.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Industry Commentary</a></li>
                                <li><a href="insights.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Governance Notes</a></li>
                                <li><a href="insights.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200">Knowledge Center</a></li>
                            </ul>
                        </div>
                        
                        <div class="border border-zinc-800 p-3 bg-[#0a0e17]/60">
                            <span class="text-[#C8A45D] font-mono text-[9px] uppercase tracking-widest block mb-1">Latest Insight</span>
                            <a href="insights.html" class="font-bold text-[11px] text-[#C9D1D9] hover:text-[#C8A45D] transition-colors leading-snug block group">
                                SEBI Clarifies Operational Requirements for PMS Structures 
                                <span class="text-[#C8A45D] group-hover:translate-x-1 inline-block transition-transform ml-0.5">→</span>
                            </a>
                        </div>
                    </div>

                    <div class="lg:col-span-2 space-y-3">
                        <span class="text-[#C8A45D] font-bold uppercase tracking-wider text-[11px] block">Contact</span>
                        <ul class="space-y-2.5 text-zinc-400 font-medium">
                            <li><a href="contact.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200 block">Mumbai Office</a></li>
                            <li><a href="contact.html" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200 block">Ahmedabad Office</a></li>
                            <li><a href="mailto:regex@regexconsultancy.com" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200 block underline decoration-zinc-800">Email Desk</a></li>
                            <li><a href="https://www.linkedin.com/company/regex-consultancy-com/" target="_blank" rel="noopener noreferrer" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200 block">LinkedIn Profile</a></li>
                            <li><a href="https://x.com/regex_consult" target="_blank" rel="noopener noreferrer" class="hover:text-[#C8A45D] text-[#C8A45D] transition-colors duration-200 block">X / Twitter Feed</a></li>
                        </ul>
                    </div>

                </div>

                <div class="pt-8 space-y-6">
                    
                    <div class="text-center font-mono text-[10px] tracking-[0.2em] text-zinc-600 uppercase">
                        <span class="text-[#C8A45D]">SEBI</span> • 
                        <span class="text-[#C8A45D]">PMS</span> • 
                        <span class="text-[#C8A45D]">AIF</span> • 
                        <span class="text-[#C8A45D]">IA</span> • 
                        <span class="text-[#C8A45D]">RA</span> • 
                        AML • GOVERNANCE
                    </div>

                    <div class="bg-[#0a0e17]/40 border border-zinc-900/60 p-4 max-w-4xl mx-auto text-center">
                        <span class="text-[#C8A45D] font-mono text-[10px] uppercase tracking-wider block mb-1">Regulatory Disclaimer</span>
                        <p class="text-[11px] text-zinc-500 leading-relaxed max-w-2xl mx-auto">
                            Content published by Regex Consultancy is informational and should not be considered legal or regulatory advice. Readers are encouraged to verify changing statutory circular mandates directly against public records before taking structural action.
                        </p>
                    </div>

                    <div class="text-center text-zinc-600 font-mono text-[10px] pt-2">
                        &copy; 2026 Regex Consultancy. All rights reserved.
                    </div>

                </div>

            </div>
        `;
    }
});
