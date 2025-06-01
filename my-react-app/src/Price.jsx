export default function Price({ oldPrice, newPrice }) {
  return (
    <>
      <div className="Price">
        <span style={{ textDecoration: "line-through", color: "#999" }}>{oldPrice}</span>
        &nbsp; &nbsp; &nbsp;
        <span style={{ color: "#e74c3c", fontWeight: "bold" }}>{newPrice}</span>
      </div>
    </>
  );
}
