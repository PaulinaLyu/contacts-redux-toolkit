import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useGetGroupsQuery } from "src/redux/groupsReducer";
import { useGetContactsQuery } from "src/redux/contactsReducer";

export const GroupPage = () => {
  const { groupId } = useParams<{ groupId: string }>();

  const { groupContacts } = useGetGroupsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      groupContacts: data?.find((group) => group.id === groupId),
    }),
  });

  const { contacts } = useGetContactsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      contacts: groupContacts
        ? data?.filter(({ id }) => groupContacts.contactIds.includes(id))
        : [],
    }),
  });

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts?.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
};
