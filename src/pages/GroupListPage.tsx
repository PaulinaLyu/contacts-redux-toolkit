import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useGetGroupsQuery } from "src/redux/groupsReducer";
import { Loader } from "src/components/Loader";

export const GroupListPage = () => {
  const { data: groups, isLoading } = useGetGroupsQuery();
  return (
    <Row xxl={4}>
      {isLoading && <Loader />}
      {groups?.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
};
