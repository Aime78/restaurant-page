import _ from "lodash";
import "./styles/contact.css";

/**
 *  function of the contact page of the website
 */

export const contactPage = function(e) {

    // Create the main parts of the home page
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    main.innerHTML = `<!--*********************** THE MAIN PART OF THE PAGE **************************-->
    <h1 class="location-contact-header">LOCATION & CONTACT</h1>
        <p>EMAIL: INFO@BURGERCORNER.COM <span class="tel">TEL: 123-456-7890</span> </p>
        <div class="section-container">
            <section class="contact-section-one">
                <h1>RESERVE A TABLE HERE AND WE'LL <br> GET BACK TO YOU TO CONFIRM</h1>
                <form action="">
                    <input type="date" id="date">
                    <input type="time" id="time">
                    <select name="Party size" id="party-size">
                        <option value="">Party Size</option>
                        <option value="">1 person</option>
                        <option value="">2 people</option>
                        <option value="">3 people</option>
                        <option value="">4 people</option>
                        <option value="">5 people</option>
                    </select>
                    <input type="submit" name="" id="book" value="Book Now">
                </form>
            </section>

            <section class="contact-section-two">
            <h1>500 TERRY FRANCOIS ST. SAN FRANCISCO, CA 94158 <br> OPENING HOURS: 11:00AM-11:00PM</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8294844261964!2d-122.38939518497494!3d37.77059622017341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f1a33f38ea7%3A0xe4941e6c1dc4022b!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158%2C%20USA!5e0!3m2!1sen!2srw!4v1655628204160!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
    `
    footer.innerHTML = `<!--*********************** THE FOOTER OF THE PAGE **************************-->
    Copyright &copy; 2022 Rukundoaime
    `
    // Append the main parts to the body of the home page
    document.body.setAttribute('id', 'contact-body');
    // header.setAttribute('class','contact-header');
    main.setAttribute('class','contact-main');
    footer.setAttribute('class','contact-footer');
}