

export default function PremiumCourseCard() {

    return (
        <div className="card" style={{ width: "25rem" }}>
            <img src={`${process.env.PUBLIC_URL}/img/cs/cn.png`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-bold">Computer Networking</h5>
                <p className="card-text">This course will provide you in depth knowledge of core PHP and this is the best course and there is high demand for this course.

                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="text-bold">Duration :</span>  3 hours</li>
                <li className="list-group-item">  <span className="text-bold">Price</span>&nbsp;&nbsp;&nbsp; <del>{20000}</del>&nbsp;&nbsp;&nbsp;&nbsp; &#8377;{1000}
                </li>
                <li className="list-group-item"><span className="text-bold">Validity :</span>&nbsp;2 years</li>
            </ul>
            <div className="card-body d-flex ">
                <button type="button" className="btn btn-danger d-block text-bold">Documentation</button>
                <button type="button" className="btn btn-primary d-block text-bold" style={{ marginLeft: "auto" }}>Buy</button>
            </div>
        </div>
    )
}