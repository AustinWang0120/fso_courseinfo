const Total = ({ parts }) => {
  const count = parts.reduce((accu, curr) => accu + curr.exercises, 0)
  return (
    <b>Total of {count} exercises</b>
  )
}

export default Total
