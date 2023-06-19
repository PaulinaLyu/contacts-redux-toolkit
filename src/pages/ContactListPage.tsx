import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";

import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useGetContactsQuery } from "src/redux/contactsReducer";
import { Loader } from "src/components/Loader";

import { useGetGroupsQuery } from "src/redux/groupsReducer";
import { useEffect, useState } from "react";
import { ContactDto } from "src/types/dto/ContactDto";

export const ContactListPage = () => {
  const [formData, setFormData] = useState<Partial<FilterFormValues> | null>(
    null
  );
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>([]);

  const { data: contacts, isLoading } = useGetContactsQuery();
  const { data: groups } = useGetGroupsQuery();

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    setFormData(fv);
  };

  useEffect(() => {
    let result = contacts || [];

    if (formData) {
      if (formData?.name && contacts) {
        const filteredName = formData?.name.toLowerCase();
        result = contacts?.filter(
          ({ name }) => name.toLowerCase().indexOf(filteredName) > -1
        );
      }

      if (formData.groupId && contacts) {
        const groupContacts = groups?.find(({ id }) => id === formData.groupId);

        if (groupContacts) {
          result = result?.filter(({ id }) =>
            groupContacts.contactIds.includes(id)
          );
        }
      }
    }
    setFilteredContacts(result);
  }, [contacts, formData]);

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {isLoading && <Loader />}
          {filteredContacts?.length > 0 ? (
            filteredContacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))
          ) : (
            <span>No contacts</span>
          )}
        </Row>
      </Col>
    </Row>
  );
};
