
import { isValidEmail, isValidPassword } from "../validation/regularEx";
import { removeMsg } from "../assets/data";

var passMsg = <>
    <p><strong>Password must contain:</strong></p>
    <ul>
        <li>At least one uppercase letter (A–Z)</li>
        <li>At least one lowercase letter (a–z)</li>
        <li>At least one number (0–9)</li>
        <li>Minimum 8 characters in length</li>
    </ul></>

export default async function loginValidation(user, setMessage) {

    for (var key in user) {

        if (user[key] == "") {
            setMessage({ status: true, msg: "Please Fill All Field..." });
            removeMsg(setMessage);
            return false;
        }
    }

    if (!isValidEmail(user.email)) {
        setMessage({ status: true, msg: "Please Enter Valid Email " });

    }
    else if (!isValidPassword(user.password)) {
        setMessage({ status: true, msg: passMsg });

    }
    else return true;
    removeMsg(setMessage);
    return false;
}