import { useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEyeSlash } from "react-icons/fa6";

function PasswordValidation() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setError("Password cannot be empty.");
    } else if (/\s/.test(value)) {
      setError("Password must not contain spaces.");
    } else if (!/[A-Z]/.test(value)) {
      setError("Password must include at least one uppercase letter.");
    } else {
      setError("");
    }
  };

  return (
    <center>
      <div>
        <div>
          <input
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            placeholder={passwordVisible ? "Password (Visible)" : "Password (Hidden)"}
          />
          <i onClick={handleToggle}>
            {passwordVisible ? <LiaEyeSolid /> : <FaRegEyeSlash />}
          </i>
        </div>
        {error && <div>{error}</div>}
      </div>
    </center>
  );
}

export default PasswordValidation;
