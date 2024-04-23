import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {
  selectContactsIsError,
  selectContactsIsLoading,
  selectTotalContacts,
  selectVisibleContacts,
} from "../../redux/selectors";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const isError = useSelector(selectContactsIsError);
  const totalContacts = useSelector(selectTotalContacts);

  const noContacts = filteredContacts.length === 0;
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {noContacts && <p>No contacts found.</p>}
      <ul className={css.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
      <p>Total Contacts: {totalContacts}</p>
    </div>
  );
};

export default ContactList;
