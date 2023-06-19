import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { contactsStore } from "src/store/contactsStore";
import { observer } from "mobx-react-lite";

export const ContactPage = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();
  const { selectedContact, getSelectedContact } = contactsStore;

  useEffect(() => {
    if (contactId) {
      getSelectedContact(contactId);
    }
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {selectedContact ? (
          <ContactCard contact={selectedContact} />
        ) : (
          <Empty />
        )}
      </Col>
    </Row>
  );
});
