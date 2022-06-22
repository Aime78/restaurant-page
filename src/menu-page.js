import _ from "lodash";
import "./styles/menu.css";

// Assets of our menu-burgers
import classicBurger from "./images/classic-burger.png";
import baconCheeseBurger from "./images/bacon-cheese-burger.jpg";
import onionBurger from "./images/onion-burger.jpg";
import chcickenNCheeseBurger from "./images/chicken-n-cheese-burger.jpeg";

// Assets of our side-dishes
import frenchFries from "./images/french-fries.jpg";
import potatoeWedges from "./images/potatoe-wedges.jpg";
import onionRings from "./images/onion-rings.jpg";
import mashedPotatoes from "./images/mashed-potatoes.jpg";



/**
 *  function of the menu page of the website
 */

export const menuPage = function(e) {

    // Create the main parts of the home page
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // Create the main contents of the home page
    main.innerHTML = `<!--*********************** THE MAIN PART OF THE PAGE **************************-->
    <h1>OUR MENU </h1>
    <section class="menu-section-one">
        <h1>BURGERS</h1>
        <ul class="menu-ul">
            <li class="menu-li">
                <img src=${classicBurger} alt="classic burger" width="130px" class="menu-img">
                <h2>Classic Burger <span>.........................................................................<span class="price">US$6</span></span>
                </h2>
                
                <p>ground beef, diced yellow onion, garlic, egg, worcestershire sauce, pepper.</p>
            </li>
            <li class="menu-li">
                <img src=${baconCheeseBurger} alt="bacon cheese burger" width="130px" class="menu-img">
                <h2>Bacon Cheese Burger 
                    <span>...........................................................<span class="price">US$5.5</span>
                </h2>
                <p>sharp cheedar cheese, slices bacon, ground chunk, sweet onion, worcestershire sauce. freshly cracked pepper.</p>
            </li>
            <li class="menu-li">
                <img src=${onionBurger} alt="onion burger" width="130px" class="menu-img">
                <h2>Onion Burger
                    <span>............................................................................<span class="price">US$4</span>
                </h2>
                <p>Canola oil, ground beef, ground black pepper, sliced onions, american cheese, hamburger buns</p>
            </li>
            <li class="menu-li">
                <img src=${chcickenNCheeseBurger} alt="chicken and cheese burger" width="130px" class="menu-img">
                <h2>Chicken n Cheese Burger
                    <span>.....................................................<span class="price">US$10</span>
                </h2>
                <p>burger buns, cheese slices, ranch dresssing, refined oil, chicken breasts, salsa sauce, lettuce loose-leaf</p>
            </li>
        </ul>
    </section>
    
    <section class="menu-section-two">
            <h1>SIDE DISHES</h1>
            <ul class="menu-ul">
                <li class="menu-li">
                    <img src=${frenchFries} alt="french fries" width="130px" class="menu-img">
                    <h2>French Fries
                        <span>.............................................................................<span class="price">US$3</span>
                    </h2>
                    <p>russet potatoes, peeled and cut into 1/4-inch by 1/4-inch fries, kosher salt, peanut oil</p>
                </li>
                <li class="menu-li">
                    <img src=${potatoeWedges} alt="potatoe wedges" width="130px" class="menu-img">
                    <h2>Potato Wedges
                        <span>......................................................................<span class="price">US$2.5</span>
                    </h2>
                    <p>russet potatoes, olive oil, salt, pepper, garlic powder, dried oregano, paprika, vegetarian parmesan cheese</p>
                </li>
                <li class="menu-li">
                    <img src=${onionRings} alt="onion rings" width="130px" class="menu-img">
                    <h2>Onion Rings
                        <span>.............................................................................<span class="price">US$4</span>
                    </h2>
                    <p>onion, all purpose flour, baking powder, smoked paprika, egg, milk, ground pepper, crumbs to coat, oil for frying</p>
                </li>
                <li class="menu-li">
                    <img src=${mashedPotatoes} alt="mashed potatoes" width="130px" class="menu-img">
                    <h2>Mashed Potatoes
                        <span>...................................................................<span class="price">US$5.5</span>
                    </h2>
                    <p>pounds potatoes, cloves garlic, minced, fine sea salt, tablespoons butter, whole milk, cream cheese, freshly-cracked black pepper</p>
                </li>
            </ul>
        </section>`

        footer.innerHTML = `<!--*********************** THE FOOTER OF THE PAGE **************************-->
        Copyright &copy; 2022 Rukundoaime`

    // Append the main parts to the body of the home page
    document.body.setAttribute('id', 'menu-body');
    main.setAttribute('class','menu-main');
    footer.setAttribute('class','menu-footer');
}
