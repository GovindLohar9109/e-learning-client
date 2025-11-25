export let url = "http://localhost:8000";
export function removeMsg(setMsg) {
    setTimeout(() => {
        setMsg({ status: false, msg: "" });
    }, 4000)
}

export const passMsg = <>
    <p><strong>Password must contain:</strong></p>
    <ul>
        <li>At least one uppercase letter (A–Z)</li>
        <li>At least one lowercase letter (a–z)</li>
        <li>At least one number (0–9)</li>
        <li>Minimum 8 characters in length</li>
    </ul></>