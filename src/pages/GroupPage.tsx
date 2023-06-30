import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { observer } from "mobx-react-lite";
import { groupsStore } from "src/store/groupsStore";
import { useEffect } from "react";
import { contactsStore } from "src/store/contactsStore";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const { selectedGroup, selectedGroupContacts, setSelectedGroupId, getGroups } = groupsStore;
  const { getContacts } = contactsStore;

  useEffect(() => {
    debugger;
    if (groupId) {
      debugger;
      setSelectedGroupId(groupId);
    }
    getContacts();
    getGroups();
    debugger;
  }, [groupId]);

  return (
    <Row className="g-4">
      {selectedGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {Object.keys(selectedGroup).length > 0 ? (
                  <GroupContactsCard groupContacts={selectedGroup} />
                ) : (
                  "No group"
                )}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {selectedGroupContacts &&
                selectedGroupContacts?.map((contact) => (
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
});
