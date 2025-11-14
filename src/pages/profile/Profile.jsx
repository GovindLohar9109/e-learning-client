

export default function Profile() {

    return (<>
        <div className=" w-100 h-100 d-flex align-items-center justify-content-center">
            <form className="shadow p-5 w-50">
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" value={"Govind"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group my-3">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" readOnly value={"govindlohae@3gmailcom"} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Role</label>
                    <input type="text" readOnly value={"Admin"} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" className="btn mt-4 m-auto w-50 btn-primary">Edit Profile</button>
            </form>


        </div>
    </>)
}