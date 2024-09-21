

export const PrimaryButton = ({text}) => {
  return (
    <button className='border border-gray-400 bg-white hover:text-green-500 rounded px-5 py-1.5 md:py-1 lg:py-2 w-max'>{text}</button>
  )
}

export const SecondaryButton=({text})=>{
  return (
    <button className='border border-green-500 text-white bg-green-500 hover:bg-green-600 rounded w-max px-3 lg:px-5 py-1.5 md:py-1 lg:py-2'>{text}</button>
  )
}