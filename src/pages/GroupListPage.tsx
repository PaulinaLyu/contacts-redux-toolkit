import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupsStore } from "src/store/groupsStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

export const GroupListPage = observer(() => {
  useEffect(() => {
    groupsStore.getGroups();
  }, []);
  return (
    <Row xxl={4}>
      {/* {isLoading && <Loader />} */}
      {groupsStore.groups?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
