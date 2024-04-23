import { useDispatch } from "react-redux";
import { apiDeleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>🤠 {name}</p>
      <p className={css.contactText}>📞 {number}</p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
