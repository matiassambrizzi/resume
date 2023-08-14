import {Stack} from '@mui/system';
import {Resume} from './components/Resume/Resume';
import {matiDataGerman} from './data';

function App() {
  return (
    <Stack 
      alignItems="center" 
      justifyContent={"center"}
    >
      <Resume data={matiDataGerman} />
    </Stack>
  );
}

export default App;
