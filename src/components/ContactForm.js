function ContactForm({ name, age }) {
  return (
    <div>
      <input type="text" placeholder="Name" />
      <textarea
        placeholder="Message"
        name="message"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button>Submit</button>
    </div>
  );
}

export default ContactForm;
