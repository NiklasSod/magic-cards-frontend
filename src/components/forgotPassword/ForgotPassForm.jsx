import "./forgotPassForm.css";

export default function ForgotPassForm() {
  return (
    <form action="#" className="form">
      <div className="form-row">
        <label htmlFor="email">
          First name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter name here..."
          />
        </label>
      </div>
      <div className="form-row">
        <label htmlFor="email">
          Password:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email here..."
          />
        </label>
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
}
