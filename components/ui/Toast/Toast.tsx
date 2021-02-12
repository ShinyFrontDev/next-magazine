import Close from '@components/icons/Close'
import { useEffect } from 'react'
import { Button } from '../Button'
import { useToast } from '@lib/hooks/use-toast'

type Props = {
  children: React.ReactNode
  id: number
}

const Toast = ({ children, id }: Props) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="relative flex justify-between items-center text-sm mt-2 mx-auto w-11/12 bg-violet py-2 pl-6 pr-2 text-primary rounded-lg md:w-full">
      {children}
      <Button
        className=" text-primary"
        onClick={() => removeToast(id)}
        ariaLabel="Close"
      >
        <Close />
      </Button>
    </div>
  )
}

export default Toast
