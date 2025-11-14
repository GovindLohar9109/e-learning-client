import { useState } from "react";
const userInitialData = {
    email: "",
    password: "",

}
export default function Login() {

    const [user, setUser] = useState(userInitialData);
    const [message, setMessage] = useState({ status: false, msg: "" });

    function loginInputHandle(e) {
        var name = e.target.name;
        var value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    return (
        <div className="d-flex align-items-center w-100" style={{ height: "80vh" }}>
            <div className="container p-4  shadow rounded " style={{ maxWidth: "500px" }}>
                {(message.status) ?
                    <div class="alert alert-primary" role="alert">
                        {message.msg}
                    </div>
                    : ""
                }
                <h4 className="text-center fw-bold mb-4">LOGIN</h4>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-semibold">
                            <i className="fa-regular fa-envelope me-2 text-dark"></i>Enter Email
                        </label>
                        <input
                            type="email"
                            name="user_email"
                            defaultValue={user.user_email}
                            onChange={loginInputHandle}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-3 my-2">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">
                            <i className="fa-solid fa-lock me-2"></i>Password
                        </label>
                        <input
                            type="password"
                            name="user_password"
                            defaultValue={user.user_password}
                            onChange={loginInputHandle}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your password"
                        />
                    </div>

                    <a href="/register" className="text-primary">Register</a>
                    <button
                        type="button"

                        className="btn btn-primary mt-3 fw-bold mx-auto d-block w-50 mt-3"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

