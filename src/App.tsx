import EyeIcon from './components/ui/EyeIcon/EyeIcon';

const App = () => {
  return (
    <>
      <EyeIcon width="18px" height="18px" isActive={true} onClick={() => console.log('EyeIcon clicked')} />
    </>
  );
};

export default App;
