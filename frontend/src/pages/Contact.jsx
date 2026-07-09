import { useState } from "react";
import { MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      if (!formData.name || !formData.phone || !formData.message) {
        throw new Error("Please fill in all fields");
      }

      // For now, store in localStorage
      // In production, send to backend via API
      const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
      contacts.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("contacts", JSON.stringify(contacts));

      setStatus("Thank you! We will contact you soon.");
      setFormData({ name: "", phone: "", message: "" });
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

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
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          rows="5"
          placeholder="What are you looking for?"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send enquiry"}
        </button>
        {status && (
          <p className={status.includes("Error") ? "error" : "success"}>
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
