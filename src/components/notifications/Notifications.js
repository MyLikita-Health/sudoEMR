import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from 'reactstrap';
import { MdNotifications } from 'react-icons/md';
import { useEffect } from 'react';
import {
  readNotification,
  notificationTypes,
} from '../../redux/actions/notifications';
import { useHistory } from 'react-router';
import { UNAPPROVED_APPOINTMENTS } from '../doc_dash/routes';
import moment from 'moment';
import { Link } from 'react-router-dom';

function NotificationBob() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setState] = useState(false);
  const [unread, setUnread] = useState(0);
  const toggle = () => setState((prevState) => !prevState);

  const notifications = useSelector(
    (state) => state.notifications.notifications,
  );

  const _countUnreadNot = () => {
    let count = 0;
    notifications.forEach((item) => {
      if (!item.read) {
        count++;
      }
    });

    setUnread(count);
  };

  useEffect(
    () => {
      _countUnreadNot();
    },
    [dispatch, _countUnreadNot],
  );

  const readNot = (not) => {
    dispatch(readNotification(not));
    switch (not.type) {
      case notificationTypes.APPOINTMENT:
        history.push(UNAPPROVED_APPOINTMENTS);
        break;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-direction-row align-items-center">
      <Dropdown
        direction="left"
        isOpen={isOpen}
        toggle={toggle}
        style={{ cursor: 'pointer' }}
      >
        <DropdownToggle tag="span" className="btn" style={{ margin: '0 10px' }}>
          <MdNotifications style={{ color: '#fff', fontSize: 30 }} />
          {unread ? (
            <Badge color="danger" pill>
              {unread}
            </Badge>
          ) : null}
        </DropdownToggle>
        <DropdownMenu className="p-2">
          <h6>Your Notifications</h6>
          {notifications.map((item) => (
            <NotificationItem item={item} readNot={readNot} />
          ))}
          {/* <DropdownItem
            tag="a"
            onClick={() => history.push('/notifications')}
            className={`d-flex flex-row justify-content-between p-0 mt-2`}
          >
            View all
          </DropdownItem> */}
          <Link to="/me/doctor/notifications">more notifications</Link>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

function NotificationItem({ item, readNot }) {
  return (
    <DropdownItem
      tag="div"
      onClick={() => readNot(item)}
      className={`${
        item.read ? '' : 'font-weight-bold'
      } d-flex flex-row justify-content-between p-0 mt-1 mb-1`}
    >
      {/* <Card className="p-2 m-0"> */}
      <span className="mr-4">{item.title}</span>
      {/* <span>{item.message.slice(0, 60)}</span> */}
      <span>{moment(item.timestamp).fromNow()}</span>
      {/* </Card> */}
    </DropdownItem>
  );
}

export default NotificationBob;
