import Button from '@/components/ui/Button/Button';
import EyeIcon from '@/components/ui/EyeIcon/EyeIcon';

const App = () => {
  return (
    <>
      <EyeIcon width="18px" height="18px" isActive={true} onClick={() => console.log('EyeIcon clicked')} />
      <br />
      <Button
        width="100px"
        typeView="alt"
        onClick={() => {
          console.log('Button clicked');
        }}
      >
        Ky
      </Button>
    </>
  );
};

export default App;
