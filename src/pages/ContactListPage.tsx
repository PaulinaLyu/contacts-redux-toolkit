import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { useAppSelector } from "../redux/hooks";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { filterContacts, useGetContactsQuery } from "src/redux/contactsReducer";
import { Loader } from "src/components/Loader";
import { useDispatch } from "react-redux";
import { useGetGroupsQuery } from "src/redux/groupsReducer";

export const ContactListPage = () => {
  const filtered = useAppSelector((state) => state.contacts.filteredContacts);
  const dispatch = useDispatch();

  const { data: contacts, isLoading } = useGetContactsQuery();
  const { data: groups } = useGetGroupsQuery();

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    dispatch(
      filterContacts({
        form: fv,
        contacts: contacts || [],
        groups: groups || [],
      })
    );
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {isLoading && <Loader />}
          {filtered.length > 0
            ? filtered.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))
            : contacts &&
              contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
        </Row>
      </Col>
    </Row>
  );
};
