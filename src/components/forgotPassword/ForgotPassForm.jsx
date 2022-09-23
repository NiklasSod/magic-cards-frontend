import "./forgotPassForm.css";

export default function ForgotPassForm() {
  return (
    <form action="#" className="form" autoComplete="off">
      <div className="form-row">
        <label htmlFor="email">
          Email:
          <input
            autoComplete="off"
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
