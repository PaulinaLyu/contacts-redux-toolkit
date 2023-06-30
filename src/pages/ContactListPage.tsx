import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { contactsStore } from "../store/contactsStore";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";

import { Loader } from "src/components/Loader";

export const ContactListPage = observer(() => {
  const { isLoading, filteredContacts, setFormData } = contactsStore;
  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFormData(fv);
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {!isLoading ? (
            filteredContacts?.length > 0 ? (
              filteredContacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))
            ) : (
              <span>No contacts</span>
            )
          ) : (
            <Loader />
          )}
        </Row>
      </Col>
    </Row>
  );
});
