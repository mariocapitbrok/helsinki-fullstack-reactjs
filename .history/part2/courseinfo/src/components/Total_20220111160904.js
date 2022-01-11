import React from 'react'

const Total = ({ course }) => {
  const sumPartsExercises = (parts) => {
    let totalExercises = parts.reduce(
      (subtotal, part) => subtotal + part.exercises,
      0
    )
    return totalExercises
  }

  return <h3>total of {sumPartsExercises(course.parts)} exercises</h3>
}

export default Total
