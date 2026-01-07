import React from 'react'

const PrimaryButton = ({buttonName, className }) => {
  return (
    <button className={`!text-[--white]  !bg-[--primary] !font-semibold Inter400 !text-base  !rounded-md !capitalize ${className}`}>{buttonName}</button>
  )
}

export default PrimaryButton