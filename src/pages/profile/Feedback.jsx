
export default function Feedback() {
    return (
        <>
            <div className=" w-100 h-100 d-flex align-items-center justify-content-center">
                <form className="shadow p-5 w-50">
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="text-bold form-label">Feedback</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn mt-4 m-auto w-50 btn-primary">Add Feedback</button>
                </form>
             </div>
        </>
    )
}