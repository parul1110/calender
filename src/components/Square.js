export default function Square({ id, onClick }) {
    return (
      <div className="square" onClick={onClick}>
        {id}
      </div>
    );
  }