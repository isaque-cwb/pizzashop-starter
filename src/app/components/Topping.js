import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IoMdCheckmark } from 'react-icons/io'

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  // checkbox state
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...additionalTopping, { ...topping }])
      setAdditionalTopping(Array.from(newToppings))
    } else {
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      setAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked])

  return (
    <div
      className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt=""
        className="mb-2"
      />
      {/* topping name */}
      <div className="text-sm capitalize text-center  fon font-medium">
        {topping.name}
      </div>
      {/* check box */}
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      {/* checkMark icon */}
      <div
        className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  )
}

export default Topping
