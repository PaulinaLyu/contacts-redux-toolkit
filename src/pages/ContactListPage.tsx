import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { contactsStore } from "../store/contactsStore";

import { FilterForm, FilterFormValues } from "src/components/FilterForm";

import { Loader } from "src/components/Loader";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

export const ContactListPage = observer(() => {
  const { get, contacts } = contactsStore;
  // const filtered = useAppSelector((state) => state.contacts.filteredContacts);
  // const isNoContacts = useAppSelector((state) => state.contacts.isNoContacts);
  // const dispatch = useDispatch();

  // const { data: contacts, isLoading } = useGetContactsQuery();
  // const { data: groups } = useGetGroupsQuery();

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    // dispatch(
    //   filterContacts({
    //     form: fv,
    //     contacts: contacts || [],
    //     groups: groups || [],
    //   })
    // );
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {/* {isLoading && <Loader />}
          {filtered.length > 0 &&
            !isNoContacts &&
            filtered.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
          {filtered.length === 0 && isNoContacts && <span>No contacts</span>} */}
          {contacts &&
            contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
});
