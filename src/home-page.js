import _ from "lodash";
import "./styles/style.css";
import alNik from "./images/al-nik.jpg";
import "./images/mae-mu.jpg";
import "./images/natalie-scott.jpg";

/**
 *  function of the home page of the website
 */

export const homePage = function() {

    // Create the main parts of the home page
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    main.innerHTML = `<!--*********************** THE MAIN PART OF THE PAGE **************************-->
    <section class="home-section-one">
            <div class="burger-div">
            <h1>MEET OUR MOST WANTED BURGER</h1>
            <p>Sink your teeth into this classic burger, filled with all of your favorites, and allow the bliss of spring to take over!</p>
            <a href="#" alt="menu" class="menu" id="view-menu"><span>View Menu</span></a>
            </div>
            <div class="burger-plate"><img src= ${alNik} alt="" width="513px" height="800px"></div>
    </section>

    <section class="home-section-two">
        <div class="home-section-container"> 
        <h1>Have you tasted our vegetarian dishes?</h1>
        <p>
            Gone are the days when all vegetarian recipes felt like side dishes, intended to be supporting actors to the rest of the table’s cast. These days we’re looking for vegetarian dinner ideas that are hearty, satisfying, flavorful, and can hold their own on a plate. 
        </p>
        <a href="#contact" alt="about us"><span>About BurgerCorner</span></a>
        </div>
    </section>`

    footer.innerHTML = `<!--*********************** THE FOOTER OF THE PAGE **************************-->
    <div class="footer-container">
            <div>
                <h1>Address</h1>
                <p>
                    500 Terry Francois Street <br> 
                    San Francisco, CA 94158
                </p>
            </div>
            <div>
                <h1>Opening Hours</h1>
                <p>
                    Mon-Fri: 11am-11pm <br>
                    Sat-Sun: 11am-12am
                </p>
            </div>
            <div>
                <h1>Contact Us</h1>
                <p>
                    Info@burgercorner.com <br>
                    123 456 6780
                </p>
            </div>
        </div>
        <div>
            Copyright &copy; 2022 Rukundoaime
        </div>`


    // Append contents
    main.removeAttribute('class');
    footer.setAttribute('class','home-footer');
    document.body.setAttribute('id','home-body');

}

/**
 * function that populates the header of the page
 */

export const navBar = function() {
    // Create the main parts of the home page
    const header = document.querySelector('header');

    // Create the main contents of the home page
    header.innerHTML = ` <!--*********************** THE HEADER OF THE PAGE **************************-->
    <h1>BurgerCorner</h1>
    <nav class="home-nav">
    <ul>
        <li><a href="#" alt="home" class="nav-bar" id="home">Home</a></li>
        <li><a href= "#" alt="menu" class="nav-bar" id="menu">Menu</a></li>
        <li><a href="#" alt="contact" class="nav-bar" id="contact">Contact & Location</a></li>
    </ul>
    </nav> `

    // Append contents
    header.setAttribute('class','home-header');
}