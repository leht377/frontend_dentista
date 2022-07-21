const Alert = ({ msg, type }) => {
  const styleMsg = type === 'error' ? 'alert-danger' : 'alert-success';

  if (msg == null) {
    return null;
  } else {
    return (
      <div
        className={`alert ${styleMsg} d-flex align-items-center`}
        role="alert"
      >
        <div>{msg}</div>
      </div>
    );
  }
};

export default Alert;
