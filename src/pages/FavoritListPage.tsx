import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { favoritesStore } from "src/store/favoritesStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { contactsStore } from "src/store/contactsStore";

export const FavoritListPage = observer(() => {
  const { get } = contactsStore;

  useEffect(() => {
    get();
    favoritesStore.getFavorites();
  }, []);

  return (
    <Row xxl={4} className="g-4">
      {favoritesStore.favorites?.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
