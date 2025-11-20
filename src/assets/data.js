export let url = "http://localhost:8000";

export function removeMsg(setMsg) {
    setTimeout(() => {
        setMsg({ status: false, msg: "" });
    }, 4000)
}

