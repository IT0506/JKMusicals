
import { MapPin, Phone } from "lucide-react";
export default function Contact() {
  return (
    <section className="page-section contact-grid">
      <div>
        <p className="eyebrow">Contact</p>
        <h1>Visit JK Musicals</h1>
        <p>
          <MapPin /> S17 A First Floor, Near Yes Bank, Jaipuria Sunrise Plaza
          Mall, Ghaziabad
        </p>
        <p>
          <MapPin /> Tarana Musical Store, Sector-18, Noida
        </p>
        <p>
          <Phone /> +91 9811721524
        </p>
      </div>
      <form className="checkout-form">
        <input placeholder="Name" />
        <input placeholder="Phone" />
        <textarea rows="5" placeholder="What are you looking for?" />
        <button className="primary-button" type="button">
          Send enquiry
        </button>
      </form>
    </section>
  );
}
