export default function Layer({ list }) {
  return <div
      className="  w-100 p-3 text-center text-bold text-white"
      style={{ background: 'red' }}
    >
      <div className="row">
        {list.map((item, idx) => {
          return (
            <div className="col-sm">
              {item.img}
              &nbsp;&nbsp;&nbsp;
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
}
