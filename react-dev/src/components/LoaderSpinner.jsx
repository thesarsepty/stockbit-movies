import Loader from 'react-loader-spinner'

function LoaderSpinner() {
  return (
    <Loader 
    type="Grid"
    color="#475e6e"
    height={100}
    width={100}
    timeout={1000}
    />
  )
}

export default LoaderSpinner
