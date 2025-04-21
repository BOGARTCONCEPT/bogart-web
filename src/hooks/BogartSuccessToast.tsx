import BogartButtonComponent from '@/components/BogartButtonComponent';
import { toast } from 'react-hot-toast';

export const showBogartSuccessToast = () => {
  // console.log('showBogartSuccessToast called');
  toast.custom(() => (
    <div
      className={`
        w-64  bg-orange-500 bg-opacity-60 text-white
        font-gotham-bold  rounded-lg border-4 flex items-center justify-center py-2
      `}
    >
      <BogartButtonComponent isDisabled={true} />
      <span className="text-center px-4">You just joined Bogart Inspo!</span>
    </div>
  ));
};
