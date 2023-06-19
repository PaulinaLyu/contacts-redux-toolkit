import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupsStore } from "src/store/groupsStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Loader } from "src/components/Loader";

export const GroupListPage = observer(() => {
  const { getGroups, groups, isLoading } = groupsStore;

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Row xxl={4}>
      {!isLoading ? (
        groups?.map((groupContacts) => (
          <Col key={groupContacts.id}>
            <GroupContactsCard groupContacts={groupContacts} withLink />
          </Col>
        ))
      ) : (
        <Loader />
      )}
    </Row>
  );
});
