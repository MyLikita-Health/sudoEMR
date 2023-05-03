import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { Badge } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

function PatientNotificationBell() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [unread, setUnread] = useState(0);
  const notifications = useSelector(
    (state) => state.notifications.notifications
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
    [dispatch, _countUnreadNot]
  );

  const gotoNotification = () => {
    history.push('/user/notifications');
  };

  return (
    <span onClick={gotoNotification} className="btn">
      <MdNotifications color='#fff' size={30} />
      {unread ? (
        <Badge color="danger" pill>
          {unread}
        </Badge>
      ) : null}
    </span>
  );
}

export default PatientNotificationBell;
