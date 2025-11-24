import { isValidEmail, isValidPassword, isValidText } from "./regularEx";
import { passMsg, removeMsg } from "../assets/data";

export default async function registerValidation(user, setMessage) {
    for (const key in user) {
        if (user[key] == "") {
            setMessage({ status: true, msg: "Please Fill All Field..." });
            removeMsg(setMessage);
            return false;
        }
    }
    if (!isValidText(user.name)) {
        setMessage({ status: true, msg: "Please Enter Valid Name " });
    }
    else if (!isValidEmail(user.email)) {
        setMessage({ status: true, msg: "Please Enter Valid Email " });
    }
    else if (!isValidPassword(user.password) || !isValidPassword(user.conf_password)) {
        setMessage({ status: true, msg: passMsg });
    }
    else if (user.conf_password != user.password) {
        setMessage({ status: true, msg: "Password MissMatch... " });
    }
    else return true;
    removeMsg(setMessage);
    return false;
}