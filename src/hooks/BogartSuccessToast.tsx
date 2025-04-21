import { toast } from 'react-hot-toast'

export const showBogartSuccessToast = () => {
  toast.custom((t) => (
    <div
      className={`
        bg-orange-500 bg-opacity-60 text-white font-gotham-bold
        w-full rounded-lg p-4 border-4
        `}
    >
      <span>You just joined Bogart Inspo!</span>
    </div>
  ))
}
