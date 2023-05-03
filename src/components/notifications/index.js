import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Loading from '../comp/components/Loading';
// import { Card, CardTitle } from 'reactstrap';
import { getNotifications } from '../../redux/actions/notifications';
import moment from 'moment';
import { MdNotificationsOff } from 'react-icons/md';
import BackButton from '../comp/components/BackButton';

function NotificationsContainer() {
  const dispatch = useDispatch();
  // const loading = useSelector(
  //   (state) => state.notifications.loadingNotifications
  // );
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );

  useEffect(() => dispatch(getNotifications()), []);

  return (
    <>
      <BackButton text="Go Back" />
      <div className="card p-2 m-2">
        <div className="card-title text-center">
          <h5>Your Notifications</h5>
        </div>
        {/* {loading && <Loading />} */}
        {notifications && notifications.length
          ? notifications.map((item, index) => (
              <div className="card p-2 mt-1 mb-1" key={index}>
                <div className="card-title">
                  <h6>{item.title}</h6>
                </div>
                <span>{item.message}</span>
                <span className="small text-muted text-right">
                  {moment(item.timestamp).fromNow()}
                </span>
              </div>
            ))
          : null}

        {!notifications.length && (
          <div className="alert alert-primary text-center">
            <MdNotificationsOff size={50} />
            <p>You currently do not have any notification.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default NotificationsContainer;
