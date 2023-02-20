const Total = ({ parts }) => {
  const count = parts.reduce((accu, curr) => accu + curr.exercises, 0)
  return (
    <p>Number of exercises {count} </p>
  )
}

export default Total
