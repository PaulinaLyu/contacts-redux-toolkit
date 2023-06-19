import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { favoritesStore } from "src/store/favoritesStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { contactsStore } from "src/store/contactsStore";

export const FavoritListPage = observer(() => {
  const { getContacts } = contactsStore;
  const { getFavorites, favorites } = favoritesStore;

  useEffect(() => {
    getContacts();
    getFavorites();
  }, []);

  return (
    <Row xxl={4} className="g-4">
      {favorites?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
