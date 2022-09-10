import { useAppContext } from "../context/AppContext";
import {useTransition, animated, config} from 'react-spring';

const NotificationComponent = () => {
  const { showNotification, notificationData } = useAppContext(); // hola te quiero mucho :D taylor swift es la industria musical y la q soporte [programar]

  const renderClassNameBody = () => {
    if (showNotification) {
      const { type } = notificationData;

      switch (type) {
        case "success":
          return "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md absolute bottom-0 left-0";
          break;
        case "error":
          return "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md absolute bottom-0 left-0";
          break;
        case "warning":
          return "bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md absolute bottom-0 left-0";
          break;
        default:
          return "";
          break;
      }
    } else {
      return "";
    }
  };

  const transition = useTransition(showNotification, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 20,
    config: config.molasses,
  });

  return (
    <>
    {transition((style, item) =>
    item ? (
      <animated.div id="modal_alert" className={renderClassNameBody()} style={style} role="alert">
        <div className="flex">
            <div className="py-1">
              {notificationData.type == "success" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {notificationData.type == "error" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {notificationData.type == "warning" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-orange-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div>
              <p className="font-bold">{notificationData.title}</p>
              <p className="text-sm">{notificationData.body}</p>
            </div>
          </div>
      </animated.div>
    ): null)}
      {/* {showNotification && (
        <div id="modal_alert" className={renderClassNameBody()} role="alert">
          <div className="flex">
            <div className="py-1">
              {notificationData.type == "success" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-teal-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {notificationData.type == "error" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {notificationData.type == "warning" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="fill-current h-6 w-6 text-orange-500 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div>
              <p className="font-bold">{notificationData.title}</p>
              <p className="text-sm">{notificationData.body}</p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default NotificationComponent;
