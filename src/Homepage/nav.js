
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header class="header">
        <div class="logo-div">
            <img class="img-logo" src="icon/aminah_logo-removebg-preview.png" alt="">
        </div>
    
        <button class="toggle-nav"
        aria-controls="primary-middle-nav"
        aria-expanded="false"
        ></button>
    
        <nav class="middle-nav">
            <ul id="primary-middle-nav" class="primary-nav navigation" data-visible="false">
                <li><a href="homepage.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="facilities.html">Facilities</a></li>
                <li><a href="PastProgrammes.html">Events</a></li>           
            <li><a href="student-kit.html">Student-Kit</a></li>
            <li><a class="contact-nav" href="ContactSection.html">Contact</a></li>
            </ul>
            </nav>
   
    </header>
        
        
        
        `
    }
}

customElements.define('my-header', MyHeader)

const nav = document.querySelector('.primary-nav');
const toggle = document.querySelector('.toggle-nav');
const mainContainer = document.querySelector('.div-header');

toggle.addEventListener('click', () => {
    const visibility = nav.getAttribute('data-visible');

    if (visibility === 'false'){
        nav.setAttribute('data-visible' , 'true');
        toggle.setAttribute('aria-expanded', 'true');
    }
    else if(visibility === 'true'){
        nav.setAttribute('data-visible' , 'false');
        toggle.setAttribute('aria-expanded', 'false');
    }
});

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <footer class="footer">
    <div class="footer-div">
        <div class="collab-div">
                <div class="collab-logo">
                    <img src="icon/iium-removebg.png" alt="">
                </div>
                <div class="collab-logo">
                    <img src="icon/mrcc-removebg.png" alt="">
                </div>
                <div class="collab-logo">
                    <img src="icon/kesatu-removebg.png" alt="">
                </div>
                <div class="collab-logo sdg">
                    <img src="icon/sdg-removebg.png" alt="">
                </div>
        </div>

        <div class="contact-details">
        <div class="map-div">
            <p class="title-footer">Find us here!</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.5998006745085!2d101.72928227409119!3d3.256519496718512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc38c73b6147ef%3A0x84c0dbe93028fa49!2sMahallah%20Aminah!5e1!3m2!1sen!2smy!4v1705401768149!5m2!1sen!2smy" 
            width="400px" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Mahallah Aminah, International Islamic University Malaysia,
                 Jalan Gombak, 53100 Kuala Lumpur, Malaysia.</p>
        </div>


    <div class="contact-div">
        <div class="contact-content">
            <p class="title-footer">Contact us</p>
            <p>Email:<a href=""> mrcmahallah@iium.edu.my</a></p>
            <p>Tel: 03 - 6421 5496 /5497</p>
        </div>

        <div class="social-media-div">
            <div class="social-logo">
                <img src="icon/facebook.svg" alt="">
            </div>
            <div class="social-logo">
                <img src="icon/twitter.svg" alt="">
            </div>
            <div class="social-logo">
                <img src="icon/insta.svg" alt="">
            </div>
        </div>
    </div>
</div>

    <div class="copyright">
        <p>copyright@2023-Web Technologies Ameenah</p>
    </div>
</div>
</footer>
             
        
        `
    }
}

customElements.define('my-footer', MyFooter)

const header = document.querySelector('.header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollWatcher);

const headerObserver = new IntersectionObserver((entries) =>
{
    header.classList.toggle('sticking', !entries[0].isIntersecting)
}, {
    rootMargin:'130px'
});

headerObserver.observe(scrollWatcher)
