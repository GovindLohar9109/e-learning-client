export default function AdminDashBoard() {
  return (
    <div className="w-100 ">
      <div className="d-flex align-item-center w-100 h-100">
        <div className="d-flex align-item-center text-center w-75 m-auto gap-3 justify-content-space-between">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header text-bold p-5">TOTAL USERS</div>
            <div className="card-body">
              <h1 className="card-title text-bold">0</h1>
            </div>
          </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header text-bold p-5">TOTAL COURSES</div>
            <div className="card-body">
              <h1 className="card-title text-bold">0</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
