import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useGetFavoritesQuery } from "src/redux/favoritesReducer";
import { Loader } from "src/components/Loader";
import { useGetContactsQuery } from "src/redux/contactsReducer";

export const FavoritListPage = () => {
  const { data: favoritesIds, isLoading } = useGetFavoritesQuery();

  const { favorites } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      favorites: data?.filter(({ id }) => favoritesIds?.includes(id)),
    }),
  });

  return (
    <Row xxl={4} className="g-4">
      {isLoading && favorites ? (
        <Loader />
      ) : (
        favorites?.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))
      )}
    </Row>
  );
};
